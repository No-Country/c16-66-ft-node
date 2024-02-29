import { Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import instagram from '../../assets/svg/skill-icons_instagram.svg'
import redX from '../../assets/svg/simple-icons_x.svg'
import youtube from '../../assets/svg/mdi_youtube.svg'
import facebook from '../../assets/svg/logos_facebook.svg'
import linkedin from '../../assets/svg/devicon_linkedin.svg'
// import map from '../../assets/svg/Rectangle.png'
// import suport from '../../assets/svg/support_agent.svg'
import copyR from '../../assets/svg/ph_copyright-bold.svg'
import vector from '../../assets/svg/Vector.svg'

export function Footer () {
    return (
        <footer className="footer w-full h-fit">
            <section className='h-fit  w-ful'>
                <div className='flex flex-col-reverse xl:flex-row xl:justify-around items-center h-fit xl:m-auto'>
                    <section className='rounded-xl w-10/12 sm:w-2/5 xl:w-3/12 h-auto p-1 flex-col'>
                        <div className='flex justify-between md:flex-col items-center'>
                        <h6 className='text-base font-semibold'>Ubicación</h6>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1NsaSVjfje-Alfk1sktD3GXxmhYc&hl=en_US&ehbc=2E312F" className='w-full h-full outline-none rounded-xl'></iframe>
                        {/* <iframe
                        width="600"
                        height="450"
                        style="border:0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=
                            &q=Space+Needle,Seattle+WA">
                        </iframe> */}
                        </div>  
                    </section>
                    <section className='flex flex-wrap md:-pt-0 pt-4 sm:pt-0 h-fit sm:flex-nowrap justify-between w-1/2 ml-12 sm:w-10/12 xl:w-6/12'>
                    <div className='flex flex-col items-starts pb-4 w-fit sm:w-auto sm:pb-0'>
                        <h4 className='text-xs mb-2 font-semibold'>Menú</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <Link to='/' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Servicios </Link>
                        <Link to='/medical-list' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Cartilla médica </Link>
                        <Link to='/' id='contacto' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Contacto </Link>
                    </div>
                    <div className='flex flex-col items-starts pb-4 sm:pb-0 w-fit'>
                        <h4 className='text-xs mb-2 font-semibold'>Autogestión</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <Link to='/login' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Paciente </Link>
                        <Link to='/login' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Especialista médico </Link>
                        <Link to='/login' className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Administrador </Link>
                        
                    </div>
                    <div className='flex flex-col items-starts pb-4 sm:pb-0 w-fit'>
                        <h4 className='text-xs mb-2 font-semibold'>Información legal</h4>
                        <hr className='text-black h-2 w-11/12'/>
                        <p className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Aviso legal</p>
                        <p className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Políticas de privacidad</p>
                        <p className='text-xs flex flex-wrap'>  <img src={vector} className='pr-1' /> Términos y condiciones</p>
                    </div>
                </section>
                </div>
                {/* <div className='flex justify-end pr-2'>
                    <img src={suport} className='bg-white rounded-full p-2 h-10'/>
                </div> */}
            </section>
            <section className='footerFinal h-fit md:h-1/6 w-full flex flex-wrap sm:flex-nowrap justify-around items-center p-1'>
                <img src={logo} className="w-2/5 sm:w-1/4 lg:w-1/12 h-auto"/>
                <p className='text-xs font-extralight flex justify-center items-center'><img src={copyR} className='mr-1' /> 2024 creado por  <strong className='mx-1'> MedConnet </strong> - información adicional </p>
                <div className='flex justify-center'>
                    <Link to='/'><img src={instagram} className='h-auto w-1/2'/></Link>
                    <Link to='/'><img src={redX} className='h-auto w-1/2'/></Link>
                    <Link to='/'><img src={youtube} className='h-auto w-1/2'/></Link>
                    <Link to='/'><img src={facebook} className='h-auto w-1/2'/></Link>
                    <Link to='/'><img src={linkedin} className='h-auto w-1/2'/></Link>
                </div>
            </section>
        </footer>
    )
}