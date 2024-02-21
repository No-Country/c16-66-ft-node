import { Button, Typography} from '@mui/material'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import arrowDown from '../../assets/svg/arrowDown.svg'
import person from '../../assets/svg/personWhite.svg'
import cardiology from '../../assets/svg/cardiology.svg'
import personSearch from '../../assets/svg/personSearch.svg'
import duoWhite from '../../assets/svg/duoWhite.svg'
import medicoPortada from '../../assets/PrincipalHome/medicoPortada.png'

export function PrincipalHome () {
    return (
        <body className='w-screen h-screen overflow-y-scroll'>
            <header className='header h-1/2 w-full border-4'>
                <nav className='nav flex justify-around items-center p-1'>
                    <img src={logo} className='h-12' alt='logo medConnect' />
                    <button className='text inline-flex items-center'>
                        Servicios<img src={arrowDown} alt='flecha selectora hacia abajo' />
                    </button>
                    <button className='text'>
                        Cartilla Médica
                    </button>
                    <button className='text'>
                        Contactos
                    </button>
                    <Button sx={{ backgroundColor: "#115E86", color: '#FFF', borderRadius:'10px' }}>
                        Autogestión <img src={person} className='h-6' alt='icono de persona'/>
                    </Button> 
                </nav>
                <img src={medicoPortada} alt='imagen de un doctor'/>
                <section className='border-2 w-1/3'>
                    <Typography component='h2'>¿Qué tipo de especialista buscas?</Typography>
                    <Typography component='h4'>Tenemos un médico especialista que te puede ayudar</Typography>
                    <div className='flex items-center justify-around'>
                        <Button sx={{ backgroundColor: "#82C3E4", color: '#FFF', borderRadius:'10px' }} disabled><img src={cardiology}/>Consulta presencial</Button>
                        <Button sx={{ backgroundColor: "#82C3E4", color: '#FFF', borderRadius:'10px' }} disabled><img src={personSearch}/>Buscar por especialidad</Button>
                        <Button sx={{ backgroundColor: "#115E86", color: '#FFF', borderRadius:'10px' }}><img src={duoWhite}/>Consulta en línea</Button>
                    </div>
                </section>
            </header>
        </body>
    )
}