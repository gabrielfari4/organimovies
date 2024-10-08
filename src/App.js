import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Rating from './components/Rating';
import Footer from './components/Footer';


function App() {

  const rating = ['5','4','3','2','1']

  const [movies, setMovies] = useState([]);

  const onSubmittedMovie = (movie) => {
    setMovies([...movies, movie])
    console.log(movies)
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.movieId !== id))
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmittingMovie={movie => onSubmittedMovie(movie)}/>

    {
      rating.map(rate => {
        return (
          <Rating 
            rating={rate}
            key={rate}
            movies={movies.filter(movie => movie.rating === rate)}
            onDeleting={deleteMovie}
          />
          
        )
      })
    }
    
    <Footer />
    </div>
  );
}

export default App;
