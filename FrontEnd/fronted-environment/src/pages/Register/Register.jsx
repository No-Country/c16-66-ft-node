/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "../../hooks/userUserStore";
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { useParams, useNavigate } from "react-router-dom";
import {
	Button,
	Box,
	Grid,
	// Link as LinkMui,
	TextField,
	Typography,
	alpha,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import background from "../../assets/AuthBG/RBackground.png";
import logo from "../../assets/FakeLOGO/Logo 3.png";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
	palette: {
		darckBlue: createColor("#115E86"),
	},
});

export default function RegisterAdmin() {
	const [dbErrors, setDbErros] = useState("");
	const params = useParams();

	const navigate = useNavigate();
	const { addUserFromRegister } = useUserStore();
	const { addDoctorFromRegister } = useDoctorStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmitRegister = async (userToRegister) => {
		event.preventDefault();
		const fullName = userToRegister.name.split(" ");
		const lastName = fullName.pop();
		const onlyName = fullName.join(" ");
		(userToRegister.name = onlyName), (userToRegister.lastname = lastName);
		if (userToRegister.email.includes(".net")) {
			setDbErros("La aplicacion no permite correos con el dominio '.net'");
			return;
		} //segun params, ver a que service pegarle
		params.types == "pacient"
			? await addUserFromRegister(userToRegister)
			: params.types == "doctor" &&
			  (await addDoctorFromRegister(userToRegister));

		setDbErros("");
		params.types == "pacient" && navigate("/login/pacient");
		params.types == "doctor" && navigate("/login/doctor");
		// }
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{
					minHeight: "100vh",
					backgroundImage: { xs: "", sm: `url(${background})` },
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					flexWrap: "wrap",
				}}
			>
				<Grid
					item
					xs={3}
					sx={{
						width: { xs: 328, sm: 500},
						minHeight: { xs: 528 },
						backgroundColor: alpha("#ffffff", 0.8),
						padding: 3,
						borderRadius: 6,
						boxShadow: 3,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Grid
						item
						sx={{
					
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Box component='img' alt='Logo' src={logo}  />
					</Grid>

					<Typography
						sx={{
							mb: { xs: 1},
							fontSize: 20,
							display: "flex",
							justifyContent: "center",
							typography: "subtitle",
							fontWeight: "bold",
						}}
					>
						Crea tu cuenta
					</Typography>
					<Typography
						sx={{
				
							fontSize: { xs: 13 },
							display: "flex",
							justifyContent: "center",
							fontWeight: "regular",
						}}
					>
						Por favor, ingresa los datos requeridos
					</Typography>

					<form
						aria-label='submit-form'
						onSubmit={handleSubmit(onSubmitRegister)}
						className='animate__animated animate__fadeIn animate__faster '
					>
						<Grid container>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 16,
									color: "#115E86",
									mt: { xs: 2 },
								}}
							>
								Nombre y apellido
							</Typography>

							<Grid item xs={12}>
								<TextField
									label='Ingresa tu nombre y apellido'
									placeholder='Juan Perez'
									fullWidth
									name='name'
									size="small"
									InputProps={{
										style: {
											borderRadius:"10px",
										}
									}}
									{...register("name", {
										required: {
											value: true,
											message: "Debes completar el campo",
										},
										minLength: {
											value: 6,
											message:
												"El nombre no debe contener menos de 6 caracteres",
										},
									})}
								/>
								{errors.name && (
									<span
										className='pl-2 pt-2 flex text-xs font-bold text-red-700'
										style={{ color: "red" }}
									>
										{errors.name.message}
									</span>
								)}
							</Grid>

							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 16,
									color: "#115E86",
									mt: { xs: 2 },
								}}
							>
								Email
							</Typography>

							<Grid item xs={12}>
								<TextField
									label='Ingresa tu email'
									type='email'
									placeholder='something@something.com'
									fullWidth
									name='email'
									size="small"
									InputProps={{
										style: {
											borderRadius:"10px",
										}
									}}
									{...register("email", {
										required: {
											value: true,
											message: "Debes escribir tu correo electronico",
										},
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: "El email debe ser valido",
										},
									})}
								/>
								{errors.email && (
									<span
										className='pl-2 pt-2 flex text-xs font-bold text-red-700'
										style={{ color: "red" }}
									>
										{errors.email.message}
									</span>
								)}
							</Grid>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 16,
									color: "#115E86",
									mt: { xs: 2 },
								}}
							>
								Contraseña
							</Typography>
							<Grid item xs={12}>
								<TextField
									label='Ingresa tu contraseña'
									type='password'
									placeholder='contraseña'
									fullWidth
									name='password'
									size="small"
									InputProps={{
										style: {
											borderRadius:"10px",
										}
									}}
									
									{...register("password", {
										required: {
											value: true,
											message: "Debes completar el campo",
										},
										minLength: {
											value: 6,
											message:
												"La contraseña debe contener al menos 6 caracteres",
										},
									})}
								/>
								{errors.password && (
									<span
										className='pl-2 pt-2 flex text-xs font-bold text-red-700'
										style={{ color: "red" }}
									>
										{errors.password.message}
									</span>
								)}
							</Grid>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 16,
									color: "#115E86",
									mt: { xs: 2 },
								}}
							>
								Numero de DNI
							</Typography>
							<Grid item xs={12} sx={{ mb: { xs: 3 } }}>
								<TextField
									label='Ingresa tu número de DNI'
									type='text'
									placeholder='123456'
									fullWidth
									name='dni'
									size="small"
									InputProps={{
										style: {
											borderRadius:"10px",
										}
									}}
									{...register("dni", {
										required: {
											value: true,
											message: "Debes completar el campo",
										},
										minLength: {
											value: 8,
											message: "El dni no debe contener menos de 8 caracteres",
										},
									})}
								/>
								{errors.dni && (
									<span
										className='pl-2 pt-2 flex text-xs font-bold text-red-700'
										style={{ color: "red" }}
									>
										{errors.dni.message}
									</span>
								)}
							</Grid>
							{dbErrors && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{dbErrors}
								</span>
							)}
							<Grid container spacing={2} sx={{ mt: 0.5, mb: 2 }}>
								<Grid item xs={12} sx={{ color: "#115E86" }}>
									<Button
										type='submit'
										color='darckBlue'
										variant='contained'
										sx={{
											textTransform: "capitalize",
											fontSize: { xs: 16, sm: 20 },
											borderRadius: 3
										}}
										fullWidth
									>
										Registrarme
									</Button>
								</Grid>
							</Grid>
							<Grid
								container
								sx={{ flexDirection: "row", justifyContent: "space-around" }}
							>
								<Typography sx={{ fontSize: { xs: 13, sm: 16 }, mt: 2 }}>
									¿Ya tenés una cuenta?
								</Typography>
								{
									<span
										to={`/login/${params.types}`}
										style={{
											fontWeight: "bold",
											fontSize: { xs: 13, sm: 16 },
											color: "#115E86",
											mt: 2,
										}}
										className='mt-4'
									>
										Inicia Sesion
									</span>

									// acomodar con las rutas adecuadas
									/* <Link component={RouterLink} color="inherit" to="/auth/register">
       crear una cuenta
     </Link> */
								}
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
