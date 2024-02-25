import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
// import arrowDown from '../../assets/svg/arrowDown.svg'
import person from '../../assets/svg/personWhite.svg'
import menu from '../../assets/svg/menu.svg'
import { useState } from 'react'
import { ModalMenu } from './ModalMenu'
import '../../pages/PrincipalHome/index.css'

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
        <nav className='p-6 nav h-1/6 flex justify-between items-center'>
            {openModal && <ModalMenu menuClose={menuClose} />}
                <button onClick={menuOpen} className='mr-28 sm:mr-0 h-5 w-auto p-1 lg:hidden'>
                    <img src={menu} alt='menu' />
                </button>
                <img src={logo} className='h-8 w-auto -ml-32 sm:-ml-1 lg:h-12 xl:h-14 cursor-pointer' alt='logo medConnect' onClick={()=>{navigate('/')}} /><p></p>
                <Link to='/servicios' className='text-xs hidden lg:inline-flex items-center lg:text-lg xl:text-xl'>
                    Servicios
                    {/* <img src={arrowDown} className='w-1/5 h-1/2' alt='flecha selectora hacia abajo' /> */}
                </Link>
                <Link to='/medical-list' className='text-xs lg:text-lg xl:text-xl hidden lg:flex'>
                    Cartilla Médica
                </Link>
                <a href='#contacto' onClick={()=>{goTo('contacto')}} className='text-xs lg:text-lg xl:text-xl hidden lg:flex'>
                    Contactos
                </a>
                <button 
                className='hidden lg:flex items-center bg-darkBlue text-white rounded-xl p-2 text-center hover:bg-primaryBlue -xs lg:text-lg xl:text-xl xl:p-3' 
                onClick={goSession} 
                >
                    Autogestión
                    <img src={person} className='h-5 text-center lg:h-6 xl:h-7' alt='icono de persona'/>
                </button> 
            </nav>
    )
}