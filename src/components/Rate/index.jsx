import Stars from '../Stars';
import './styles.css';

const Rate = (props) => {

    return (
        <div className='rating'>
            <label htmlFor="">Classificação</label>
            <Stars onClicked={props.onClicked} check={props.check} value={props.value}/>
        </div>
    )
}

export default Rate;