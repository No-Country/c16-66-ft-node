import { createRoom, createToken, getToken } from "../Service";

export function useVideoCall() {
	const getRoom = async (logged) => {
		console.log("en el video call room :", logged);
		const roomName = logged.lastname + "sRoom";
		const roomData = await createRoom(roomName);
		return roomData;
	};

	const createNewToken = async (logged, roomData) => {
		const fullname = logged.name + logged.lastname;
		const responsePostToken = await createToken(fullname, roomData);
		console.log(responsePostToken);
	};

	const getTokenFn = async (roomData) => {
		const responseGetToken = await getToken(roomData);
		console.log("respesta del get token desde el hook:", responseGetToken);
	};

	return { getRoom, createNewToken, getTokenFn };
}
