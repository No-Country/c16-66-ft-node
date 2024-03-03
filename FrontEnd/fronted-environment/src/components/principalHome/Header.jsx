import cardiology from "../../assets/svg/cardiology.svg";
import personSearch from "../../assets/svg/personSearch.svg";
import duo from "../../assets/svg/duo.svg"
import medicoPortada from "../../assets/PrincipalHome/medicoPortada.png";
import { NavPrincipalHome } from "./NavPrincipalHome";
import "../../pages/PrincipalHome/index.css";

export function Header () {
   
    return ( 
        <header className='header h-1/3 w-full lg:h-2/4 xl:h-4/5'>
            <NavPrincipalHome />
            <div className='h-5/6 flex items-center justify-center'>
                <img src={medicoPortada} className='h-full' alt='imagen de un doctor'/>
                <section className='h-fit p-2 w-fit mr-2 -ml-10 sm:ml-0 bg-whiteOpacity rounded-3xl sm:mr-0 sm:mt-0 lg:p-4'>

                    <h2 className='text-center text-xs sm:text-base lg:text-lg font-bold text-black lg:text-start mb-2 xl:mb-4'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='text-center text-xs sm:text-base lg:text-lg mb-1 md:mb-5 xl:mb-8 lg:text-start'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex flex-col items-start sm:items-center lg:flex-row lg:items-center justify-between lg:justify-evenly mt-4'>
                
                        <h2 className='text-xs sm:text-base lg:text-lg sm:mb-2 flex justify-center p-2 text-center items-center text-darkBlue font-semibold'><img src={cardiology}/>Consulta presencial</h2>

                        <h2 className='text-xs sm:text-base lg:text-lg sm:mb-2 flex justify-center p-2 text-center items-center text-darkBlue font-semibold'><img src={personSearch}/>Buscar por especialidad</h2>

                        <h2 className='text-xs sm:text-base lg:text-lg sm:mb-2 flex justify-center p-2 text-center items-center text-darkBlue font-semibold '><img src={duo}/> Consulta en línea</h2>
                    </div>
                </section>
            </div>
        </header>
    )
}
