import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
import { useAdminStore } from "./hooks/userAdminStore"; //hook

//Rutas a requerimento
const PrincipalHome = lazy(() => import("./pages/PrincipalHome/PrincipalHome"));
const Home = lazy(() => import("./pages/home")); // en Page exportar por DEFAULT
const Loading = lazy(() => import("./pages/Loading"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPatient = lazy(() => import("./pages/Register/RegisterPaciente"));
const Autogestion = lazy(() => import("./pages/autogestion/Autogestion"));
const MedicalList = lazy(() => import("./pages/cartillaMedica/MedicalList"));
const Perfil = lazy ( () => import ('./pages/Perfil/Perfil'))

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
						<Route path='/' element={<PrincipalHome />} />
						<Route path='/autogestion' element={<Autogestion />} />
						<Route path='/home' element={<Home />} />
						<Route path='/register' element={<RegisterPatient />} />
						<Route path='/login/:types' element={<LoginPage />} />
						<Route path='/medical-list' element={<MedicalList />} />
						<Route path="/perfil" element={<Perfil />} />
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
