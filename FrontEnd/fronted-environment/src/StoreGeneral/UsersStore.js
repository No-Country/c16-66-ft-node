import { create } from "zustand";
import { persist } from "zustand/middleware";

const { state } = JSON.parse(localStorage.getItem("medConnectUpacientInfo"));
console.log("en storage");
console.log(state);

export const UserStore = create(
	persist(
		(set, get) => ({
			// users: state.users ? state.users : [],
			// userLogged: state.userLogged ? state.userLogged : null,
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
			resetUser: () => {
				set(() => ({ users: [] }));
			},
		}),
		{ name: "medConnectUpacientInfo" }
	)
);
