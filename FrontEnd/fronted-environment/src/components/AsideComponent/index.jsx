import { useState } from 'react'
import { Badge, Button } from '@mui/base'
import close from '../../assets/svg/close.svg'
import menu from '../../assets/svg/menu.svg'
import isotipo from '../../assets/svg/Isotipo.svg'
import group from '../../assets/svg/group.svg'
import person from '../../assets/svg/person.svg'
import calendar from '../../assets/svg/calendar.svg'
import clinicalNotes from '../../assets/svg/clinicalNotes.svg'
import duo from '../../assets/svg/duo.svg'
import book from '../../assets/svg/book.svg'
import star from '../../assets/svg/star.svg'
import notification from '../../assets/svg/notification.svg'
import notificationUnread from '../../assets/svg/notificationUnread.svg'
import settings from '../../assets/svg/settings.svg'
import suportAgent from '../../assets/svg/suportAgent.svg'
import logOut from '../../assets/svg/logout.svg'
import { BoxIcon } from './components/BoxIcon'
import './index.css'

export function AsideComponent() {

	const [openClose,setOpenClose] = useState(false)
	const handleAsideOpenClose = () => {
		setOpenClose(!openClose)
	}

	return( 

	<aside className={`asideBackground h-screen z-10 flex flex-col justify-evenly py-5 px-6 gap-2.5 ${openClose ? ' w-1/5' : 'w-1/12'}`} >
		<Button className='flex justify-end mb-4' onClick={handleAsideOpenClose}>
			{ openClose ? <img src={close}/> : <img src={menu} className='mx-auto'/> }
		</Button>
	
		<section className={`flex flex-col ${openClose ? 'justify-between h-4/6' : 'justify-between h-4/6'} `}> 

			<artile className={`flex mx-auto w-full ${openClose ? 'justify-start gap-4' : 'justify-center'}`}>
				<figure className={`w-8 h-8 rounded-full overflow-hidden ${openClose}`}>
				<img className='objet-cover object-center'src={isotipo}/>
				</figure>
				<div style={{display: openClose ? 'block': 'none'}} className=' textHiddenAside'>
					<p className='font-medium'>Dr. Roberto García</p>
					<p className='font-normal'>Clínica médica</p>
				</div>
			</artile>
			<artile className={`flex hover:bg-white p-2 rounded-xl mx-auto ${openClose ? 'w-full justify-start gap-4' : 'w-2/3 h-auto justify-center'}`}>
				<img src={group}/>
				<p style={{display: openClose ? 'block': 'none'}} className='textHiddenAside'>Home</p>
			</artile>
			<BoxIcon openClose={openClose} text={'Mi perfil'} icon={person}/>
			<BoxIcon openClose={openClose} text={'Agenda de consultas'} icon={calendar}/>
			<BoxIcon openClose={openClose} text={'Mis pacientes'} icon={clinicalNotes}/>
			<BoxIcon openClose={openClose} text={'Consulta virtual'} icon={duo}/>
			<BoxIcon openClose={openClose} text={'Cartilla médica'} icon={book}/>
			<BoxIcon openClose={openClose} text={'Mi billetera'} icon={star}/>
		</section>
		<br/>
		<section className={`flex flex-col justify-between ${openClose ? 'h-1/5' : 'h-1/5'}`}> 
			<div className={`flex hover:bg-white p-2 rounded-xl mx-auto ${openClose ? 'w-full justify-start gap-4' : 'w-2/3 h-auto relative justify-center'}`} >
				{openClose ? <img  src={notification} /> : <>
					<img src={notificationUnread}/>
					<Badge className='w-0.5 h-0.5 bg-red p-1 rounded-md absolute badge'/>
				</>}
				<div className={`${openClose ? 'flex -ml-1 w-2/3 items-center': 'hidden'}`} >
					<p className='textHiddenAside'>Notificaciones</p>
					<p className='text-white rounded-full ml-2 flex justify-center h-4 w-4 text-xs items-center bg-red'>8</p>
				</div>
			</div>
			<BoxIcon openClose={openClose} text={'Configuración'} icon={settings}/>
			<BoxIcon openClose={openClose} text={'Centro de ayuda'} icon={suportAgent}/>
		</section>
			<BoxIcon openClose={openClose} text={'Cerrar sesión'} icon={logOut}/>
	</aside>
	);
}