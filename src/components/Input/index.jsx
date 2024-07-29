import './styles.css'

const Input = (props) => {
    return (
        <div className='input'>
            <label>{props.value}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;