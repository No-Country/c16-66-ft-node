import { CardPacientItem } from "../../components/CardPacientItem";
import { MedicConsult } from "../../components/MedicCosult";
import { AsideComponent } from "../../components/AsideComponent/index";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { CalendarComponent } from "../../components/CalendarComponent/index";
import logo from "../../assets/FakeLOGO/Logo 3.png";
import calendarIcon from "../../assets/svg/calendar.svg";
import userIcon from "../../assets/svg/person.svg";
import videoIcon from "../../assets/svg/duo.svg";

import "./home.css";
import { useState } from "react";
export default function HomeDoctor() {
	const { users } = UserStore();
	const [selectPacient, setSelectPacient] = useState({});

	const handlerSelect = (id) => {
		console.log("en la funcion");
		console.log(id);
		const consult = users.filter((user) => user.id === id);
		setSelectPacient(...consult);
	};
	console.log("en home, el seleccionado es");
	console.log(selectPacient);
	return (
		<>
			<body className='flex w-screen h-screen box-border z-0'>
				<AsideComponent />
				<main className='w-9/12 flex'>
					{/* header con logo de APP =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
					<div className='ml-4 xl:ml-6 lg:w-4/5 xl:w-5/6 h-12/12 flex-col lg:flex-nowrap '>
						<header
							// style={{ width: "1320px" }}
							className='-ml-28 w-screen h-16 py-2.5 flex justify-center'
						>
							<img
								className='w-2.5/12 h-12'
								src={logo}
								alt='Imagen del logo de la empresa'
							/>
						</header>

						{/* Seccion de Titulo de la pagina ==-=-=-=-=-=-=-==-=-=-=-=-=-= */}
						<section className=' mt-4 mb-2 w-full h-3/12 flex-col mr-4'>
							<h2 className='text-3xl font-bold text-black'>
								Bien venido <span className=' text-darkBlue'>Dr. Roberto </span>
							</h2>
							{/* cambiar por el doctor logeado
							 */}
							<p className=' text-lg font-normal text-gray'>
								!Ten un gran día de trabajo, excelentes consultas¡
							</p>
						</section>

						{/* Seccion de scrol lateral con .. higlights? =-=-=-=-=-=-=-= */}
						<section className='w-11/12 h-1/5 max-h-40 gap-4 flex rounded-3xl bg-celestBgWrapper justify-around px-2'>
							<div className='w-1/3 h-3/4 rounded-lg  my-auto turnosWraperBg'>
								<div className=' w-7/12 h-3/6 rounded-lg m-auto mt-7 bg-white flex justify-between'>
									<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full bg-lightBlue hidden lg:flex justify-center'>
										<img
											className='objet-cover objet-center inline'
											src={calendarIcon}
											alt='Icono de Calendario'
										/>
									</div>
									<div className='w-2/3 pl-2 pt-1 flex-col justify-center truncate'>
										<stron className='text-sm font-semibold text-black'>
											30.5K
										</stron>
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
										<stron className='text-sm font-semibold text-black'>
											120.3K
										</stron>
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
										<stron className='text-sm font-semibold text-black'>
											47.0K
										</stron>
										<p className=' text-sm font-normal text-gray truncate'>
											Consultas
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Seccion de reenderizado de lista de pacientes y consulta de c/u =-=-*/}
						<section className='w-4/6 lg:w-11/12 h-72 xl:h-80 mt-8 secction__Principal-doctorHome flex py-2 px-4 items-start gap-6 shrink-0 rounded-3xl overflow-hidden'>
							<div className=' w-3/5 flex-col'>
								<h2 className=' text-2xl text-black font-medium mb-3'>
									Lista de pacientes
								</h2>
								<section className=' h-56 flex-col overflow-scroll'>
									<div>
										{users?.map((user) => {
											return (
												<CardPacientItem
													key={user.id}
													user={user}
													handlerSelect={handlerSelect}
												/>
											);
										})}
									</div>
								</section>
							</div>
							{/* =-=-=-=-=segundo bloque de la seccion  - Turno -=-=-=-=-=- */}
							<div className='w-full h-full flex-col gap-6'>
								<div className='flex justify-between'>
									<h2 className=' font-medium text-xl text-black'>
										Consulta Médica
									</h2>
									<p className='text-darkBlue mr-2'> Ver más.. </p>
								</div>
								{selectPacient.name != undefined && (
									<MedicConsult user={selectPacient} />
								)}
							</div>
						</section>
					</div>
					<section className='-ml-4 xl:ml-0 mt-20 mb-2 w-5/12 h-2/5 flex-col box-border'>
						<div className='m-auto box-border'>
							<CalendarComponent />
							<div className='w-full h-32  m-auto mt-2 pt-2 flex justify-center items-center bg-mostLighthBlue rounded-lg box-border overflow-scroll'>
								{selectPacient.name != undefined && (
									<CardPacientItem user={selectPacient} />
								)}
							</div>
						</div>
					</section>
				</main>
			</body>
		</>
	);
}
