import { IconButton } from '@mui/material'
import close from './Icons/close.png'
import menu from './Icons/menu.png'
import isotipo from './Icons/Doctor.jpg'
import group from './Icons/Group.png'
import person from './Icons/person.png'
import calendar from './Icons/calendar_month.png'
import clinicalNotes from './Icons/clinical_notes.png'
import duo from './Icons/duo.png'
import book from './Icons/book.png'
import star from './Icons/star.png'
import badge from './Icons/BadgeLabel.png'
import spacer from './Icons/Spacer.png'
import notifications from './Icons/notifications_unread.png'
import settings from './Icons/settings.png'
import suportAgent from './Icons/support_agent.png'
import logOut from './Icons/logout.png'
import './index.css'
import { useState } from 'react'
import { Button } from '@mui/base'
export function AsideComponent() {

	const [openClose,setOpenClose] = useState(false)
	const handleAsideOpenClose = () => {
		setOpenClose(!openClose)
	}

	return( 
	<div className='asideContainerLg flex-col flex items-start gap-10 justify-between' style={{width: !openClose ? '120px' : '264px'}}>
		<div className='flex-col flex'>
			<div className='flex p-4 gap-4 flex-col'>
				<Button onClick={handleAsideOpenClose}>
					<div className='flex'>
						<img src={menu} style={{display: ! openClose ? 'block': 'none'}} className='ml-2' />
						<div className='absolute right-8' style={{display: openClose ? 'block': 'none'}}>
							<img src={close}/>
						</div>
					</div>
				</Button>
				<div className='flex flex-nowrap mt-2 overflow-hidden'>
					<Button><img className='cover-fit' src={isotipo}/></Button>
					<div style={{display: openClose ? 'block': 'none'}} className='flex-wrap textHiddenAside'>
						<p>Dr. Roberto García</p>
						<p className='font-normal'>Clínica médica</p>
					</div>
				</div>
			</div>
			<div className='flex p-4 gap-4 flex-col'>
				<div className='flex flex-nowrap rounded-2xl bg-white'>
					<IconButton><img src={group} /></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Home</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={person}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Mi perfil</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={calendar}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Agenda de consultas</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={clinicalNotes} /></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Mis pacientes</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={duo}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Consulta virtual</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={book}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Cartilla médica</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={star}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Mi billetera</p>
				</div>
			</div>
		</div>
		<div className='flex flex-col'>
			<div className='flex p-4 gap-4 flex-col mt-3'>
				<div className='flex flex-nowrap'>
					<IconButton><img src={notifications} /><img src={spacer} /></IconButton>
					<div className='flex flex-nowrap items-center' style={{display: openClose ? 'flex': 'none'}}>
						<p className='textHiddenAside'>Notificaciones</p>
						<img className='bg-red size-3 p-1 rounded-full' src={badge}/>
					</div>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={settings}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Configuración</p>
				</div>
				<div className='flex flex-nowrap'>
					<IconButton><img src={suportAgent}/></IconButton>
					<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Centro de ayuda</p>
				</div>
			</div>
			<div className='flex p-4 gap-4 flex-col mt-3'>
				<div className='flex flex-nowrap'>
					<IconButton><img src={logOut}/></IconButton>
					<p style={{display: openClose ? 'block' : 'none'}}className='textHiddenAside'>Cerrar sesión</p>
				</div>
			</div>
		</div>
	</div>
	);
}