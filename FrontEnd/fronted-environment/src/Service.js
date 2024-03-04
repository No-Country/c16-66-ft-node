import axios from "redaxios";

export const Api = axios.create({
	// baseURL: "http:///localhost:3000/",
	baseURL: "https://c16-66-ft-node.onrender.com",
});

// Devuelve Todo lo que haya en cada endPoint =========================

export const fetchUsers = async () => {
	const { data } = await Api.get(`/pacients`);

	return data;
};
export const fetchDoctors = async () => {
	const { data } = await Api.get(`/doctors`);

	return data;
};

export const fetchAdmin = async () => {
	const { data } = await Api.get(`/admin`);
	return data;
};

// Crean user, doctor y admin ======================================
export const addUser = async (user) => {
	await Api.post("/pacients/signup", user);
};

export const userLogout = async () => {
	// PARA DESLOGEAR DE LA DB A USUARIOS
	const response = await Api.get("/pacients/logout");
	console.log("logout Responde :", response);
};

export const addDoctorService = async (newDoctor) => {
	console.log("en el service new doctor :", newDoctor);
	await Api.post("/doctors/signup", newDoctor); // anda con el signup
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
	console.log("en el service", userToLogin);
	const { data } = await Api.post(`/pacients/login`, userToLogin);
	console.log("desde el service Paciente la data es :", data);
	return data;
};

export const getOneDoctor = async (doctorToLogin) => {
	// Ver si mati lo cambia
	const { data } = await Api.get(`/doctors/?email=${doctorToLogin.email}`);
	console.log("desde el service la data es :", data);
	return data;
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
	console.log("el paciente a editar entero en el service :", item);
	await Api.put(`/pacients/${item.id}`, item); // Funciono desde la pp y postman
};
export const updateDoctor = async (item) => {
	// rebotaba el socialSecurity y el registrarion number. Probe con ponerlos en null y el social paso bien.
	console.log("el Doctor a editar entero en el service :", item);
	const response = await Api.put(`/doctors/`, item);
	console.log(response);
};
// export const updateAdmin = async (item) => {
// 	await Api.put(`/admin/${item.id}`, item);
// };

// RUTAS REVIEW   =======================================================
// devuelve todas
export const fetchReviews = async () => {
	const { data } = await Api.get(`/reviews`);
	return data;
};

// crea una review
export const addReviews = async (review) => {
	console.log("reviews desde el service :", review);
	await Api.post("/reviews/", review);
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
export const updatReview = async (item) => {
	await Api.put(`/reviews/${item._id}`, item);
};

//Rutas apointment
export const fetchAppoinment = async () => {
	const { data } = await Api.get(`/appoinment`);
	return data;
};
