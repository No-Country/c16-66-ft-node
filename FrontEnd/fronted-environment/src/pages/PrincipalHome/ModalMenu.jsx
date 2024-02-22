import { Link } from 'react-router-dom'
import close from '../../assets/svg/close.svg'
import arrowDown from '../../assets/svg/arrowDown.svg'
import personWhite from '../../assets/svg/personWhite.svg'
import search from '../../assets/svg/search.svg'

// eslint-disable-next-line react/prop-types
export function ModalMenu ({menuClose}) {
    return (
        <section className="w-2/5 modal h-screen p-6 z-10 absolute top-0 left-0 lg:hidden">
            <div className='flex justify-end mb-8'>
                <button onClick={menuClose}>
                    <img src={close} className="" />
                </button>
            </div>
            <div className='mx-auto h-full flex flex-col'>
                <Link to='/servicios' className='pl-4 py-1 w-full mb-2 text bg-whiteOpacity rounded-xl flex items-center text-sm'>
                    Servicios<img src={arrowDown} className='w-1/6 h-2/3' alt='flecha selectora hacia abajo' />
                </Link>
                <Link to='/cartilla-medica' className='pl-4 p-2 mb-2 w-full text bg-whiteOpacity rounded-xl text-sm'>
                    Cartilla médica
                </Link>
                <Link to='/contacto' className='pl-4 p-2 mb-2 w-full text bg-whiteOpacity rounded-xl text-sm'>
                    Contacto
                </Link>
                <Link to='/login' className='pl-4 py-1 mb-16 w-full bg-darkBlue text-white rounded-xl flex items-center text-sm'>
                    INICIAR SESIÓN<img src={personWhite} className='w-1/6 h-2/3'/>
                </Link>
                <button className='pl-4 py-1 w-full bg-white text-gray rounded-3xl flex items-center border-gray border-2 text-sm'>
                    <img src={search} className='w-1/6 h-2/3'/> Buscador...
                </button>
            </div>
        </section>
    )
}