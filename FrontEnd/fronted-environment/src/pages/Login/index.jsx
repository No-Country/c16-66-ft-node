import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import logo from "../../assets/FakeLOGO/Logo 3.png";

import background from "../../assets/AuthBG/loginBG.png";

import { useUserStore } from "../../hooks/userUserStore";
import { useDoctorStore } from "../../hooks/useDoctorStore";
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";

// Estilos de material ui
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
	palette: {
		anger: createColor("#115E86"),
	},
});
// Comienzo del componente
export default function LoginPage() {
	const params = useParams();

	const { addUserLogged } = UserStore();
	const { addDoctorLogged } = DoctorStore();
	const [dbErrors, setDbErros] = useState("");
	const navigate = useNavigate();
	const { validationUserToLogin } = useUserStore();
	const { validationDoctorToLogin } = useDoctorStore();
	// const { email, password, onInputChange } = useForm(formData);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmitLoggin = async (userToLogin) => {
		event.preventDefault();
		let response;
		if (userToLogin.email.includes(".net")) {
			setDbErros("La aplicacion no permite correos con el dominio '.net'");
			return;
		} //segun params, ver a que service pegarle
		params.types == "pacient"
			? (response = await validationUserToLogin(userToLogin.email))
			: (response = await validationDoctorToLogin(userToLogin.email));

		response == undefined &&
			setDbErros("No se encontro el email en la Base de datos");
		if (response.password != userToLogin.password) {
			setDbErros(
				"La contraseña no coincide con la guardada en la base de datos.	"
			);
			return;
		} else {
			params.types == "pacient" && addUserLogged(response);
			params.types == "doctor" && addDoctorLogged(response);
			setDbErros("");
			navigate("/home");
		}
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
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					flexWrap: "wrap",
				}}
			>
				<Grid
					item
					xs={3}
					sx={{
						width: { xs: 328, sm: 550, lg: 725 },
						minHeight: { xs: 528, sm: 900 },
						backgroundColor: alpha("#ffffff", 0.8),
						padding: 3,
						borderRadius: 4,
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
							justifyContent: "space-evenly",
							mb: { xs: 3, sm: 5 },
						}}
					>
						<Box component='img' alt='Logo' src={logo} />
					</Grid>

					<Typography
						sx={{
							mb: { xs: 1, sm: 2 },
							fontSize: 25,
							display: "flex",
							justifyContent: "center",
							typography: "subtitle",
							fontWeight: "bold",
						}}
					>
						Bienvenido
					</Typography>
					<Typography
						sx={{
							mb: 1,
							fontSize: { xs: 16, sm: 20 },
							display: "flex",
							justifyContent: "center",
							fontWeight: "regular",
						}}
					>
						Por favor, ingresa los datos requeridos
					</Typography>

					<form
						aria-label='submit-form'
						onSubmit={handleSubmit(onSubmitLoggin)}
						className='animate__animated animate__fadeIn animate__faster '
					>
						<Grid container>
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 20,
									color: "#115E86",
									mt: { xs: 4 },
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
									//abajo logica del react-hook-fomr
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
								<Typography
									sx={{
										fontWeight: "bold",
										fontSize: 20,
										color: "#115E86",
										mt: { xs: 3 },
									}}
								>
									Contraseña
								</Typography>
							</Grid>
							<Grid item xs={12} sx={{ mb: { xs: 3 } }}>
								<TextField
									label='Ingresa tu contraseña'
									type='password'
									placeholder='contraseña'
									fullWidth
									name='password'
									//abajo logica del react-hook-fomr
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
							{dbErrors && (
								<span
									className='pl-2 pt-2 flex text-xs font-bold text-red-700'
									style={{ color: "red" }}
								>
									{dbErrors}
								</span>
							)}
							{/*  // pendiente pop up para manejo de errores
   <Grid container
   display={!!errorMessage ? "": "none"}
   sx={{mt:1}}
   >
   <Grid 
   item
    xs={12}
    >
      <Alert severity="error">{errorMessage}</Alert>
     </Grid>
   </Grid> */}

							<Grid container spacing={2} sx={{ mt: 0.5, mb: 2 }}>
								<Grid item xs={12} sx={{ color: "#115E86" }}>
									<Button
										//   campo para bloquear boton durante el proceso de logueo
										// disabled ={isAuthenticating}
										type='submit'
										color='anger'
										variant='contained'
										sx={{
											textTransform: "capitalize",
											fontSize: { xs: 16, sm: 20 },
										}}
										fullWidth
									>
										Iniciar Sesión
									</Button>
								</Grid>
							</Grid>
							<Grid
								container
								sx={{ flexDirection: "row", justifyContent: "space-around" }}
							>
								<Typography sx={{ fontSize: { xs: 13, sm: 16 }, mt: 2 }}>
									¿No tenés una cuenta?
								</Typography>
								{
									<span
										to={`/register/${params.types}`}
										style={{
											fontWeight: "bold",
											fontSize: { xs: 13, sm: 16 },
											color: "#115E86",
											mt: 2,
										}}
										className='mt-4'
									>
										<Link to={`/register/${params.types}`}>
											{" "}
											Crea tu cuenta ahora
										</Link>
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
