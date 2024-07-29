import { useState } from 'react';
import Input from '../Input';
import './styles.css'

const Form = () => {

    const [film, setFilm] = useState('');

    

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para classificar os filmes</h2>
                <Input value='Nome' placeholder='Escreva o nome do filme' />
            </form>
        </section>
    )
}

export default Form;