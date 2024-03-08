/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createRoom, createToken, getToken, isSessionActive } from "../Service";

export function useVideoCall() {
	const getRoom = async () => {
		// console.log("en el video call room :", logged);
		// const roomName = logged.lastname + "sRoom";
		const roomData = await createRoom();
		console.log("En el hook, el create room devolvio :", roomData);
		return roomData;
	};

	const createNewToken = async (username, roomName) => {
		console.log("en hook :", username, roomName);
		// const dataForBody = { identity: username, room: roomName };
		const responsePostToken = await createToken({ username, roomName });
		console.log(
			"en el Hook response del pedido por token de post: ",
			responsePostToken
		);
		return responsePostToken;
	};

	const getTokenFn = async (username, roomName) => {
		const responseGetToken = await getToken(username, roomName);
		console.log("respesta del get token desde el hook:", responseGetToken);

		return responseGetToken;
	};

	const isAnyLoged = async () => {
		const response = await isSessionActive();
		console.log("el sesion responde :", response);
		return response;
	};

	const decodeTwilioToken = (token) => {
		try {
			// Dividir el token en partes
			const [header, payload, signature] = token.split(".");
			// Decodificar la carga útil (payload) y convertirla de Base64 a texto
			// const decodedPayload = Buffer.from(payload, "base64").toString("utf-8");
			const decodedPayload = window.atob(payload);
			// Convertir la carga útil decodificada en un objeto JSON
			const payloadObject = JSON.parse(decodedPayload);
			return payloadObject;
		} catch (error) {
			console.error("Error al decodificar el token de Twilio:", error.message);
			return null;
		}
	};

	return { getRoom, createNewToken, getTokenFn, isAnyLoged, decodeTwilioToken };
}
