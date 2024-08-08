import './styles.css'

const Input = (props) => {

    const onType = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className='input'>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} onChange={onType}/>
        </div>
    )
}

export default Input;