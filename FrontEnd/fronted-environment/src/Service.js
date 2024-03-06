import axios from "redaxios";

// Doctores creados nuevos, no me funciona el login xq me devuele contrasena hasheada entonces  no pasa validacion front. tamp funciona pegandole a doctors/login como pacients
// Pacient = Tampoco funciona login paciente no se porque, ni app ni postman
// Doctor = no me deja hacer el edit desde la app por "registrationNumber", me dice "error: 'invalid input syntax for type integer: "345732hdhs" ". Si habia podido desde postman.
//Paciente = Update funciona en postman, no puedo logear asique no puedo probar en la app. supongo que cuando haya persistencia, posdria cmabiar email desde postman, y probar en app. (por ahora no puedo hacer eso, xq no me anda el ligin).
// Appoinments y reviews tiran [] vacios, pero entiendo que eso se cambia.
//Video call, a veces tira error de cors, PERO reiniciando el servidor va, sacando el tema que hable con lucas

export const Api = axios.create({
	baseURL: "http://localhost:3001",
	// baseURL: "https://c16-66-ft-node.onrender.com",
});

// Devuelve Todo lo que haya en cada endPoint =========================

export const fetchUsers = async () => {
	try {
		const { data } = await Api.get(`/pacients`);
		console.log("desde el service a ver que onda :", data);
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const fetchDoctors = async () => {
	try {
		const { data } = await Api.get(`/doctors`);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

export const fetchAdmin = async () => {
	try {
		const { data } = await Api.get(`/admin`);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

// Crean user, doctor y admin ======================================
export const addUser = async (user) => {
	try {
		await Api.post("/pacients/signup", user);
	} catch (err) {
		console.log("errors en creacion de usuarios service: ", err);
	}
};

export const userLogout = async () => {
	// PARA DESLOGEAR DE LA DB A USUARIOS

	try {
		const response = await Api.get("/pacients/logout");
		console.log("logout Responde :", response);
	} catch (err) {
		console.log("errors en : ", err);
	}
};

export const addDoctorService = async (newDoctor) => {
	// Funciona con el signup en psotman y aca
	try {
		console.log("en el service new doctor :", newDoctor);
		await Api.post("/doctors/signup", newDoctor);
	} catch (err) {
		console.log("errors en : ", err);
	}
};

// export const addAdmin = async (admin) => {
// 	await Api.post("/admin/", admin);
// };

// Solo trae uno con un email y el password que son String =================================

// export const getOneUser = async (email) => {
// 	const { data } = await Api.get(`/users?email=${email}`);
// 	return data;
// };

export const logginApi = async (userToLogin) => {
	// NO ANDA NI ACA NI EN POSTMAN
	try {
		console.log("en service el login paciente llega ", userToLogin);
		const { data } = await Api.post(`/pacients/login`, userToLogin);
		console.log("desde el service Paciente la data es :", data);
		return data;
	} catch (err) {
		console.log("errors en login de pacientes Service: ", err);
	}
};

export const getOneDoctor = async (doctorToLogin) => {
	// Funciona en postman y aca. Problema password de los neuvos xq devuelve hash
	try {
		const { data } = await Api.get(`/doctors/?email=${doctorToLogin.email}`);
		console.log("desde el service la data es :", data);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

// export const getOneAdmin = async (email) => {
// 	const { data } = await Api.get(`/admin?email=${email}`);
// 	return data;
// };

// con un id, que es string => Borra el user, doctor o admin====================

export const deleteUser = async (id) => {
	await Api.delete(`/pacients/${id}`);
};
export const deleteDoctor = async (id) => {
	await Api.delete(`/doctors/${id}`);
};
export const deleteAdmin = async (id) => {
	await Api.delete(`/admin/${id}`);
};

// Recibe un item, y en base al id, lo reenvia para edit ================
export const updateUser = async (item) => {
	// Funciona en postman asi
	try {
		console.log("el paciente a editar entero en el service :", item);
		await Api.put(`/pacients/${item.id}`, item);
	} catch (err) {
		console.log("errors en : ", err);
	}
};

export const updateDoctor = async (item) => {
	// Funciona en postman Asi
	// rebotaba el socialSecurity y el registrarion number. Probe con ponerlos en null y el social paso bien.
	try {
		console.log("el Doctor a editar entero en el service :", item);
		const response = await Api.put(`/doctors/`, item);
		console.log(response);
	} catch (err) {
		console.log("errors en : ", err);
	}
};

// export const updateAdmin = async (item) => {
// 	await Api.put(`/admin/${item.id}`, item);
// };

// RUTAS REVIEW   =======================================================
// devuelve todas
export const fetchReviews = async () => {
	try {
		const { data } = await Api.get(`/reviews`);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

// crea una review
export const addReviews = async (review) => {
	try {
		console.log("reviews desde el service :", review);
		await Api.post("/reviews/", review);
	} catch (err) {
		console.log("errors en : ", err);
	}
};
// trae solo una
//CONSULTAR CON BACKEDN
// export const getOneUser = async (email) => {
// 	const { data } = await Api.get(`/users?email=${email}`);
// 	return data;
// };

// borra review
export const deleteReview = async (id) => {
	await Api.delete(`/reviews/${id}`);
};

// edita review
export const updateReview = async (item) => {
	await Api.put(`/reviews/${item._id}`, item);
};

//Rutas apointment
export const fetchAppoinment = async () => {
	try {
		const { data } = await Api.get(`/appoinment`);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

/// Rutas Video Call

export const createRoom = async (roomName) => {
	try {
		console.log(roomName);
		const { data } = await Api.post("/createRoom", { roomName: roomName });
		console.log("respuesta de la room :", data);
		return data.room.uniqueName;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

export const createToken = async (identity, room) => {
	try {
		console.log(identity, room);
		const { data } = await Api.post("/tokenB", {
			identity: identity,
			room: room,
		});
		// console.log("data del post token es :", data);
		return data;
	} catch (err) {
		console.log("errors en : ", err);
	}
};

export const getToken = async (roomData) => {
	try {
		const { data } = await Api.get(`/tokenB/?room=${roomData}`);
		console.log("data del get token es :", data);
	} catch (err) {
		console.log("errors en : ", err);
	}
};
