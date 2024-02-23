// import { CardPacientItem } from "../../components/CardPacientItem";
// import { MedicConsult } from "../../components/MedicCosult";
import { AsideComponent } from "../../components/AsideComponent/index";
import { ViewFromLg } from "./ViewFromLg";
import { ViewFromSm } from "./ViewFromSm";
// import { CalendarComponent } from "../../components/CalendarComponent/index";
// import { HomeHiglights } from "../../components/homeHiglihts";
// //
// import { UserStore } from "../../StoreGeneral/UsersStore";
// import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

// //
// import logo from "../../assets/FakeLOGO/Logo 3.png";
// import credencialIcon from "../../assets/svg/contact_emergency.svg";
// import { Modal } from "@mui/material";
//
import "./home.css";

//

export default function Home() {
	// const [selectTypeUser, setSelectTypeUser] = useState({});
	//abajo, states para modal  credencial. Solo manejo del dom
	// const [credAnim, setCredAnim] = useState(false);

	// const [open, setOpen] = useState(false);
	// const handleModalConsult = () => setOpen(!open);

	// const handlerSelect = (id) => {
	// 	console.log("en la funcion");
	// 	console.log(id);
	// 	let consult;
	// 	doctorLogged
	// 		? (consult = users.filter((user) => user.id === id))
	// 		: (consult = doctors.filter((user) => user.id === id));
	// 	setSelectTypeUser(...consult);
	// };

	return (
		<>
			<body className='flex w-screen h-screen box-border z-0'>
				<AsideComponent />
				<main className=' w-9/12 flex'>
					<ViewFromLg />
					{/* se ve a partir de 1024 px */}
				</main>
				{/* <main className='hidden w-9/12 xs:hidden sm:flex lg:hidden xl:hidden'>
						<ViewFromSm /> */}
				{/* se renderiza a partir de 640px  */}
				{/* </main> */}
			</body>
		</>
	);
}
