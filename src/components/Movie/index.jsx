import { useEffect, useState } from 'react';
import APIKey from '../../config/key'
import './styles.css'

const Movie = (props) => {

    const [imgUrl, setImgUrl] = useState('');
    const [name, setName] = useState('');
    const [nameBr, setNameBr] = useState('');

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

      const fetchId = async () => {
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/alternative_titles?api_key=${APIKey}`)
          const response = await data.json();

          if (response.length) {
            const titles = response.titles
            const titleBr = titles.filter((title) => {
              return title.iso_3166_1 === "BR"
            })
            setNameBr(titleBr[0].title)
          }
        } catch (e) {
          console.error("Erro ao buscar o nome do filme:", e);
          setNameBr('');
        }
      }

      useEffect(() => {
        fetchMovie()
        fetchId()
        console.log(props.id)

      }, [props.name]);


    return (
        <div className='movie'>
            <div className='cabecalho'>
            <img src={imgUrl} alt={`Foto ${props.name}`} />
            </div>
            <div className='rodape'>
              {/* TODO: puxar o nome sempre em PT ou EN */}
                <h4>{name}</h4>
                <h5>{nameBr}</h5>
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