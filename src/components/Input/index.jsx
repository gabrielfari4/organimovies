import './styles.css'

const Input = (props) => {

    const onType = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <>
            <div className='input'>
                <label>{props.label}</label>
                <div className='search'>
                    <input type="text" placeholder={props.placeholder} onChange={onType} />
                    <button onClick={props.onClicked}>
                        <img src="../../images/search.svg" alt="search icon" />

                    </button>
                </div>
                    
            </div>
        </>
    )
}

export default Input;