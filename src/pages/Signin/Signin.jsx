import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import logo from './ze-delivery-logo.png'

function Signin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();  

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para a home
            navigate('/home')
            return
        }

        alert('Email e/ou senha incorretos')
    }
    
    return (
        <>
        <div className='singin-container'> 
            <img src={logo} alt="ze delivery" className='logo' />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='input' />
                <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} className='input'/>
                <button type='submit' className='button'>Entrar</button>
            </form>

        </div>   
        </>
    )
}

export default Signin