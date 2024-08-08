import './styles.css'

const Movie = (props) => {
    return (
        <div className='movie'>
            <div className='cabecalho' style={{ backgroundColor: 'lightblue' }}>
            <img src={props.image} alt={`Foto ${props.name}`} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.genre}</h5>
            </div>
        </div>
    )
}

export default Movie;