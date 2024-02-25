import cardiology from '../../assets/svg/cardiology.svg'
import personSearch from '../../assets/svg/personSearch.svg'
import duoWhite from '../../assets/svg/duoWhite.svg'
import medicoPortada from '../../assets/PrincipalHome/medicoPortada.png'
import { NavPrincipalHome } from './NavPrincipalHome'
import '../../pages/PrincipalHome/index.css'

export function Header () {
   
    const handlelogin =() => {
        //falta aun logica del login o ver a donde van
    }
    return ( 
        <header className='header h-1/3 w-full lg:h-2/4 xl:h-3/5'>
            <NavPrincipalHome />
            <div className='h-5/6 flex items-center justify-center'>
                <img src={medicoPortada} className='h-full' alt='imagen de un doctor'/>
                <section className='h-fit p-2 w-fit mr-2 mt-10 -ml-10 sm:ml-0 bg-whiteOpacity rounded-3xl sm:mr-0 sm:mt-0 lg:p-4'>

                    <h2 className='text-center text-xs sm:text-base lg:text-lg xl:text-xl font-bold text-black lg:text-start xl:mb-4'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='text-center text-xs sm:text-base lg:text-lg xl:text-xl mb-1 md:mb-5 xl:mb-8 lg:text-start'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex flex-col lg:flex-row items-center justify-between lg:justify-evenly mt-4'>
                
                        <button onClick={handlelogin} className='text-xs sm:text-base lg:text-lg xl:text-xl mb-2 flex justify-center p-2 text-center items-center bg-primaryBlue hover:bg-darkBlue text-white rounded-lg w-5/6 sm:w-3/5 lg:w-fit lg:mr-2'><img src={cardiology}/>Consulta presencial</button>

                        <button onClick={handlelogin}className='text-xs sm:text-base lg:text-lg xl:text-xl mb-2 flex justify-center p-2 text-center items-center bg-primaryBlue hover:bg-darkBlue text-white rounded-lg w-5/6 sm:w-3/5 lg:w-fit lg:mr-2'><img src={personSearch}/>Buscar por especialidad</button>

                        <button className='text-xs sm:text-base lg:text-lg xl:text-xl mb-2 flex justify-center p-2 text-center items-center bg-darkBlue text-white rounded-lg hover:bg-primaryBlue w-5/6 sm:w-3/5 lg:w-fit lg:mr-2'><img src={duoWhite}/> Consulta en línea</button>
                    </div>
                </section>
            </div>
        </header>
    )
}