import Stars from '../Stars';
import './styles.css';

const Rating = () => {
    return (
        <div className='rating'>
            <label htmlFor="">Classificação</label>
            <Stars />
        </div>
    )
}

export default Rating;