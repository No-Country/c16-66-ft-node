/* eslint-disable react/prop-types */
import { useState } from "react";

import { CardPacientItem } from "../../components/CardPacientItem";
import { MedicConsult } from "../../components/MedicCosult";
// import { AsideComponent } from "../../components/AsideComponent/index";
import { CalendarComponent } from "../../components/CalendarComponent/index";
import { HomeHiglights } from "../../components/homeHiglihts";
//
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

//
import logo from "../../assets/FakeLOGO/Logo 3.png";
import credencialIcon from "../../assets/svg/contact_emergency.svg";
import { Modal } from "@mui/material";

//objeto inicial debajo, solo para probar flujo --> a remplazar por state cuando haya loggin
const doctorInfo = {
	id: "0973hd755h5",
	registrationNumber: "X-675739-bg",
	name: "Lucia Rodriguez",
	email: "luciaDo@hotmail.com",
	specialty: "Cardiologia",
	password: "123456",
	birthdate: "2087-02-15T15:01:12.688Z",
	socialSecurityAdd: ["Ioma", "Ospe", "Amemop", "Galeno", "Pami", "Osde"],
	tel: 22461847578,
	address: "Calle 34 251",
	province: "Buenos Aires",
	town: "La Plata",
};
// const userInfo = {
// 	id: "0973hd34h5",
// 	dni: 34783921,
// 	name: "Lucia Camps",
// 	email: "Luciacamps@hotmail.com",
// 	password: "123456",
// 	birthdate: "2097-02-15T15:01:12.688Z",
// 	"social Security": "Ioma",
// 	weight: 58,
// 	tel: 221847578,
// 	address: "Calle 7 251",
// 	province: "Buenos Aires",
// 	town: "La Plata",
// };

