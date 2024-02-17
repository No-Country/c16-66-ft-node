import axios from "axios";

export const Api = axios.create({
	baseURL: "http:///localhost:3000/",
});

// Devuelve Todo lo que haya en cada endPoint

export const fetchUsers = async () => {
	const { data } = await Api.get(`/users`);
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

// Crean user, doctor y admin
export const addUser = async (user) => {
	await Api.post("/users/", user);
};

export const addDoctor = async (doctor) => {
	await Api.post("/doctors/", doctor);
};

export const addAdmin = async (admin) => {
	await Api.post("/admin/", admin);
};
// Solo trae uno con un id que es String
export const getOneUser = async (id) => {
	const { data } = await Api.get(`/users/${id}`);
	return data;
};
export const getOneDoctor = async (id) => {
	const { data } = await Api.get(`/doctors/${id}`);
	return data;
};

export const getOneAdmin = async (id) => {
	const { data } = await Api.get(`/admin/${id}`);
	return data;
};

// con un id, que es string => Borra el user, doctor o admin

export const deleteUser = async (id) => {
	await Api.delete(`/users/${id}`);
};
export const deleteDoctor = async (id) => {
	await Api.delete(`/doctors/${id}`);
};
export const deleteAdmin = async (id) => {
	await Api.delete(`/admin/${id}`);
};

// Recibe un item, y en base al id, lo reenvia para edit.
export const updatUser = async (item) => {
	await Api.put(`/users/${item._id}`, item);
};
export const updateDoctor = async (item) => {
	await Api.put(`/doctors/${item._id}`, item);
};
export const updateAdmin = async (item) => {
	await Api.put(`/admin/${item._id}`, item);
};
