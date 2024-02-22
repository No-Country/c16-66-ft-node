import logo from "../../assets/FakeLOGO/Logo 3.png";
import Stack from "@mui/material/Stack";
import { LinearProgress, Box } from "@mui/material/";
export default function Loading() {
	return (
		<Stack spacing={2} direction='row'>
			<main className='w-screen h-screen m-auto bg-lightBlue flex-col border-spacing-8 border-white justify-center overflow-hidden'>
				<section className='flex flex-col sm:flex-row justify-center items-center sm:items-end mt-6 mb-2 2/4 sm:h-1/4 xl:mt-60'>
					<div className='w-64 h-64 xl:w-96 xl:h-96 rounded-full bg-lightGreen flex justify-end pr-3 sm:pr-4 pt-8 items-center border-4 border-mostLighthBlue shadow-2xl'>
						{/* <span className='font-bold text-3xl text-center text-black shadow-md border-b-2 border-black'>
							Med
						</span>
						<span className='font-bold text-3xl text-center text-darkBlue shadow-md border-b-2 border-black'>
							Connect
						</span> */}
						<img
							src={logo}
							className=' w-9/12 h-1/4 xl:w-auto xl:h-auto border-b-2 border-gray	'
							alt='Logo de la App'
						/>
					</div>

					<article className='h-1/3 flex flex-col justify-center gap-4 '>
						<h2 className='font-bold text-3xl text-black'>Está Cargando...</h2>
						<h3 className=' font-bold text-xl text-center text-white pr-5	 border-b-2 border-black'>
							Por favor, quedese con nosotros..
						</h3>
					</article>
				</section>
				<Box
					sx={{
						width: "90%",
						color: "#115E86",
						marginTop: "3%",
						marginLeft: "5%",
					}}
				>
					<LinearProgress />
				</Box>
			</main>
		</Stack>
	);
}
