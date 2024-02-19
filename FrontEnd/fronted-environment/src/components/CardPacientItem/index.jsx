import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";
const nowInMs = Date.now();
let today = new Date(nowInMs).toLocaleString().split(" ");
today = today[0];
console.log(today);

export function CardPacientItem(user) {
	return (
		<div
			style={{
				width: "327px",
				height: "66px",
			}}
			className='mb-4 py-2 px-4 flex align-middle gap-4 rounded-2xl  bg-white hover:bg-mostLighthBlue'
		>
			<figure className='w-12 h-12 rounded-full overflow-hidden'>
				{/* Cambiar imagen por la que venga de db */}
				<img
					className='object-cover object-center'
					src={FakePacient1}
					alt={`Imagen de Perfil del paciente ${user.name}`}
				/>
			</figure>
			<article
				style={{ width: "135px" }}
				className=' h-44 flex flex-col gap-2 items-start truncate'
			>
				<h3 className='text-black text-ellipsis font-medium text-base'>
					{user.name}
				</h3>
				<p className='text-gray text-sm font-normal'>
					{today}
					{/* Cambiar today por fecha del turno */}
				</p>
			</article>

			<article className='flex py-2 px-4 align-middle gap-4 rounded-2xl'>
				<div
					style={{ width: "78px" }}
					className=' bg-lightBlue h-7 flex py-1 px-1 gap-2.5 justify-center rounded-lg'
				>
					<p
						style={{
							fontFamily: "Roboto",
							letterSpacing: " 0.1px",
							fontSize: "16px",
						}}
						className=' text-darkBlue text-center font-medium'
					>
						10:00 AM
						{/* Cambiar por horario del turno */}
					</p>
				</div>
			</article>
		</div>
	);
}
