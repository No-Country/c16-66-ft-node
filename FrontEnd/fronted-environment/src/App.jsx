import { useEffect } from "react";

// import { UserStore } from "./StoreGeneral/UsersStore"; //zustand
// import { DoctorStore } from "./StoreGeneral/DoctorsStore"; //zustand
// import { AdminStore } from "./StoreGeneral/AdminsStore"; //zustand
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
import { useAdminStore } from "./hooks/userAdminStore"; //hook
import { Home } from "./pages/home";

function App() {
	//carga general de Users.
	const { getUserApiResponse } = useUserStore(); //hook
	// const { users } = UserStore(); //zustand
	// carga de Doctors
	const { getDoctorApiResponse } = useDoctorStore(); //hook
	// const { doctors } = DoctorStore(); //zustand
	//carga de admins
	// const { admins } = AdminStore();
	const { getAdminApiResponse } = useAdminStore();
	useEffect(() => {
		getUserApiResponse(); // inyecta los datos de la db en el estado.
		getDoctorApiResponse(); // idem => doctors
		getAdminApiResponse();
	}, []);

	return (
		<>
			<Home />
		</>
	);
}

export default App;
