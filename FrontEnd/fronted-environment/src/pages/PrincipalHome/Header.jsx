import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import arrowDown from '../../assets/svg/arrowDown.svg'
import person from '../../assets/svg/personWhite.svg'
import cardiology from '../../assets/svg/cardiology.svg'
import personSearch from '../../assets/svg/personSearch.svg'
import duoWhite from '../../assets/svg/duoWhite.svg'
import medicoPortada from '../../assets/PrincipalHome/medicoPortada.png'
import menu from '../../assets/svg/menu.svg'
import './index.css'
import { useState } from 'react'
import { ModalMenu } from './ModalMenu'

export function Header () {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const goSession = () => {
        navigate('/login')
    }
    const menuOpen = () => {
        setOpenModal(true)
    }
    const menuClose = () => {
        setOpenModal(false)
    }
    return (
        <header className='header h-1/3 w-full'>
            <nav className='nav flex lg:justify-around items-center p-1'>
                {openModal && <ModalMenu menuClose={menuClose} />}
                <button onClick={menuOpen}>
                <img src={menu} className='h-5 p-1 ml-3 mr-56 lg:hidden' alt='menu' />
                </button>
                <img src={logo} className='h-8 -ml-32 sm:-ml-1 lg:h-12' alt='logo medConnect' />
                <Link to='/servicios' className=' text hidden lg:inline-flex items-center'>
                    Servicios<img src={arrowDown} className='w-1/5 h-1/2' alt='flecha selectora hacia abajo' />
                </Link>
                <Link to='/cartilla-medica' className='text hidden lg:flex'>
                    Cartilla Médica
                </Link>
                <Link to='/contactos' className='text hidden lg:flex'>
                    Contactos
                </Link>
                <button 
                className='hidden lg:flex items-center bg-darkBlue text-white rounded-xl p-2 text-center hover:bg-primaryBlue'
                onClick={goSession} 
                >
                    {/* Autogestión   {person} */}
                    Iniciar sesión 
                    <img src={person} className='h-5 text-center' alt='icono de persona'/>
                </button> 
            </nav>
            <div style={{height:'87%'}} className='flex justify-start md:justify-center items-center'>
                <img src={medicoPortada} className='h-full -mb-9 lg:-mb-1' alt='imagen de un doctor'/>
                <section className='h-fit -ml-10 md:h-auto w-1/2 md:ml-0 bg-whiteOpacity rounded-3xl p-2'>
                    <h2 className='text-center text-xs font-bold md:text-lg text-black lg:text-start'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='text-center text-xs mb-5 md:text-sm lg:text-start'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex flex-col lg:flex-row items-center justify-between lg:justify-evenly'>
                
                        <button className='text-xs mb-2 flex p-2 items-center bg-lightBlue text-white rounded-lg sm:w-2/3 lg:w-fit lg:text-sm'disabled><img src={cardiology}/>Consulta presencial</button>

                        <button className='text-xs mb-2 flex p-2 items-center bg-lightBlue text-white rounded-lg sm:w-2/3 lg:w-fit lg:text-sm' disabled><img src={personSearch}/>Buscar por especialidad</button>

                        <button className='text-xs mb-2 flex p-2 items-center bg-darkBlue text-white rounded-lg hover:bg-primaryBlue sm:w-2/3 lg:w-fit lg:text-sm'><img src={duoWhite}/>Consulta en línea</button>
                    </div>
                </section>
            </div>
        </header>
    )
}