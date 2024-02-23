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
        <header className='header h-1/3 w-full xl:h-2/5'>
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
                    {/* Autogestión   {person} */}
                    Iniciar sesión 
                    <img src={person} className='h-5 text-center lg:h-6 xl:h-7' alt='icono de persona'/>
                </button> 
            </nav>
            <div className='flex items-center justify-start md:justify-center h-3/4'>
                <img src={medicoPortada} className='h-full' alt='imagen de un doctor'/>
                <section className='h-3/4 w-3/4 sm:w-2/3 -ml-10 md:ml-0 bg-whiteOpacity rounded-3xl p-2 xl:px-4 xl:py-6 xl:ml-10'>
                    <h2 className='text-center text-xs lg:text-base xl:text-2xl font-bold md:text-lg text-black lg:text-start'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='text-center text-xs lg:text-base xl:text-2xl mb-1 md:mb-5 md:text-sm lg:text-start'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex flex-col lg:flex-row items-center justify-between lg:justify-evenly mt-4'>
                
                        <button className='text-xs lg:text-sm xl:text-xl mb-2 flex px-1 lg:p-2 xl:p-3 items-center bg-lightBlue text-white rounded-lg w-3/3 sm:w-1/3 md:w-4/12 lg:w-3/12'disabled><img src={cardiology}/>Consulta presencial</button>

                        <button className='text-xs lg:text-sm xl:text-xl mb-2 flex px-1 lg:p-2 xl:p-3 items-center bg-lightBlue text-white rounded-lg w-3/3 sm:w-1/3 lg:w-3/12' disabled><img src={personSearch}/>Buscar por especialidad</button>

                        <button className='text-xs lg:text-sm xl:text-xl mb-2 flex px-1 lg:p-2 xl:p-3 items-center bg-darkBlue text-white rounded-lg hover:bg-primaryBlue w-3/3 sm:w-1/3 lg:w-3/12'><img src={duoWhite}/> Consulta en línea</button>
                    </div>
                </section>
            </div>
        </header>
    )
}