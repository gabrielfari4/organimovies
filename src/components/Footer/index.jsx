import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/gabrielfaria88/' target='_blank' rel='noreferrer'><FaLinkedin size={30} color='white'/></a>
                <a href="https://github.com/gabrielfari4" target='_blank' rel='noreferrer'><FaGithub size={30} color='white'/></a>
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo Organo" />
            </div>
            <div className='text'>
                <p>Desenvolvido por Gabriel Faria. <br></br>Baseado no projeto Organo da Alura.</p>
            </div>
        </section>
    )
}

export default Footer;