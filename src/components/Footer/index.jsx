import './styles.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='icons'>
                {/* TODO: trocar ícones e incorporar âncoras */}
                <img src="/images/fb.png" alt="Logo Facebook" />
                <img src="/images/tw.png" alt="Logo Twitter/X" />
                <img src="/images/ig.png" alt="Logo Instagram" />
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