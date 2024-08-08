import './styles.css'

const Stars = (props) => {
    return (
        <span className="star-rating">
            <input type="radio" name="rating" value="1" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="2" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="3" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="4" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="5" onChange={e => props.onClicked(e.target.value)}/><i></i>
        </span>
    )
}

export default Stars;