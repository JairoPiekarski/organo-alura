import './TextField.css'

const TextField = (props) => {

    const whenTyping = (e) => {
        props.changed(e.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input required={props.required} value={props.value} onChange={whenTyping} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField