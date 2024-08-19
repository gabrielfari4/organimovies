import Movie from '../Movie';
import StarRating from '../StarRating';
import './styles.css'

const Rating = (props) => {
    return (
        props.movies.length > 0 && <section className='rating' style={{backgroundColor: 'gray'}}>
            <h3 style={{borderColor: 'black'}}>{
                props.rating === "5" ?
                <>
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                </> 
                : props.rating === "4" ?
                <>
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                </>
                : props.rating === "3" ?
                <>
                <StarRating />
                <StarRating />
                <StarRating />
                </>
                : props.rating === "2" ?
                <>
                <StarRating />
                <StarRating />
                </>
                : props.rating === "1" ?
                <StarRating /> : null
                }
                </h3>
            <div className='movie'>
                {props.movies.map(movie => {
                    return <Movie 
                        key={movie.name}
                        name={movie.name} genres={movie.genreArray}
                        //image={movie.image}
                        />
                })}
            </div>
        </section>
    )
}

export default Rating;