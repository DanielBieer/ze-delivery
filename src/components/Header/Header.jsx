import { useNavigate } from 'react-router-dom'
import './Header.css'
import logo from './zedelivery-logo-branca.png'

function Header() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }


    return (
        <>
            <header className="header-container">
                <img src={logo} alt="Zé delivery" className='header-logo' />
                <button className='header-button' onClick={handleLogin}>Entrar</button>
            </header>
        </>
    )
}

export default Header