import { Link } from 'react-router-dom'
import close from '../../assets/svg/close.svg'
import personWhite from '../../assets/svg/personWhite.svg'
// import search from '../../assets/svg/search.svg'
import RegisterButton from './RegisterButton'
import arrowDown from '../../assets/svg/arrowDown.svg'
import { UserStore } from '../../StoreGeneral/UsersStore'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
// eslint-disable-next-line react/prop-types
export function ModalMenu ({menuClose}) {

    const { userLogged }= UserStore()
    const { doctorLogged } = DoctorStore()

    function goTo(contacto) {
        location.hash = "#" + contacto;
    }

    return (
        <section className="z-10 p-3 w-1/2 sm:w-2/6 modal h-fit rounded-xl absolute top-0 left-0 lg:hidden">
            <div className='flex justify-end mb-8'>
                <button onClick={menuClose}>
                    <img src={close} alt='boton para cerrar menu'/>
                </button>
            </div>
            <div className='h-fit flex flex-col items-center'>

            {
                userLogged || doctorLogged ?

                <Link to='/home' className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'> Home
                </Link>
                :
                <RegisterButton text={'Registrate'} arrowDown={arrowDown} className={`p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm`} className2={`text-xs p-4 bg-white rounded-xl fixed top-24 right-1 flex flex-col items-start`} btn={`hover:bg-darkBlue p-2 sm:px-8 rounded-xl hover:text-white`}/>
            
            }
                <Link to='/medical-list' className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'>
                    Cartilla médica
                </Link>
                <a href='#contacto' onClick={()=>{goTo('contacto')}} className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'>
                    Contacto
                </a>

            {
                userLogged || doctorLogged ?
                <></>
                :
                <Link to='/autogestion' className='p-2 w-10/12 bg-darkBlue rounded-xl flex items-center  justify-center text-xs sm:text-sm text-white mb-16'>
                    INICIAR SESIÓN<img src={personWhite} alt='icono de usuario' className='w-5'/>
                </Link>
            }
                {/* <button className='p-1 w-full bg-white text-gray rounded-3xl flex items-center border-gray border-2'>
                    <img src={search} alt='buscador' className='w-1/6 h-2/3 text-sm sm:text-base'/> 
                    Buscador...
                </button> */}
            </div>
        </section>
    )
}