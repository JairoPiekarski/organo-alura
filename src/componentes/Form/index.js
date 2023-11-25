import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const Submit = (e) => {
        e.preventDefault();
        props.newWorker({
            name,
            job,
            image,
            team
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return (
        <section>
            <form className='form' onSubmit={Submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    required={true}
                    label='Nome' 
                    placeholder='Digite seu nome' 
                    value = {name}
                    changed = {value => setName(value)}
                />
                <TextField 
                    required={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo' 
                    value = {job}
                    changed = {value => setJob(value)}
                />
                <TextField 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    value = {image}
                    changed = {value => setImage(value)}
                />
                <DropDown 
                    required = {true}
                    label = 'Time' 
                    itens = {props.teams}
                    value = {team}
                    changed = {value => setTeam(value)}
                />
                <Button text='Criar card'/>
            </form>
        </section>
    )
}

export default Form