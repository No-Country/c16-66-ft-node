import { useState } from "react";
import { Button } from "@mui/base";
import close from "./Icons/close.png";
import menu from "./Icons/menu.png";
import isotipo from "./Icons/Doctor.jpg";
import group from "./Icons/Group.png";
import person from "./Icons/person.png";
import calendar from "./Icons/calendar_month.png";
import clinicalNotes from "./Icons/clinical_notes.png";
import duo from "./Icons/duo.png";
import book from "./Icons/book.png";
import star from "./Icons/star.png";
import notifications from "./Icons/notifications_unread.png";
import settings from "./Icons/settings.png";
import suportAgent from "./Icons/support_agent.png";
import logOut from "./Icons/logout.png";
import { BoxIcon } from "./components/BoxIcon";
import "./index.css";

export function AsideComponent() {
	const [openClose, setOpenClose] = useState(false);
	const handleAsideOpenClose = () => {
		setOpenClose(!openClose);
	};

	return (
		<aside
			className={`asideBackground h-screen z-10 flex flex-col justify-evenly py-4 px-6 gap-2.5 ${
				openClose ? " w-1/5" : "w-1/12"
			}`}
		>
			<section
				className={`h-1/12 flex mx-auto ${
					openClose ? "w-full justify-end" : "w-1/2 justify-center"
				}`}
			>
				<Button className='w-full h-full' onClick={handleAsideOpenClose}>
					<img src={menu} className={`${openClose ? "hidden " : "flex"}`} />
					<img
						className={`h-full ${openClose ? "flex ml-44" : "hidden"}`}
						src={close}
					/>
				</Button>
			</section>
			<section
				className={`flex flex-col ${
					openClose ? "justify-between h-4/6" : "justify-between h-4/6"
				} `}
			>
				<artile
					className={`flex mx-auto w-full ${
						openClose ? "justify-start gap-4" : "justify-center"
					}`}
				>
					<figure
						className={`w-8 h-8 rounded-full overflow-hidden ${openClose}`}
					>
						<img className='objet-cover object-center' src={isotipo} />
					</figure>
					<div
						style={{ display: openClose ? "block" : "none" }}
						className=' textHiddenAside'
					>
						<p className='font-medium'>Dr. Roberto García</p>
						<p className='font-normal'>Clínica médica</p>
					</div>
				</artile>
				<artile
					className={`flex hover:bg-white p-2 rounded-xl mx-auto ${
						openClose
							? "w-full justify-start gap-4"
							: "w-2/3 h-auto justify-center"
					}`}
				>
					<img src={group} />
					<p
						style={{ display: openClose ? "block" : "none" }}
						className='textHiddenAside'
					>
						Home
					</p>
				</artile>
				<BoxIcon openClose={openClose} text={"Mi perfil"} icon={person} />
				<BoxIcon
					openClose={openClose}
					text={"Agenda de consultas"}
					icon={calendar}
				/>
				<BoxIcon
					openClose={openClose}
					text={"Mis pacientes"}
					icon={clinicalNotes}
				/>
				<BoxIcon openClose={openClose} text={"Consulta virtual"} icon={duo} />
				<BoxIcon openClose={openClose} text={"Cartilla médica"} icon={book} />
				<BoxIcon openClose={openClose} text={"Mi billetera"} icon={star} />
			</section>
			<br />
			<section
				className={`flex flex-col justify-between ${
					openClose ? "h-1/5" : "h-1/5"
				}`}
			>
				<div
					className={`flex hover:bg-white p-2 rounded-xl mx-auto ${
						openClose
							? "w-full justify-start gap-4"
							: "w-2/3 h-auto justify-center"
					}`}
				>
					<img src={notifications} />
					<div className={`${openClose ? "flex -ml-1 w-2/3" : "hidden"}`}>
						<p className='textHiddenAside'>Notificaciones</p>
						<p className='text-white rounded-full ml-2 flex justify-center  h-5 w-5 text-xs bg-red'>
							8
						</p>
					</div>
				</div>
				<BoxIcon openClose={openClose} text={"Configuración"} icon={settings} />
				<BoxIcon
					openClose={openClose}
					text={"Centro de ayuda"}
					icon={suportAgent}
				/>
			</section>
			<BoxIcon openClose={openClose} text={"Cerrar sesión"} icon={logOut} />
		</aside>
	);
}
