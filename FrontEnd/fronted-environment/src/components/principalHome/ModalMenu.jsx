import { Link } from 'react-router-dom'
import close from '../../assets/svg/close.svg'
// import arrowDown from '../../assets/svg/arrowDown.svg'
import personWhite from '../../assets/svg/personWhite.svg'
import search from '../../assets/svg/search.svg'

// eslint-disable-next-line react/prop-types
export function ModalMenu ({menuClose}) {

    function goTo(contacto) {
        location.hash = "#" + contacto;
    }

    return (
        <section className="z-10 p-3 w-1/2 sm:w-2/6 modal h-screen absolute top-0 left-0 lg:hidden">
            <div className='flex justify-end mb-8'>
                <button onClick={menuClose}>
                    <img src={close} />
                </button>
            </div>
            <div className='mx-auto h-fit flex flex-col'>
                <Link to='/servicios' className='p-3 w-full mb-3 bg-whiteOpacity rounded-xl flex items-center text-sm sm:text-base'>
                    Servicios
                    {/* <img src={arrowDown} className='w-1/6 h-2/3' alt='flecha selectora hacia abajo' /> */}
                </Link>
                <Link to='/medical-list' className='p-3 w-full mb-3 bg-whiteOpacity rounded-xl flex items-center text-sm sm:text-base'>
                    Cartilla médica
                </Link>
                <a href='#contacto' onClick={()=>{goTo('contacto')}} className='p-3 w-full mb-3 bg-whiteOpacity rounded-xl flex items-center text-sm sm:text-base'>
                    Contacto
                </a>
                <Link to='/login' className='p-3 w-full bg-darkBlue rounded-xl flex items-center self-center justify-center text-sm sm:text-base text-white mb-12'>
                    INICIAR SESIÓN<img src={personWhite} className='w-2/12'/>
                </Link>
                <button className='p-1 w-full bg-white text-gray rounded-3xl flex items-center border-gray border-2'>
                    <img src={search} className='w-1/6 h-2/3 text-sm sm:text-base'/> 
                    Buscador...
                </button>
            </div>
        </section>
    )
}