import './Team.css'
import Worker from '../Worker'

const Team = (props) => {
    return (
        (props.workers.length > 0) ? <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='cards'>
                {props.workers.map( worker => <Worker name={worker.name} job={worker.job} image={props.image}/>)}
            </div>
        </section>
        :''
    )
}

export default Team