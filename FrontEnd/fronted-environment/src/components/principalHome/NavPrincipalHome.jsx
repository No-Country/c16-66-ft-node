import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import person from '../../assets/svg/personWhite.svg'
import menu from '../../assets/svg/menu.svg'
import { useState } from 'react'
import { ModalMenu } from './ModalMenu'
import '../../pages/PrincipalHome/index.css'
import RegisterButton from './RegisterButton'
import arrowDownBlue from '../../assets/svg/arrowDownBlue.svg'

export function NavPrincipalHome () {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const goSession = () => {
        navigate('/autogestion')
    }
    const menuOpen = () => {
        setOpenModal(true)
    }
    const menuClose = () => {
        setOpenModal(false)
    }
    function goTo(contacto) {
        location.hash = "#" + contacto;
    }
    
    return (
        <nav className='py-1 px-5 nav h-1/6 flex justify-between items-center'>
            <button onClick={menuOpen} className='mr-28 sm:mr-0 h-5 w-auto p-1 lg:hidden'>
                <img src={menu} alt='boton menu' />
            </button>
            {openModal && 
                <ModalMenu menuClose={menuClose} />
            }
            <img src={logo} className='h-8 w-auto lg:h-9' alt='logo MedConnect'/>

            
            <Link to='/medical-list' className='text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex'>
                Cartilla Médica
            </Link>
            <a href='#contacto' onClick={()=>{goTo('contacto')}} className='text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex'>
                Contactos
            </a>
            <RegisterButton arrowDown={arrowDownBlue} className={`hidden lg:inline-flex items-center lg:text-lg p-2 rounded-xl border-2 text-darkBlue hover:bg-whiteOpacity`}text={'REGISTRÁTE'} className2={`hidden text-xs p-2 bg-whiteOpacity rounded-xl fixed top-20 left-80 lg:flex flex-col items-start lg:text-base h-fit`} btn={`hover:bg-darkBlue p-2 rounded-xl hover:text-white`}/>
            <button 
                className='hidden lg:flex items-center bg-darkBlue text-white rounded-xl p-2 text-center hover:bg-primaryBlue -xs lg:text-lg' 
                onClick={goSession} 
            >
                AUTOGESTIÓN
                <img src={person} className='h-5 text-center lg:h-6 xl:h-7' alt='icono de persona'/>
            </button> 
        </nav>
    )
}