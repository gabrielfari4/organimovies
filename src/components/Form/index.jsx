import { useState } from 'react';
import Input from '../Input';
import './styles.css'
import Dropdown from '../Dropdown';
import Rating from '../Rating';
import Button from '../Button';

const Form = (props) => {

    const [genre, setGenre] = useState('');



    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para classificar os filmes</h2>
                <Input value='Nome' placeholder='Escreva o nome do filme' />
                <Dropdown label='Gênero'
                items={props.genre}
                value={genre}
                onChanged={value => setGenre(value)}
                />
                <Rating />
                <Button>Classificar</Button>
            </form>
        </section>
    )
}

export default Form;