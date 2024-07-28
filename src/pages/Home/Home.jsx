// import { Link } from "react-router-dom"

import { useEffect, useState } from "react"
import CategoriaProduto from "../../components/CategoriaProduto/CategoriaProduto"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import './home.css'
import AgeVerificationModal from "../../components/Modal/AgeVerificationModal"
function Home() {
    const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenModal')
        if(hasSeenModal){
            setShowModal(false)
        }
    }, [])

    const handleCloseModal = () => {
        localStorage.setItem('hasSeenModal', 'true')
        setShowModal(false)
    }

    const CATEGORIAS = [
        {
            id: 1,
            texto: 'Ofertas',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 2,
            texto: 'Cervejas',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_cervejas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 3,
            texto: 'Vinhos',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 4,
            texto: 'Petiscos',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_petiscos_v3_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 5,
            texto: 'Refrigerantes',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Frefri.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
        {
            id: 6,
            texto: 'Chopps',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_chopp_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=96&q=75'
        },
    ]
    
    return (
        <>
        {showModal && <AgeVerificationModal onClose={handleCloseModal}/>}
            <div className="content">
                <Header/>           
                <Hero/>
                <div className="lista-categorias">
                    {CATEGORIAS.map(categoria => 
                        <CategoriaProduto key={categoria.id} texto={categoria.texto} imagem={categoria.imagem}/> )}
                </div>
             
                {/* <Link to='/bicicletas'>Bicicletas</Link> */}
            </div>
        </>
    )
}

export default Home