import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import arrowDown from '../../assets/svg/arrowDown.svg'
import person from '../../assets/svg/personWhite.svg'
import cardiology from '../../assets/svg/cardiology.svg'
import personSearch from '../../assets/svg/personSearch.svg'
import duoWhite from '../../assets/svg/duoWhite.svg'
import medicoPortada from '../../assets/PrincipalHome/medicoPortada.png'
import './index.css'

export function Header () {
    const navigate = useNavigate()
    const goSession = () => {
        navigate('/login')
    }
    return (
        <header className='header h-1/3 w-full'>
            <nav className='nav flex justify-around items-center p-1'>
                <img src={logo} className='h-12' alt='logo medConnect' />
                <Link to='/servicios' className='text inline-flex items-center'>
                    Servicios<img src={arrowDown} className='w-1/5 h-1/2' alt='flecha selectora hacia abajo' />
                </Link>
                <Link to='/cartilla-medica' className='text'>
                    Cartilla Médica
                </Link>
                <Link to='/contactos' className='text'>
                    Contactos
                </Link>
                    {/* <Button sx={{ backgroundColor: "#115E86", color: '#FFF', borderRadius:'10px', fontSize: '12px'}}>
                        Autogestión <img src={person} className='h-6' alt='icono de persona'/>
                    </Button>  */}
                <Button variant='contained' onClick={goSession} sx={{ backgroundColor: "#115E86", color: '#FFF', borderRadius:'10px', fontSize: '12px'}}>
                    Iniciar sesión 
                    <img src={person} className='h-5 text-center' alt='icono de persona'/>
                </Button> 
            </nav>
            <div style={{height:'87%'}} className='flex justify-center items-center mb-8'>
                <img src={medicoPortada} className='h-full' alt='imagen de un doctor'/>
                <section style={{width:'55%'}} className='cardHome p-4'>
                    <h2 className='font-bold text-lg text-black'>¿Qué tipo de especialista buscas?</h2>
                    <h4 className='mb-5 text-sm'>Tenemos un médico especialista que te puede ayudar</h4>
                    <div className='flex items-center justify-around'>
                        <Button sx={{ backgroundColor: "#82C3E4", color: '#FFF', borderRadius:'10px', fontSize: '10px' }} disabled><img src={cardiology}/>Consulta presencial</Button>
                        <Button sx={{ backgroundColor: "#82C3E4", color: '#FFF', borderRadius:'10px', fontSize: '10px' }} disabled><img src={personSearch}/>Buscar por especialidad</Button>
                        <Button variant='contained' sx={{ backgroundColor: "#115E86", color: '#FFF', borderRadius:'10px', fontSize: '10px' }}><img src={duoWhite}/>Consulta en línea</Button>
                    </div>
                </section>
            </div>
            <section className='-mt-4 px-5'>
                <h2 className='font-bold text-xl text-black'>¿Con qué tipo de especialistas contamos?</h2>
                <p className='text-sm'>En MedConnect contamos con atención en más de 30 especialidades y más de mil médicos estaán a tu servicio como: psicologos, dermatólogos, oftalmólogos, urólogos, ortopedistas, pediatras, psiquiatras y muchos más. </p>
            </section>
        </header>
    )
}