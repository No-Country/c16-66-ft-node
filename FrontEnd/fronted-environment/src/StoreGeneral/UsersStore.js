import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UserStore = create(
	persist(
		(set, get) => ({
			users: [],
			userLogged: null,
			addUser: (newUser) => {
				// traigo el users que hay en el state
				const { users } = get();
				let usersCopy = [...users];
				const isArray = Array.isArray(newUser);
				// Dependiendo si renderiza por primera vez recibe [] o solo agrega un usurario, recibe {}
				!isArray
					? (usersCopy = usersCopy[usersCopy.length] = newUser)
					: (usersCopy = [newUser]);
				set(() => ({ users: usersCopy }));
			},
			addUserLogged: (user) => {
				set(() => ({ userLogged: user }));
			},
			loggOutUser: () => {
				set(() => ({ userLogged: null }));
			},
			resetUser: () => {
				set(() => ({ users: [] }));
			},
		}),
		{ name: "medConnectPacientInfo" }
	)
);
