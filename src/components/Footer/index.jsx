import './styles.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='icons'>
                <img src="/images/fb.png" alt="Logo Facebook" />
                <img src="/images/tw.png" alt="Logo Twitter/X" />
                <img src="/images/ig.png" alt="Logo Instagram" />
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo Organo" />
            </div>
            <div className='text'>
                <p>Desenvolvido por Gabriel Faria.</p>
            </div>
        </section>
    )
}

export default Footer;