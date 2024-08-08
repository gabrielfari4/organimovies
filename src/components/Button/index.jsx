import './styles.css';

const Button = (props) => {
    return (
        <button className='button' onClick={props.onClicked}>
            {props.children}
        </button>
    )
}

export default Button;