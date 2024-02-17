import { create } from "zustand";

export const UserStore = create((set, get) => ({
	users: [],
	addUser: (newUser) => {
		// traigo el users que hay en el state
		const { users } = get();
		let usersCopy;
		const isArray = Array.isArray(newUser);
		// Dependiendo si renderiza por primera vez recibe [] o solo agrega un usurario, recibe {}
		isArray ? (usersCopy = [...users, newUser]) : (usersCopy = [newUser]);
		set(() => ({ users: usersCopy }));
	},
	resetUser: () => {
		set(() => ({ users: [] }));
	},
}));
