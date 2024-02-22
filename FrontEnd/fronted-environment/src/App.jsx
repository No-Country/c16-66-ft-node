import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { useUserStore } from "./hooks/userUserStore"; //hook
import { useDoctorStore } from "./hooks/useDoctorStore"; //hook
import { useAdminStore } from "./hooks/userAdminStore"; //hook

//Rutas a requerimento
const PrincipalHome = lazy(() => import("./pages/PrincipalHome/PrincipalHome"));
const Home = lazy(() => import("./pages/home")); // en Page exportar por DEFAULT

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
				<Suspense
					fallback={
						// <div className=' bg-slate-700 w-2/3 h-2/3 m-auto'> Loading... </div>
						<Skeleton
							sx={{ bgcolor: "#82C3E4" }}
							variant='rectangular'
							width={screen}
							height={1280}
						/>
					}
				>
					<Routes>
						<Route path='/' element={<PrincipalHome />} />
						<Route path='/home' element={<Home />} />
						{/* Aqui solo rutas. A la de arriba le cambiaremos el path cuando haya mas */}
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
