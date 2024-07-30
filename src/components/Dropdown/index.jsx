import './styles.css'

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} value={props.value}>
                <option className='option'  defaultValue={''}>Selecione um gênero</option>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;