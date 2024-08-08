import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Rating from './components/Rating';


function App() {

  const genre = [
    'Ação',
    'Aventura',
    'Comédia',
    'Drama',
    'Documentário',
    'Suspense',
    'Terror',
  ]

  const rating = [
    {
      rate: '1'
    },
    {
      rate: '2'
    },
    {
      rate: '3'
    },
    {
      rate: '4'
    },
    {
      rate: '5'
    },
  ]

  const [movies, setMovies] = useState([]);

  const onSubmittedMovie = (movie) => {
    setMovies([...movies, movie])
    console.log(movies)
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmittingMovie={movie => onSubmittedMovie(movie)} genre={genre}/>

    {
      rating.map(rate => {
        return (
          <Rating 
            rating={rate.rate}
            key={rate.rate}
            movies={movies.filter(movie => movie.rating === rate.rate)}
          />
          
        )
      })
    }
    
    </div>
  );
}

export default App;
