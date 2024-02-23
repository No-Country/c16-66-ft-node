import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Skeleton } from "@mui/material"; ???
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
import { useAdminStore } from "./hooks/userAdminStore"; //hook

//Rutas a requerimento
const PrincipalHome = lazy(() => import("./pages/PrincipalHome/PrincipalHome"));
const Home = lazy(() => import("./pages/home")); // en Page exportar por DEFAULT
const Loading = lazy(() => import("./pages/Loading"));
//const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPatient = lazy(() => import("./pages/Register/RegisterPaciente"));

function App() {
	//carga general de Users.
	const { getUserApiResponse } = useUserStore(); //hook

	// carga de Doctors
	const { getDoctorApiResponse } = useDoctorStore(); //hook

	//carga de admins

	const { getAdminApiResponse } = useAdminStore();
	useEffect(() => {
		getUserApiResponse(); // inyecta los datos de la db en el estado.
		getDoctorApiResponse(); // idem => doctors
		getAdminApiResponse();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/p' element={<PrincipalHome />} />
						<Route path='/home' element={<Home />} />
						<Route path='/' element={<RegisterPatient/>} />
						<Route
							path='/*'
							element={
								<h2 className=' font-bold'>Error 404. Page not Found ...</h2>
							}
						/>
						{/* Aqui solo rutas. A la de arriba le cambiaremos el path cuando haya mas */}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
