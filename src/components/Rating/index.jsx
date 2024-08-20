import { useEffect, useState } from 'react';
import Movie from '../Movie';
import StarRating from '../StarRating';
import './styles.css'

const Rating = (props) => {

    const [ratingStars, setRatingStars] = useState([])

    const Stars = (rating) => {
        let ratingArray = []
        for (let i = 1; i <= rating; i++) {
            ratingArray.push(<StarRating />)
        }
        return ratingArray
    }

    useEffect(() => {
        setRatingStars(Stars(props.rating))

    }, [props.rating])

    return (
        props.movies.length > 0 && <section className='rating' style={{backgroundColor: 'gray'}}>
            <h3 style={{borderColor: 'black'}}>{
                // TODO: montar função (provavelmente com for e push)
                /* props.rating === "5" ?
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
                } */

                
                ratingStars
                }
                </h3>
            <div className='movie-container'>
                {props.movies.map(movie => {
                    return <Movie 
                        key={movie.name}
                        name={movie.name} genres={movie.genreArray}
                        id={movie.movieId}
                        />
                })}
            </div>
        </section>
    )
}

export default Rating;