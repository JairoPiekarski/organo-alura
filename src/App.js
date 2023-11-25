import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      secondaryColor: '#D9F7E9',
      primaryColor: '#57C278'
    },
    {
      name: 'Front-End',
      secondaryColor: '#E8F8FF',
      primaryColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      secondaryColor: '#F0F8E2',
      primaryColor: '#A6D157'
    },
    {
      name: 'UI/UX',
      secondaryColor: '#FAE9F5',
      primaryColor: '#DB6EBF'
    },
    {
      name: 'Devops',
      secondaryColor: '#FDE7E8',
      primaryColor: '#E06B69'
    },
    {
      name: 'Mobile',
      secondaryColor: '#FFF5D9',
      primaryColor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      secondaryColor: '#FFEEDF',
      primaryColor: '#FF8A29'
    }
  ]

  const [workers, setWorkers] = useState([])

  const addNewWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} newWorker = {worker => addNewWorker(worker)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        workers={workers.filter(worker => worker.team === team.name)}
      />)}
    </div>
  );
}

export default App;
