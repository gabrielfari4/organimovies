import './styles.css'

const Stars = (props) => {
    const inputs = document.querySelectorAll('input[name="rating"]')
    inputs.forEach((star) => {
        star.checked = props.check
      })

    /* let rate = props.value
    const inputs = document.querySelector(`input[value="${rate}"]`)
    inputs.checked = props.check */

    return (

        <span className="star-rating">
            <input type="radio" name="rating" value="1" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="2" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="3" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="4" onChange={e => props.onClicked(e.target.value)}/><i></i>
            <input type="radio" name="rating" value="5" onChange={e => props.onClicked(e.target.value)} /><i></i>
            {/* {[1, 2, 3, 4, 5].map(value => (
                <>
                <input
                    type="radio"
                    name="rating"
                    value={value}
                    checked={props.check === value}
                    onChange={() => props.onClicked(value)}
                    key={value}
                    />
                <i></i>
                </>
            ))} */}
            
        </span>
    )
}

export default Stars;