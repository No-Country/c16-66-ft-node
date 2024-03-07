/* eslint-disable no-unused-vars */
import { Avatar } from "@mui/material";
import { CircularProgress, Stack } from "@mui/material/";
import duo from "../../assets/svg/duo.svg";
import deafultImage from "../../assets/imgFakePacient/userDefualtImg.png";
import { AsideComponent } from "../../components/aside";
import { NavHome } from "../../components/NavComponent.js/NavHome";
import { useVideoCall } from "../../hooks/useVideoCall";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { useEffect, useState, useCallback } from "react";
import { Room } from "./Room";
// import { Lobby } from "./Lobby";
import Video from "twilio-video"; // sin esto no funciona nada
export default function VideoCall() {
	//seteos de la App nuestra
	const { userLogged } = UserStore();
	const { doctorLogged } = DoctorStore();
	const [username, setUsername] = useState(
		userLogged != null ? userLogged : doctorLogged
	);
	const { getRoom, createNewToken, getTokenFn, isAnyLoged } = useVideoCall();
	// fin seteos app nuestra
	const [roomName, setRoomName] = useState("");
	const [room, setRoom] = useState(null);
	const [connecting, setConnecting] = useState(false);

	const handleSubmit = useCallback(async (event) => {
		event.preventDefault();
		setConnecting(true);
		const newRoomData = await getRoom();

		// const data = await fetch("/video/token", {
		// 	method: "POST",
		// 	body: JSON.stringify({
		// 		identity: username,
		// 		room: roomName,
		// 	}),
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// }).then((res) => res.json());
		console.log("username", username.lastname);
		console.log("newRoomData :", newRoomData.room.uniqueName);
		await createNewToken(username.lastname, newRoomData.room.uniqueName); // no esta llegando
		const token = await getTokenFn(
			username.lastname,
			newRoomData.room.uniqueName
		);
		console.log("desde la funcion token por get:", token);

		Video.connect(token, {
			// lo obtendria de las api de lucas
			name: roomName.uniqueName,
		})
			.then((room) => {
				// setConnecting(false);
				// setRoom(room);
				console.log("room que llega", room);
			})
			.catch((err) => {
				console.error(err);
				setConnecting(false);
			});
	}, []);

	const handleLogout = useCallback(() => {
		setRoom((prevRoom) => {
			if (prevRoom) {
				prevRoom.localParticipant.tracks.forEach((trackPub) => {
					trackPub.track.stop();
				});
				prevRoom.disconnect();
			}
			return null;
		});
	}, []);

	return (
		<main className='flex flex-col w-screen h-screen box-border z-0'>
			<AsideComponent />
			<NavHome />
			<section
				style={{ maxHeight: "1024px", height: `calc(100vh - 4rem)` }}
				className='h-full w-10/12 mt-0.5 lg:w-11/12 self-end w-inherit'
			>
				<main>
					{!room && (
						<button
							className='m-auto w-80 flex justify-center mb-20 mt-10  border-2 border-white hover:border-2 rounded-xl hover:border-darkBlue '
							onClick={handleSubmit}
						>
							{" "}
							<Avatar src={duo} />
							<p className='m-auto font-semibold text-darck'>
								Inicia tu video Llamada{" "}
							</p>
						</button>
					)}
					{room ? (
						<Room roomName={roomName} room={room} handleLogout={handleLogout} />
					) : (
						<section className='h-full w-full '>
							<div className=' m-auto w-9/12 h-full flex justify-around'>
								<div>
									<Avatar
										src={username?.image}
										sx={{ width: 186, height: 186 }}
									/>{" "}
								</div>
								<div className='flex m-auto w-96 items-center gap-10 justify-center'>
									{" "}
									<CircularProgress color='inherit' />{" "}
									<CircularProgress color='inherit' />{" "}
									<CircularProgress color='inherit' />{" "}
								</div>
								<div>
									<Avatar src={deafultImage} sx={{ width: 186, height: 186 }} />
								</div>
							</div>
						</section>
					)}
				</main>
			</section>
		</main>
	);
}
