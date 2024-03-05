import {
	fetchUsers, // getOneUser,
	updateUser,
	addUser as addUserService,
	logginApi,
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
		console.log("Respuesta:", userApiResponse);
		return userApiResponse;
	};

	const addUserFromRegister = async (newUser) => {
		console.log("desde el add hook");
		console.log(newUser);
		const userApiResponse = await addUserService(newUser);

		console.log(userApiResponse);
		//await addUserLogged(userApiResponse);
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
