import calendarIcon from "../../assets/svg/calendar.svg";
import userIcon from "../../assets/svg/person.svg";
import videoIcon from "../../assets/svg/duo.svg";
import bookIcon from "../../assets/svg/book.svg";
import studiesIcon from "../../assets/svg/clinicalNotes.svg";
export function HomeHiglights() {
	let doctorLogged; // test objet hasta que funcione loggin
	return (
		<>
			{doctorLogged ? (
				<>
					<div className='w-1/3 h-3/4 rounded-lg  my-auto turnosWraperBg'>
						<div className='w-10/12 lg:w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-between'>
							<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full bg-lightBlue hidden lg:flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={calendarIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
								<strong className='text-sm font-semibold text-black'>
									30.5K
								</strong>
								<p className=' text-sm font-normal text-gray truncate'>
									Total turnos
								</p>
							</div>
						</div>
					</div>
					<div className='w-1/3 h-3/4 rounded-lg pacientsWraperBg my-auto'>
						<div className=' w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-between'>
							<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full bg-lightBlue hidden lg:flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={userIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
								<strong className='text-sm font-semibold text-black'>
									120.3K
								</strong>
								<p className=' text-sm font-normal text-gray truncate'>
									Pacientes
								</p>
							</div>
						</div>
					</div>
					<div className='w-1/3 h-3/4 rounded-lg videosWraperBg my-auto'>
						<div className=' w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-between'>
							<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full bg-lightBlue hidden lg:flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={videoIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
								<strong className='text-sm font-semibold text-black'>
									47.0K
								</strong>
								<p className=' text-sm font-normal text-gray truncate'>
									Consultas
								</p>
							</div>
						</div>
					</div>
				</>
			) : (
				// Renderizado condicional, abajo si ha Paciente Logeado
				<>
					<div className='w-1/3 sm:h-2/3 lg:h-3/4 rounded-lg my-auto agendaWraperBg'>
						<div className='sm:w-9/12 lg:w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-evenly items-center'>
							<div className='w-fit h-fit p-1 rounded-full bg-lightBlue flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={calendarIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 flex justify-center items-center truncate'>
								<strong className='text-sm font-semibold  text-black'>
									Mi agenda
								</strong>
							</div>
						</div>
					</div>
					<div className='w-1/3 h-3/4 rounded-lg cartillaWraperBg my-auto'>
						<div className='sm:w-9/12 lg:w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-evenly items-center'>
							<div className='w-fit h-fit p-1 rounded-full bg-lightBlue flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={bookIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
								<strong className='text-sm font-semibold text-black'>
									Cartilla médica
								</strong>
							</div>
						</div>
					</div>
					<div className='w-1/3 h-3/4 rounded-lg turnosWraperBg my-auto'>
						<div className='sm:w-9/12 lg:w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-evenly items-center'>
							<div className='w-fit h-fit p-1 rounded-full bg-lightBlue flex justify-center'>
								<img
									className='objet-cover objet-center inline'
									src={studiesIcon}
									alt='Icono de Calendario'
								/>
							</div>
							<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
								<strong className='text-sm font-semibold text-black'>
									Mis estudios
								</strong>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
