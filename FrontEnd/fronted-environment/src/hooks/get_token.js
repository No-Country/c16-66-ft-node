import { AccessToken } from "twilio.jwt.AccessToken";
const { VideoGrant } = AccessToken;

// Credenciales de tu cuenta Twilio
const twilioAccountSid = "ACf83bb3d62465b466e039d353cfe3365b";
const twilioApiKey = "SK2f3abb9162b80200d5b164b17bc1e3a4";
const twilioApiSecret = "KoQXKPGnDGRhu7cjaiQW3CPhe5xVyj56";

export function getTokenLocalFn() {
	// Crear un token de acceso
	const token = new AccessToken(
		twilioAccountSid,
		twilioApiKey,
		twilioApiSecret
	);

	// Asignar el identificador del usuario (puede ser cualquier string único)
	const identity = "userPacient";

	// Dar permisos al token (en este caso para Twilio Video)
	const grant = new VideoGrant();
	token.addGrant(grant);

	// Asignar el identificador del usuario al token
	token.identity = identity;

	// Generar el token y devolverlo como respuesta
	console.log(token.toJwt());
	return token;
}
