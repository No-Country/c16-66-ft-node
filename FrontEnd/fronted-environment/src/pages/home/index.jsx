import { useNavigate } from "react-router-dom";
import { AsideComponent } from "../../components/aside/index";
import { ViewFromLg } from "./ViewFromLg";
import { ViewFromSm } from "./ViewFromSm";
import { ViewFromXs } from "./ViewFromXs";
// import logo from "../../assets/FakeLOGO/Logo 3.png";
//Store Zustand debajo
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { AppoinmentStore } from "../../StoreGeneral/AppoinmentStore";
import { useAppointmentStore } from "../../hooks/useAppointmentStore";
import { NavHome } from "../../components/NavComponent.js/NavHome";
import "./home.css";
<<<<<<< HEAD
import '../../pages/PrincipalHome/index.css'
import { useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 255a1fc3f5c8ba8dc3a92cd73aac925b1feb4614
// import { Footer } from "../../components/principalHome/Footer";

export default function Home() {
	const navigate = useNavigate();
	const { getAppointmentResponse, appointmentForId } = useAppointmentStore();
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	const { appoinments } = AppoinmentStore();
	const [userAppointments, setUserAppointments] = useState([]);
	console.log("turnos desde home :", appoinments);
	if (userLogged == null && doctorLogged == null) {
		navigate("/autogestion");
	}

	useEffect(() => {
		getAppointmentResponse();
		let filteredAppointments;
		if (userLogged && appoinments) {
			filteredAppointments = appointmentForId(userLogged.pacientId, "pacient");
			setUserAppointments(filteredAppointments);
			console.log("que retorna esto :", filteredAppointments);
		} else {
			filteredAppointments = appointmentForId(doctorLogged?.doctorId, "doctor"); // doctorLoged? para que dfuncione el reenvio si no hay doctor logeado
			console.log("que retorna esto :", filteredAppointments);
			setUserAppointments(filteredAppointments);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log("Citas filtradas en el home", userAppointments);
	return (
		<main className='flex flex-col w-screen h-screen box-border z-0 p-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px", maxWidth: "100vw", height: `calc(100vh - 4rem)`}}
				className='mt-0.5 w-full flex box-border z-0 overflow-y-auto 2xl:overflow-visible asideWidth self-end p-2'
			>
			{/* <AsideComponent />
			<header className='w-screen h-16 py-2.5 flex justify-center z-0'>
				<img
					className='w-2.5/12 h-12 cursor-pointer'
					src={logo}
					alt='Imagen del logo de la empresa'
					onClick={() => navigate("/")}
				/>
			</header> */}
			{/* <main
				// style={{ height: "615px" }}
				style={{ height: `calc(100vh - 4rem)` }}
				className='flex box-border z-0 overflow-scroll 2xl:overflow-visible '
			> */}
				<main className='hidden w-full lg:flex'>
					<ViewFromLg />
					{/* se ve a partir de 1024 px */}
				</main>
				<main
					className='hidden w-full xs:hidden sm:flex lg:hidden xl:hidden'
				>
					<ViewFromSm />
					{/* se renderiza a partir de 640px  */}
				</main>
				<main
					className='w-full xs:flex sm:hidden lg:hidden xl:hidden'
				>
					<ViewFromXs />
					{/* se renderiza a partir de 640px  */}
				</main>
			{/* </main> */}
			{/* <Footer /> */}
		</section>
		</main>
	);
}
