import cardiology from '../../assets/svg/cardiology.svg'
import personSearch from '../../assets/svg/personSearch.svg'
import duoWhite from '../../assets/svg/duoWhite.svg'
import medicoPortada from '../../assets/PrincipalHome/medicoPortada.png'
import { NavPrincipalHome } from './NavPrincipalHome'
import '../../pages/PrincipalHome/index.css'

export function Header () {
   
    return (
        <header className='header h-1/3 w-full xl:h-3/4'> 
            <NavPrincipalHome />
            <div className='flex items-center justify-start md:justify-center h-5/6  '>
                <img src={medicoPortada} className='h-full mt-5 sm:mt-10 xl:mt-20' alt='imagen de un doctor'/>
                <section className='h-3/4 xl:h-fit w-3/4 sm:w-2/3 -ml-10 md:ml-0 bg-whiteOpacity rounded-3xl p-2 xl:px-6 xl:py-8 xl:ml-10'>
                    <h2 className='text-center text-xs lg:text-base xl:text-4xl font-bold md:text-lg text-black lg:text-start xl:mb-4'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='text-center text-xs lg:text-base xl:text-3xl mb-1 md:mb-5 xl:mb-8 md:text-sm lg:text-start'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex flex-col lg:flex-row items-center justify-between lg:justify-evenly mt-4'>
                
                        <button className='text-xs lg:text-sm xl:text-2xl mb-2 flex px-1 lg:p-2 xl:p-3 text-center items-center bg-lightBlue text-white rounded-lg w-3/3 sm:w-1/3 md:w-4/12 lg:w-3/12'disabled><img src={cardiology}/>Consulta presencial</button>

                        <button className='text-xs lg:text-sm xl:text-2xl mb-2 flex px-1 lg:p-2 xl:p-3  text-center items-center bg-lightBlue text-white rounded-lg w-3/3 sm:w-1/3 lg:w-3/12' disabled><img src={personSearch}/>Buscar por especialidad</button>

                        <button className='text-xs lg:text-sm xl:text-2xl mb-2 flex px-1 lg:p-2 xl:p-3 text-center items-center bg-darkBlue text-white rounded-lg hover:bg-primaryBlue w-3/3 sm:w-1/3 lg:w-3/12'><img src={duoWhite}/> Consulta en línea</button>
                    </div>
                </section>
            </div>
        </header>
    )
}