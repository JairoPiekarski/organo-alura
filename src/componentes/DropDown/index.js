import './DropDown.css'

const DropDown = (props) => {
  return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={e => props.changed(e.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown