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
		createToken(fullname, roomData);
		const tokenResponse = await getToken(roomData);
		return tokenResponse;
	};

	return { getRoom, createNewToken };
}
