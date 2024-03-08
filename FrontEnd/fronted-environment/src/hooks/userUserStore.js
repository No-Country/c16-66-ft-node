import {
	fetchUsers, // getOneUser,
	updateUser,
	addUser as addUserService,
	logginApi,
	// isSessionActive,
} from "../Service";
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser, addUserLogged, userLogged } = UserStore();

	const getUserApiResponse = async () => {
		const userApiResponse = await fetchUsers();
		await addUser(userApiResponse);
	};

	const validationUserToLogin = async (userToLogin) => {
		const userApiResponse = await logginApi(userToLogin);

		// const session = await isSessionActive();
		// console.log("llega la secion al user hook:", session);
		return userApiResponse;
	};

	const addUserFromRegister = async (newUser) => {
		// const userApiResponse =
		await addUserService(newUser);

		// await addUserLogged(userApiResponse);
		// return userApiResponse; no devuelve nada
	};

	const editUserWithNewDate = async (newData) => {
		const {
			image,
			name,
			dni,
			cuil,
			// licensenumber,numero de socio hay que pedir
			socialSecurity,
			planSocialSecurity,
			lastname,
			birthdate,
			tel,
			email,
			password,
			country,
			province,
			adress,
		} = newData;

		const updatedData = {
			...userLogged,
			image,
			name,
			dni,
			cuil,
			socialSecurity,
			planSocialSecurity,
			lastname,
			birthdate,
			tel,
			email,
			password,
			country,
			province,
			adress,
		};
		console.log("edited doc :", updatedData);

		console.log("lo qie vino ", newData);
		updateUser(updatedData); // Cuando tenga como editar en el service, habilitar

		// console.log("en hook");
		// console.log(newData);
		addUserLogged(updatedData);
		// await updateUser(newData);
	};

	return {
		getUserApiResponse,
		validationUserToLogin,
		addUserFromRegister,
		editUserWithNewDate,
	};
}
