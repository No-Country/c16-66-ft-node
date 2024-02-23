import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import arrowDown from '../../assets/svg/arrowDown.svg'
import person from '../../assets/svg/personWhite.svg'
import menu from '../../assets/svg/menu.svg'
import './index.css'
import { useState } from 'react'
import { ModalMenu } from './ModalMenu'
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
    return (
        <nav className='nav flex lg:justify-around items-center p-1 xl:p-2 h-1/4'>
                {openModal && <ModalMenu menuClose={menuClose} />}
                <button onClick={menuOpen}>
                <img src={menu} className='h-5 p-1 ml-3 mr-56 lg:hidden' alt='menu' />
                </button>
                <img src={logo} className='h-8 -ml-32 sm:-ml-1 lg:h-12 xl:h-14' alt='logo medConnect' />
                <Link to='/servicios' className='text-xs hidden lg:inline-flex items-center lg:text-base xl:text-2xl'>
                    Servicios<img src={arrowDown} className='w-1/5 h-1/2' alt='flecha selectora hacia abajo' />
                </Link>
                <Link to='/cartilla-medica' className='text-xs lg:text-base xl:text-2xl hidden lg:flex'>
                    Cartilla Médica
                </Link>
                <Link to='/contactos' className='text-xs lg:text-base xl:text-2xl hidden lg:flex'>
                    Contactos
                </Link>
                <button 
                className='hidden lg:flex items-center bg-darkBlue text-white rounded-xl p-2 text-center hover:bg-primaryBlue -xs lg:text-base xl:text-2xl' 
                onClick={goSession} 
                >
                    Autogestión
                    <img src={person} className='h-5 text-center lg:h-6 xl:h-7' alt='icono de persona'/>
                </button> 
            </nav>
    )
}