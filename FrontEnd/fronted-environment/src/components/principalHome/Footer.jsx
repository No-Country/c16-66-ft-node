import { Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import instagram from '../../assets/svg/skill-icons_instagram.svg'
import redX from '../../assets/svg/simple-icons_x.svg'
import youtube from '../../assets/svg/mdi_youtube.svg'
import facebook from '../../assets/svg/logos_facebook.svg'
import linkedin from '../../assets/svg/devicon_linkedin.svg'
// import map from '../../assets/svg/Rectangle.png'
import suport from '../../assets/svg/support_agent.svg'
import copyR from '../../assets/svg/ph_copyright-bold.svg'
import vector from '../../assets/svg/Vector.svg'

export function Footer () {
    return (
        <footer className="footer w-full h-fit ">
            <section className='h-fit  w-ful'>
                <div className='flex flex-col-reverse xl:flex-row xl:justify-around items-center h-fit xl:m-auto xl:pt-4'>
                    <section className='bg-lightGreen mt-4 rounded-xl w-10/12 sm:w-2/5 xl:w-3/12 h-auto p-3 flex-col'>
                        <div className='flex justify-between md:flex-col items-center'>
                        <h6 className='text-xs lg:text-lg xl:text-xl font-semibold'>Ubicación</h6>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1NsaSVjfje-Alfk1sktD3GXxmhYc&hl=en_US&ehbc=2E312F"  className='w-full h-full outline-none rounded-xl'></iframe>
                        </div>  
                    </section>
                    <section className='flex flex-wrap md:-pt-0 pt-4 sm:pt-0 h-fit sm:flex-nowrap justify-between w-1/3 sm:w-10/12 xl:w-6/12'>
                    <div className='flex flex-col items-starts pb-4 w-1/2 sm:w-auto sm:pb-0'>
                        <h4 className='text-xs lg:text-lg xl:text-xl mb-2 font-semibold'>Menú</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <Link to='/' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Servicios </Link>
                        <Link to='/medical-list' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Cartilla médica </Link>
                        <Link to='/' id='contacto' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Contacto </Link>
                    </div>
                    <div className='flex flex-col items-starts pb-4  sm:pb-0'>
                        <h4 className='text-xs lg:text-lg xl:text-xl mb-2 font-semibold'>Autogestión</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <Link to='/login' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Paciente </Link>
                        <Link to='/login' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Especialista médico </Link>
                        <Link to='/login' className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Administrador </Link>
                        
                    </div>
                    <div className='flex flex-col items-starts pb-4 sm:pb-0'>
                        <h4 className='text-xs lg:text-lg xl:text-xl mb-2  font-semibold'>Información legal</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <p className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Aviso legal</p>
                        <p className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Políticas de privacidad</p>
                        <p className='text-xs lg:text-lg xl:text-xl flex flex-wrap'>  <img src={vector} className='pr-1' /> Términos y condiciones</p>
                    </div>
                </section>
                </div>
                <div className='flex justify-end pr-2'>
                    <img src={suport} className='bg-white rounded-full p-2 h-10'/>
                </div>
            </section>
            <br/>
            <section className='footerFinal h-fit md:h-1/6 w-full flex flex-wrap sm:flex-nowrap justify-around items-center px-2 py-3'>
                <img src={logo} className="w-2/5 sm:w-1/4 lg:w-1/6 h-auto"/>
                <p className='text-xs lg:text-base xl:text-lg font-extralight flex justify-center items-center'><img src={copyR} className='mr-1' /> 2024 creado por  <strong className='mx-1'> MedConnet </strong> - información adicional </p>
                <div className='flex justify-center'>
                    <Link to='/'><img src={instagram} className='xl:w-3/4 h-auto w-1/2'/></Link>
                    <Link to='/'><img src={redX} className='xl:w-3/4 h-auto w-1/2'/></Link>
                    <Link to='/'><img src={youtube} className='xl:w-3/4 h-auto w-1/2'/></Link>
                    <Link to='/'><img src={facebook} className='xl:w-3/4 h-auto w-1/2'/></Link>
                    <Link to='/'><img src={linkedin} className='xl:w-3/4 h-auto w-1/2'/></Link>
                </div>
            </section>
        </footer>
    )
}