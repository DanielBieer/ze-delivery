import './AgeVerificationModal.css'
import logo from './zedelivery-logo-bola.png'

function AgeVerificationModal({ onClose }){
    return (
        <>
        <div className='modal-overlay'>
            <div className='modal-content'>
                <img src={logo} alt="Zé delivery" className='modal-logo'/>
                <p>Você tem mais de 18 anos?</p>
                <div className='modal-buttons'>
                    <button onClick={onClose}>Sim</button>
                    <button onClick={onClose}>Não</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AgeVerificationModal