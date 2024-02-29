import {
	fetchUsers,
	// getOneUser,
	addUser as addUserService,
	logginApi,
} from "../Service"; //updateUser,
import { UserStore } from "../StoreGeneral/UsersStore";
export function useUserStore() {
	const { addUser, addUserLogged, userLogged } = UserStore();

	const getUserApiResponse = async () => {
		const userApiResponse = await fetchUsers();
		await addUser(userApiResponse);
	};

	const validationUserToLogin = async (userToLogin) => {
		// const { email, password } = userToLogin;
		// const userApiResponse = await getOneUser(email);
		const userApiResponse = await logginApi(userToLogin);
		// await addUserLogged(userApiResponse[0]);
		console.log("Respuesta:", userApiResponse);
		return userApiResponse;
	};

	const addUserFromRegister = async (newUser) => {
		console.log("desde el add hook");
		console.log(newUser);
		const userApiResponse = await addUserService(newUser);

		console.log(userApiResponse);
		// await addUserLogged(userApiResponse[0]);
		// return userApiResponse[0];
	};

	const editUserWithNewDate = async (newData) => {
		//poner async
		const {
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
			specialty,
		} = newData;

		const updatedData = {
			...userLogged,
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
			specialty,
		};
		console.log("edited doc :", updatedData);

		console.log("lo qie vino ", newData);
		// await updateDoctor(newData); // Cuando tenga como editar en el service, habilitar

		// console.log("en hook");
		// console.log(newData);
		await addUserLogged(updatedData);
		// await updateUser(newData);
	};

	return {
		getUserApiResponse,
		validationUserToLogin,
		addUserFromRegister,
		editUserWithNewDate,
	};
}
