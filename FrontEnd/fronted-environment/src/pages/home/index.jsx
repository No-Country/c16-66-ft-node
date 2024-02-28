import { useNavigate } from "react-router-dom";
import { AsideComponent } from "../../components/aside/index";
import { ViewFromLg } from "./ViewFromLg";
import { ViewFromSm } from "./ViewFromSm";
//Store Zustand debajo
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import "./home.css";
import { Footer } from "../../components/principalHome/Footer";

export default function Home() {
	const navigate = useNavigate();
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	if (!userLogged && !doctorLogged) {
		navigate("/autogestion");
	}

	return (
		<>
			<main className='flex w-screen h-screen box-border z-0'>
				<AsideComponent />
				<main className='hidden w-9/12 lg:flex' style={{ marginLeft: "8%" }}>
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
