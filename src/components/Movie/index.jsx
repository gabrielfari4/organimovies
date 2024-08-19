import { useEffect, useState } from 'react';
import APIKey from '../../config/key'
import './styles.css'

const Movie = (props) => {

    const [imgUrl, setImgUrl] = useState('');
    const [name, setName] = useState('');

    const fetchMovie = async () => {
        try {
          const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${props.name}&api_key=${APIKey}`);
          const response = await data.json();
          
          // Verifique se há resultados antes de acessar a propriedade backdrop_path
          if (response.results && response.results.length > 0) {
            const img = `https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`;
            setImgUrl(img); // Atualize o estado com a URL da imagem
            const originalName = response.results[0].original_title;
            setName(originalName);
          } else {
            console.error("Nenhum resultado encontrado para o filme:", props.name);
            setImgUrl(''); // Ou defina uma URL padrão se não houver resultados
            setName('');
          }
        } catch (error) {
          console.error("Erro ao buscar o filme:", error);
          setImgUrl(''); // Defina uma URL padrão ou de erro em caso de falha
          setName('');
        }
      };

      useEffect(() => {
        fetchMovie()
      }, [props.name]);


    return (
        <div className='movie'>
            <div className='cabecalho'>
            <img src={imgUrl} alt={`Foto ${props.name}`} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <ul>
                  {props.genres.map((genre) => {
                    return (
                      <li>{genre.name}</li>
                    )
                  })}
                </ul>
            </div>
        </div>
    )
}

export default Movie;