import { useEffect, useState } from 'react';
import Input from '../Input';
import './styles.css'
import Dropdown from '../Dropdown';
import Button from '../Button';
import Rate from '../Rate';
import APIKey from '../../config/key';

const Form = (props) => {

    const [name, setName] = useState('');
    const [genres, setGenres] = useState([]);
    const [rating, setRating] = useState('');
    const [movies, setMovies] = useState([])
    const [genreList, setGenreList] = useState([]);
    const [genreArray, setGenreArray] = useState([]);

    const fetchMovie = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${APIKey}`)
            const response = await data.json()
            console.log(response.results)
            console.log(name)
            setMovies(response.results)
        } catch (error) {
            console.error("Erro ao buscar o filme:", error);
        }
    }

    const fetchGenre = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${APIKey}`)
            const response = await data.json()
            setGenreList(response.genres)
        } catch (e) {
            console.error("Erro ao buscar o filme:", e);
        }
    }
    
    const onSave = (e) => {
        e.preventDefault()
        props.onSubmittingMovie({
            name,
            genres,
            rating,
            genreArray
        })
        setName('');
        setGenres([]);
        setRating('');
        setGenreArray([]);
    }
    
    const Info = () => {
        console.log(name, genres, rating, genreArray)
    }

    useEffect(() => {
        const updatedGenreArray = genreList.filter((genre) => genres.includes(genre.id));
        setGenreArray(updatedGenreArray);
    }, [genres, genreList]);
    
    
    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para classificar os filmes</h2>
               
                    <Input label='Nome' placeholder='Busque o nome do filme' onChanged={value => setName(value)} value={name} onClicked={() => {
                        fetchMovie() 
                        fetchGenre()
                    }
                    }/>

                <div className='moviePosters'>
                    {movies.map((movie) => {
                        return (
                            <>                                
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} title={movie.title} key={movie.id} onClick={() => {
                                    setName(movie.title)
                                    setGenres(movie.genre_ids)
                                }
                                }/>
                            </>
                        )
                    })}
                </div>

                <div className='genre'>
                    <h2>Gênero</h2>
                    <ul>
                        {genreArray.map((gnr) => {
                            return (
                                <li>{gnr.name}</li>
                            )
                        })}
                    </ul>
                </div>
                
                <Rate
                    value={rating}
                    onClicked={value => {
                    setRating(value)
                } }/>
                <Button onClicked={Info}>Classificar</Button>
            </form>
        </section>
    )
}

export default Form;