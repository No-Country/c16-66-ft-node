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
import search from '../../assets/svg/search.svg'
import keyboard from '../../assets/svg/keyboard_voice.svg'

export function Footer () {
    return (
        <footer className="footer w-full h-fit p-6">
            <img src={logo} className="flex items-start w-3/6 md:w-1/3 lg:w-1/6 h-auto mb-2"/>
            <div className='flex flex-col'>
                <section className='flex flex-nowrap flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-between xl:justify-around'>
                    <div className='flex w-2/3 md:w-1/3 mb-4 lg:mb-0 self-center justify-around bg-white border-gray border-2 rounded-full h-1/2 lg:w-1/6 '>
                        <img src={search}/>
                        <input placeholder=' Buscador...  ' className='w-1/2 text-sm lg:text-base xl:text-lg' />
                        <img src={keyboard}/>
                    </div>
                    <div className='flex md:justify-center justify-between mb-4 lg:mb-0'>
                        <Link to='/nosotros' className='mr-2 xl:mr-6 text-sm lg:text-base xl:text-lg font-semibold'> Sobre nosotros </Link>
                        <Link to='/menu' className='mr-2 xl:mr-6 text-sm lg:text-base xl:text-lg font-semibold'> Menú </Link>
                        <Link to='/servicios' className='mr-2 xl:mr-6 text-sm lg:text-base xl:text-lg font-semibold'> Servicios </Link>
                        <Link to='/contacto' className='text-sm lg:text-base xl:text-lg font-semibold'> Contacto </Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-sm lg:text-base xl:text-lg font-semibold mb-2 self-center'>Siguenos en las redes sociales</p>
                        <div className='flex justify-center'>
                        <Link to='/'><img src={instagram} className='xl:w-3/4 h-auto w-1/2'/></Link>
                        <Link to='/'><img src={redX} className='xl:w-3/4 h-auto w-1/2'/></Link>
                        <Link to='/'><img src={youtube} className='xl:w-3/4 h-auto w-1/2'/></Link>
                        <Link to='/'><img src={facebook} className='xl:w-3/4 h-auto w-1/2'/></Link>
                        <Link to='/'><img src={linkedin} className='xl:w-3/4 h-auto w-1/2'/></Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex flex-col items-center mt-2 xl:mt-8'>

                    <h6 className='text-sm lg:text-base xl:text-lg font-semibold mt-4 lg:mt-0'>Ubicación</h6>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1NsaSVjfje-Alfk1sktD3GXxmhYc&hl=en_US&ehbc=2E312F" width="750" height="350" className='w-3/4'></iframe>
                    </div>
                    <div className='flex justify-between mt-2'>
                        {/* <img src={map} className='w-40'/> */}
                    
                    <p className='mt-2 text-xs lg:text-sm xl:text-base font-extralight flex justify-center items-center'><img src={copyR} className='mr-1' /> 2024 creado por  <strong className='mx-1'> MedConnet </strong> - información adicional </p>
                        <img src={suport} className='bg-white rounded-full  self-end p-2 h-10'/>
                    </div>
                </section>
            </div>
        
        </footer>
    )
}