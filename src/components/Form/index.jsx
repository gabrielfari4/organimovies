import { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import "./styles.css";
import Button from "../Button";
import Rate from "../Rate";
import APIKey from "../../config/key";
import data from '../../genres.json'

const Form = (props) => {
  const [name, setName] = useState("");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [starCheck, setStarCheck] = useState();
  const [renderStars, setRenderStars] = useState()

  const fetchMovie = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${APIKey}`
      );
      const response = await data.json();
      console.log(response.results);
      console.log(name);
      setMovies(response.results);
    } catch (error) {
      console.error("Erro ao buscar o filme:", error);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    props.onSubmittingMovie({
      name,
      genres,
      rating,
      genreArray,
      movieId,
    });
    setName("");
    setGenres([]);
    setGenreArray([]);
    setMovieId("");
    setSelectedMovieId("");
  };

  const Info = () => {
    console.log(name, genres, rating, genreArray, movieId);
  };

  useEffect(() => {
    const updatedGenreArray = data.genres.filter((genre) =>
      genres.includes(genre.id)
    );
    setGenreArray(updatedGenreArray);
  }, [genres]);


  const renderStar = useCallback(() => {
    return (
      <Rate
        value={rating}
        onClicked={(value) => {
          setRating(value);
          console.log(rating, starCheck, value)

        }}
        check={starCheck}
      />
    )
  }, [rating, starCheck])

  useEffect(() => {
    setRenderStars(renderStar)
  }, [movieId])

  const handleStars = () => {
    setStarCheck(false)
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para classificar os filmes</h2>

        <Input
          label="Nome"
          placeholder="Busque o nome do filme"
          onChanged={(value) => setName(value)}
          value={name}
          onClicked={(e) => {
            e.preventDefault()
            fetchMovie();
            setName("");
            setGenres([]);
            setGenreArray([]);
            setMovieId("");
            setSelectedMovieId("");
          }}
        />

        <div className="moviePosters">
          {movies.length ? movies.map((movie) => {
            const imgClass = movie.id === selectedMovieId ? "selected" : "";
            return (
              <>
                <img
                  className={imgClass}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`Poster do filme ${movie.title}`}
                  title={movie.title}
                  key={movie.id}
                  onClick={() => {
                    setName(movie.title);
                    setGenres(movie.genre_ids);
                    setMovieId(movie.id);
                    setSelectedMovieId(movie.id);
                  }}
                />
              </>
            );
          }) : <p>Nenhum resultado encontrado</p>}
        </div>
          <div>
          {renderStars}
          </div>
        <div className="submit-button">
            <Button onClicked={() => {
              Info()
              handleStars()
            }}>Classificar</Button>
        </div>        
      </form>
    </section>
  );
};

export default Form;
