import './Hero.css'

function Hero(){
    return(
        <>
        <div className='hero-container'>
            <h1 className='hero-title'>Bebida rápida, gelada e no precinho? O Zé entrega tudo.</h1>
            <form className='hero-form'>
                <input type="text" placeholder='Inserir endereço para ver preço' className='hero-input' />
            </form>
        </div>
        </>
    )
}

export default Hero