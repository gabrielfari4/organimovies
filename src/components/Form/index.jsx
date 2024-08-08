import { useState } from 'react';
import Input from '../Input';
import './styles.css'
import Dropdown from '../Dropdown';
import Button from '../Button';
import Rate from '../Rate';
import StarRating from '../StarRating';

const Form = (props) => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const onSave = (e) => {
        e.preventDefault()
        props.onSubmittingMovie({
          name,
          genre,
          rating
        })
        setName('');
        setGenre('');
        setRating('');
    }

    const Info = () => {
        console.log(name, genre, rating)
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para classificar os filmes</h2>
                <Input label='Nome' placeholder='Escreva o nome do filme' onChanged={value => setName(value)} value={name}/>
                
                <Dropdown label='Gênero'
                items={props.genre}
                value={genre}
                onChanged={value => {
                    setGenre(value)
                    console.log(value)
                }}
                />
                <Rate
                    value={rating}
                    onClicked={value => {
                    setRating(value)
                    console.log(value)
                } }/>
                <Button onClicked={Info}>Classificar</Button>
            </form>
        </section>
    )
}

export default Form;