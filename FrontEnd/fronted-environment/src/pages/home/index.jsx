import { useNavigate } from "react-router-dom";
import { AsideComponent } from "../../components/aside/index";
import { ViewFromLg } from "./ViewFromLg";
import { ViewFromSm } from "./ViewFromSm";
import logo from "../../assets/FakeLOGO/Logo 3.png";
//Store Zustand debajo
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import "./home.css";
// import { Footer } from "../../components/principalHome/Footer";

export default function Home() {
	const navigate = useNavigate();
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	if (!userLogged && !doctorLogged) {
		navigate("/autogestion");
	}

	return (
		<>
			<AsideComponent />
			<header className='w-screen h-16 py-2.5 flex justify-center z-0'>
				<img
					className='w-2.5/12 h-12 cursor-pointer'
					src={logo}
					alt='Imagen del logo de la empresa'
					onClick={() => navigate("/")}
				/>
			</header>
			<main className='flex w-screen h-screen box-border z-0 '>
				<main className='hidden w-9/12 lg:flex' style={{ marginInline: "10%" }}>
					<ViewFromLg />
					{/* se ve a partir de 1024 px */}
				</main>
				<main
					className='hidden w-10/12 xs:hidden sm:flex lg:hidden xl:hidden'
					style={{ marginLeft: "20%" }}
				>
					<ViewFromSm />
					{/* se renderiza a partir de 640px  */}
				</main>
			</main>
			{/* <Footer /> */}
		</>
	);
}
