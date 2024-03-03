import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
// import { useAdminStore } from "./hooks/userAdminStore"; //hook

//Rutas a requerimento
const PrincipalHome = lazy(() => import("./pages/PrincipalHome/PrincipalHome"));
const Home = lazy(() => import("./pages/home")); // en Page exportar por DEFAULT
const Loading = lazy(() => import("./pages/Loading"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPatient = lazy(() => import("./pages/Register/Register"));
const Autogestion = lazy(() => import("./pages/autogestion/Autogestion"));
const MedicalList = lazy(() => import("./pages/cartillaMedica/MedicalList"));
const Perfil = lazy(() => import("./pages/Perfil/Perfil"));
const PatientsOrSpecialists = lazy(() =>
	import("./components/PerfilForm/PatientsOrSpecialists")
);
const MyAgenda = lazy(() => import("./pages/MyAgenda"));

function App() {
	//carga general de Users.
	const { getUserApiResponse } = useUserStore(); //hook
	// carga de Doctors
	const { getDoctorApiResponse } = useDoctorStore(); //hook

	//carga de admins

	// const { getAdminApiResponse } = useAdminStore(); LE pega a la api vieja
	useEffect(() => {
		getUserApiResponse(); // inyecta los datos de la db en el estado.
		getDoctorApiResponse(); // idem => doctors
		// getAdminApiResponse();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<PrincipalHome />} />
						<Route path='/autogestion' element={<Autogestion />} />
						<Route path='/home' element={<Home />} />
						<Route path='/register/:types' element={<RegisterPatient />} />
						<Route path='/login/:types' element={<LoginPage />} />
						<Route path='/medical-list' element={<MedicalList />} />
						<Route path='/perfil' element={<Perfil />} />
						<Route path='/my-list' element={<PatientsOrSpecialists />} />
						<Route path='/my-agenda' element={<MyAgenda />} />
						<Route
							path='/*'
							element={
								<h2 className=' font-bold'>Error 404. Page not Found ...</h2>
							}
						/>
						{/* Aqui solo rutas */}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
