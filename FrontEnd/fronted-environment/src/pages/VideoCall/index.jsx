/* eslint-disable no-unused-vars */
import { AsideComponent } from "../../components/aside";
import { NavHome } from "../../components/NavComponent.js/NavHome";
import { useVideoCall } from "../../hooks/useVideoCall";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { useEffect, useState } from "react";
export default function VideoCall() {
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	const [logged, setLogged] = useState(
		userLogged != null ? userLogged : doctorLogged
	);
	const [roomData, setRoomData] = useState({});
	const [token, setToken] = useState(null);
	const { getRoom, createNewToken, getTokenFn } = useVideoCall();

	const createVideoSubmit = async () => {
		const responseRoom = await getRoom(logged);
		setRoomData(responseRoom);
		const tokenResponse = await createNewToken(logged, roomData);
		setToken(tokenResponse);
	};
	const getTokenForCall = () => {
		getTokenFn(roomData);
	};
	console.log(roomData);
	console.log("token desde la view:", token);
	return (
		<main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px", height: `calc(100vh - 4rem)` }}
				className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end w-inherit'
			>
				<h1>videollamadaaa</h1>

				<button onClick={createVideoSubmit}> Crear video Llamada </button>
				<button onClick={getTokenForCall}> Traer Token </button>
			</section>
		</main>
	);
}
