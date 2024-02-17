import { useEffect } from "react";
import { Card, Button } from "@mui/material/";
import { UserStore } from "./StoreGeneral/UsersStore"; //zustand
import { DoctorStore } from "./StoreGeneral/DoctorsStore"; //zustand
import { AdminStore } from "./StoreGeneral/AdminsStore"; //zustand
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
import { useAdminStore } from "./hooks/userAdminStore"; //hook
function App() {
	//carga general de Users.
	const { getUserApiResponse } = useUserStore(); //hook
	const { users } = UserStore(); //zustand
	// carga de Doctors
	const { getDoctorApiResponse } = useDoctorStore(); //hook
	const { doctors } = DoctorStore(); //zustand
	//carga de admins
	const { admins } = AdminStore();
	const { getAdminApiResponse } = useAdminStore();
	useEffect(() => {
		getUserApiResponse(); // inyecta los datos de la db en el estado.
		getDoctorApiResponse(); // idem => doctors
		getAdminApiResponse();
	}, []);
	console.log("users : ");
	console.log(users);
	console.log("doctors :");
	console.log(doctors);
	console.log("admins :");
	console.log(admins);

	return (
		<>
			<Card sx={{ display: "flex", gap: "4%" }}>
				<h1 className=' text-primaryGreen bg-darkBlue font-bold'>
					No Country Frontend App
				</h1>
				<Button sx={{ width: "20%" }} variant='outlined'>
					Comprobando instalaciones
				</Button>
			</Card>
		</>
	);
}

export default App;