export function ViewFromLg() {
	let doctorLogged = doctorInfo; // test objet hasta que funcione loggin
	let userLogged;

	const { users } = UserStore();
	const { doctors } = DoctorStore();
	const [selectTypeUser, setSelectTypeUser] = useState({});
	const [credAnim, setCredAnim] = useState(false);

	const [open, setOpen] = useState(false);
	const handleModalConsult = () => setOpen(!open);

	const handlerSelect = (id) => {
		let consult;
		doctorLogged
			? (consult = users.filter((user) => user.id === id))
			: (consult = doctors.filter((user) => user.id === id));
		setSelectTypeUser(...consult);
	};

	return (
		<>
			{/* header con logo de APP =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
			<div className='ml-4 xl:ml-6 lg:w-4/5 xl:w-5/6 h-12/12 flex-col lg:flex-nowrap'>
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
				<section className=' mt-2 mb-1 w-full h-3/12 flex-col mr-4'>
					<h2 className='text-3xl font-bold text-black'>
						{" "}
						Bienvenido/a
						<span className=' text-darkBlue'>
							{doctorLogged
								? ` Dr. ${doctorLogged.name}`
								: ` ${userLogged?.name}`}
						</span>
					</h2>
					{doctorLogged ? (
						<p className=' text-lg font-normal text-gray'>
							¡Ten un gran día de trabajo, excelentes consultas!
						</p>
					) : (
						<p className=' text-lg font-normal text-gray'>
							¡Ten un gran día, y accede a las mejores consultas médicas!
						</p>
					)}
				</section>

				{/* Seccion de  higlights? =-=-=-=-=-=-=-= */}
				<section className='w-11/12 h-1/6 max-h-32 gap-4 flex rounded-3xl bg-celestBgWrapper justify-around px-2'>
					<HomeHiglights />
				</section>

				{/* Seccion de reenderizado de lista de pacientes y consulta de c/u =-=-=-=-=-=-=*/}
				<section className='w-11/12 h-80 xl:h-96 mt-4 xl:mt-2 secction__Principal-doctorHome flex py-2 px-4 items-start gap-6 shrink-0 rounded-3xl overflow-hidden'>
					<div className=' w-6/12 flex-col'>
						<h2 className=' text-2xl text-black font-medium mb-3'>
							{doctorLogged ? "Lista de pacientes" : "Próximos turnos "}
						</h2>
						<section className='w-full h-64 xl:h-72 flex-col overflow-scroll'>
							{doctorLogged ? (
								<div className='w-full'>
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
							) : (
								<div className='ml-2'>
									{doctors?.map((doctor) => {
										return (
											<CardPacientItem
												key={doctor.id}
												user={doctor}
												handlerSelect={handlerSelect}
											/>
										);
									})}
								</div>
							)}
						</section>
					</div>
					{/* -=-=segundo bloque de la seccion - Turno/ doctor info --=-=-=- */}
					<div className='hidden w-full h-32  m-auto mt-2 pt-2 xs:flex justify-center items-center bg-mostLighthBlue rounded-lg box-border overflow-scroll'>
						{selectTypeUser?.name != undefined ? (
							<CardPacientItem user={selectTypeUser} />
						) : (
							<CardPacientItem user={users[0]} />
						)}
					</div>

					<div className='w-6/12 h-full flex-col gap-6'>
						<div className='flex justify-between'>
							<h2 className=' font-medium text-xl text-black'>
								Consulta Médica
							</h2>
							<button
								className='text-darkBlue mr-2 hover:cursor-pointer'
								onClick={handleModalConsult}
							>
								{" "}
								Ver más..{" "}
							</button>
						</div>
						{selectTypeUser?.name != undefined ? (
							<MedicConsult user={selectTypeUser} />
						) : doctorLogged ? (
							<MedicConsult user={users[0]} />
						) : (
							<MedicConsult user={doctors[0]} />
						)}
					</div>
				</section>
				{/* Modal de Ver Mas =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
				<Modal
					open={open}
					onClose={handleModalConsult}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<section
						style={{ marginTop: "2%", marginLeft: "33%" }}
						className='absolute   w-96 bg-mostLighthBlue rounded-2xl border-2 shadow-2xl p-4'
					>
						{selectTypeUser?.name != undefined ? (
							<MedicConsult user={selectTypeUser} />
						) : doctorLogged ? (
							<MedicConsult user={users[0]} />
						) : (
							<MedicConsult user={doctors[0]} />
						)}
					</section>
				</Modal>
			</div>
			<section className='-ml-4 xl:ml-0 mt-16 mb-2 w-5/12 h-2/5 flex-col box-border'>
				<div className='m-auto mt-2 box-border'>
					<CalendarComponent />

					<div
						className='mt-1 w-full h-44 pt-1 flex-col items-center bg-mostLighthBlue rounded-xl box-border hover:cursor-pointer relative'
						onClick={() => setCredAnim(!credAnim)}
					>
						<h3 className='ml-4 text-lg font-semibold text-black over'>
							{" "}
							{doctorLogged ? "Mi Matricula" : "Mi Credencial"}
						</h3>

						<article
							className={`w-5/6 h-10/12 m-auto mt-2 border-2 rounded-xl border-lightBlue py-1 px-2 bg-white absolute right-7  ${
								credAnim ? "animate-rotate-x" : "blurCard opacity-80 "
							} `}
						>
							<div>
								Nombre y Apellido:{" "}
								<span className=' ml-2 text-xs  text-darkBlue '>
									{doctorLogged ? doctorLogged.name : userLogged?.name}
								</span>
							</div>
							<div>
								{doctorLogged ? "Email:" : "DNI:"}
								<span className='ml-2  text-xs   text-darkBlue'>
									{doctorLogged ? doctorLogged.email : userLogged?.dni}
								</span>
							</div>
							<div>
								{doctorLogged ? "Specialty :" : "Cuil:"}
								<span className=' ml-2 text-xs   text-darkBlue'>
									{doctorLogged
										? doctorLogged.specialty
										: `20-${userLogged?.dni}-09`}
								</span>
							</div>
							<div>
								{doctorLogged ? "Matricula N°:" : "N° Afiliado:"}
								<span className='ml-2  text-xs   text-darkBlue'>
									{doctorLogged
										? doctorLogged.registrationNumber
										: userLogged?.id}
								</span>
							</div>
						</article>
						<article className='w-5/6 h-10/12 rounded-xl flex  m-auto mt-6 pl-6'>
							<div
								className={`bg-blue flex  ${
									credAnim ? "opacity-0 z-0" : "opacity-100 z-20"
								} `}
							>
								<div className='w-fit h-fit p-1 mt-2 ml-1 rounded-full flex justify-center'>
									<img
										src={credencialIcon}
										className='objet-cover objet-center inline'
										alt='Icono de credencial'
									/>
								</div>
								<div className='w-full pl-1 pt-1 flex-col'>
									<p className=' text-md font-semibold text-black '>
										Accede acá a tu
									</p>
									<strong className='text-md font-bold	 text-black'>
										{doctorLogged ? "Matricula" : "Credencial"} Digital
									</strong>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}
