import {
	Button,
	Box,
	Grid,
	Link as LinkMui,
	TextField,
	Typography,
	alpha,
} from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "../../hooks/useForm";
import background from "../../assets/AuthBG/loginBG.png";
import logo from "../../assets/FakeLOGO/Logo 3.png";

const formData = {
	email: "",
	password: "",
};

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
	palette: {
		anger: createColor("#115E86"),
	},
});

export default function LoginPage() {
	const { email, password, onInputChange } = useForm(formData);

	const onSubmit = (event) => {
		event.preventDefault();

		//    pendiente funcion de manejo de login
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
						onSubmit={onSubmit}
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
									value={email}
									onChange={onInputChange}
								/>

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
									inputProps={{
										"data-testid": "password",
									}}
									value={password}
									onChange={onInputChange}
								/>
							</Grid>
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
									<LinkMui
										to='/auth/register'
										sx={{
											fontWeight: "bold",
											fontSize: { xs: 13, sm: 16 },
											color: "#115E86",
											mt: 2,
										}}
									>
										<Link to='/register'> Crea tu cuenta ahora</Link>
									</LinkMui>

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
