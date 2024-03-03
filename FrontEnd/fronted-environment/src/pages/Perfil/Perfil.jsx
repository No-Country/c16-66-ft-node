import { useEffect, useState } from "react";
import { AsideComponent } from "../../components/aside/index";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { PerfilForm } from "../../components/PerfilForm/index";
// import doctor from '../../assets/imgFakePacient/FakePacient1.png'
import historial from "../../assets/svg/historialProfesional.svg";
import matricula from "../../assets/svg/matricula.svg";
import personEdit from "../../assets/svg/person_edit.svg";
import "../../pages/PrincipalHome/index.css";
import HistoryClinic from "../../components/PerfilForm/HistoryClinic";
import HistoryProfesional from "../../components/PerfilForm/HistoryProfesional";
import { NavHome } from "../../components/NavComponent.js/NavHome";
import { CredencialMatriculaForm } from "../../components/CredencialMatriculaForm";

//cargado de img
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { useUserStore } from "../../hooks/userUserStore";
import defaultImgUser from "../../assets/imgFakePacient/userDefualtImg.png";
import editImgIcon from "../../assets/svg/border_color.svg";
import { Modal, Box, Avatar, Badge } from "@mui/material";

export default function Perfil() {
	const { editDoctorWithNewDate } = useDoctorStore();
	const { editUserWithNewDate } = useUserStore();
	const { doctorLogged } = DoctorStore();
	const { userLogged } = UserStore();
	const [user, setUser] = useState([]);
	const [btn1, setBtn1] = useState(true);
	const [btn2, setBtn2] = useState(false);
	const [btn3, setBtn3] = useState(false);
	const [inputFile, setInputFile] = useState(false); // modal para editar imagen
	const handleModalImg = () => {
		setInputFile(!inputFile);
	};
	const updateImge = async (event) => {
		event.preventDefault();
		let data = event.target.newImg.value;
		const updatedUser = { ...user, image: data };
		doctorLogged
			? await editDoctorWithNewDate(updatedUser)
			: await editUserWithNewDate(updatedUser);
		setInputFile(!inputFile);
	};

	useEffect(() => {
		if (doctorLogged !== null) {
			setUser(doctorLogged);
		} else if (userLogged !== null) {
			setUser(userLogged);
		}
	}, [doctorLogged, userLogged]);

	const handleClick1 = () => {
		setBtn1(true);
		setBtn2(false);
		setBtn3(false);
	};
	const handleClick2 = () => {
		setBtn1(false);
		setBtn2(true);
		setBtn3(false);
	};
	const handleClick3 = () => {
		setBtn1(false);
		setBtn2(false);
		setBtn3(true);
	};

	return (
		<main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px" }}
				className='mt-0.5 h-full w-10/12 lg:w-11/12 self-end bg-bgLightGreen w-inherit'
			>
				<div className='flex flex-col justify-center items-center mx-auto md:w-2/5 md:pt-6 md:ml-0 md:h-2/6 md:justify-start'>
					<div className='flex flex-col items-center '>
						<Avatar
							src={user.image ? user.image : defaultImgUser}
							alt='image doctor'
							sx={{ width: 120, height: 120 }}
							// className=' rounded-full w-1/5 md:w-1/3 h-auto lg:mb-4'
						></Avatar>
						<Badge
							className='rounded-full bg-whiteOpacity border border-darkBlue w-6 h-6 -mt-4 md:w-8 md:h-8   flex justify-center items-center'
							onClick={handleModalImg}
						>
							<Avatar
								src={editImgIcon}
								sx={{ width: 25, height: 25 }}
								className='h-4 w-4 md:h-6 md:w-6'
								alt='Editar Imagen de perfil'
							/>
						</Badge>
					</div>
					<Modal
						open={inputFile == true}
						onClose={() => handleModalImg}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
					>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								zIndex: "10",
								transform: "translate(-50%, -50%)",
								width: 400,
								bgcolor: "background.paper",
								border: "2px solid #000",
								boxShadow: 24,
								p: 4,
								borderRadius: "8px",
							}}
						>
							<div className='flex flex-col gap-4'>
								<h2 className=' font-semibold text-base text-black'>
									Cambia tu foto aqui
								</h2>
								<form onSubmit={updateImge}>
									<input
										type='text'
										name='newImg'
										placeholder='Copie la url de su imagen aqui'
										className='w-full border-2 border-darkBlue rounded-xl px-4 mb-4'
									/>
									<button
										type='submit'
										className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-green-700 hover:text-mostLighthBlue'
									>
										Guardar
									</button>
								</form>
							</div>
						</Box>
					</Modal>
					<h3 className='text-xs md:pt-1 md:text-sm lg:text-base font-semibold'>
						{user.name}
					</h3>
					<p className='text-xs md:pt-1 md:text-sm lg:text-base text-gray mb-2 lg:mb-4'>{`${
						user.birthdate
							? user.birthdate
							: "Aún no hay datos sobre la fecha de nacimiento"
					}`}</p>
				</div>

				<div className='flex flex-nowrap mx-auto justify-between overflow-x-scroll md:overflow-hidden p-1 h-12 mb-12 md:flex-col md:mx-0 md:w-2/5 md:h-fit md:items-center lg:mt-24 md:mb-4'>
					<button
						onClick={handleClick1}
						className='items-center w-64 min-w-44 p-1 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
					>
						<img src={personEdit} className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2' />
						Mis datos personales
					</button>

					<button
						onClick={handleClick2}
						className='items-center p-1 w-64 min-w-44 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
					>
						<img src={matricula} className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2' />
						{userLogged ? "Mi credencial" : "Mi matrícula"}
					</button>
					<button
						onClick={handleClick3}
						className='items-center p-1 w-64 min-w-44 flex flex-nowrap rounded-xl bg-white md:bg-transparent hover:bg-whiteOpacity mr-1 text-xs md:p-7 md:text-sm md:mb-1 md:w-64 text-center lg:text-base lg:p-3 lg:'
					>
						<img src={historial} className='h-5 md:h-6 pr-1 lg:h-7 lg:pr-2' />
						{userLogged ? "Mi historial médico" : "Mi historial profesional"}
					</button>
				</div>

				<div
					style={{ maxHeight: "470px" }}
					className='w-11/12 mt-6 mx-auto overflow-y-auto rounded-xl md:fixed md:top-16 md:right-5 md:w-2/5'
				>
					{btn1 && <PerfilForm userLogged={user} />}
					{btn2 && <CredencialMatriculaForm />}
					{btn3 && (
						<>{userLogged ? <HistoryClinic /> : <HistoryProfesional />}</>
					)}
				</div>
			</section>
		</main>
	);
}
