/* eslint-disable react/prop-types */
import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";
const nowInMs = Date.now();
let today = new Date(nowInMs).toLocaleString().split(" ");
today = today[0];

export function CardPacientItem({ user, handlerSelect }) {
	console.log(user);
	return (
		<div
			className=' w-11/12 h-3/5 mb-4 py-2 px-4 flex align-middle gap-4 rounded-2xl  bg-white hover:bg-mostLighthBlue flex-wrap lg:flex-nowrap'
			onClick={() => handlerSelect(user?.id)}
		>
			<figure className='w-12 h-12 rounded-full overflow-hidden'>
				{/* Cambiar imagen por la que venga de db */}
				<img
					className='object-cover object-center'
					src={FakePacient1}
					alt={`Imagen de Perfil del paciente ${user?.name}`}
				/>
			</figure>
			<article
				// style={{ width: "135px" }}
				className='w-3/6 h- flex flex-col gap-2 items-start truncate'
			>
				<h3 className='text-black text-ellipsis font-medium text-base'>
					{user?.name}
				</h3>
				<p className='text-gray text-sm font-normal'>
					{today}
					{/* Cambiar today por fecha del turno */}
				</p>
			</article>

			<article className='w-4/6 lg:w-3/6 h-full flex py-2 px-4 align-middle gap-4 rounded-2xl'>
				<div
					// style={{ width: "78px" }}
					className='w-fit lg:w-full h-full bg-lightBlue flex py-1 px-1 gap-2.5 justify-center rounded-lg'
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
