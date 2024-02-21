import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";

export function MedicConsult(user) {
	console.log(user);

	return (
		<>
			<article className='w-full h-16 my-2 px-4 flex align-middle gap-4 rounded-2xl  bg-white hover:bg-mostLighthBlue'>
				<figure className='w-12 h-12 rounded-full overflow-hidden overflow-x-hidden'>
					{/* Cambiar imagen por la que venga de db */}
					<img
						className='object-cover object-center'
						src={FakePacient1}
						alt={`Imagen de Perfil del paciente ${user?.name}`}
					/>
				</figure>
				<article
					// style={{ width: "135px" }}
					className='w-3/6 h-44 flex flex-col gap-2 items-start truncate'
				>
					{user && (
						<h3 className='text-black text-ellipsis font-medium text-base'>
							{user.user.name}
						</h3>
					)}
				</article>
			</article>
			<section className='w-full max-h-96 flex flex-col items-start gap-4 overflow-scroll '>
				<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start'>
					<div>
						<h3 className='text-black font-medium text-base'>Sintomas</h3>
					</div>
					<div className='w-full'>
						<p className=' text-gray text-justify, text-sm font-normal '>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
							optio quia veritatis, dolore debitis beatae ad sit! Dignissimos
							magnam quia vitae error in? Sequi soluta inventore rem et eos
							voluptate! lorem
						</p>
					</div>
				</article>
				<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start '>
					<div>
						<h3 className='text-black font-medium text-base'>
							Úiltima revisión
						</h3>
					</div>
					<div className='w-full'>
						<p className=' text-gray text-justify, text-sm font-normal '>
							<strong className='text-black font-medium text-base'>
								Dr. Garcia
							</strong>
							<br />
							10-Noviembre-2023 9:45hs
						</p>
					</div>
				</article>
				<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start '>
					<div>
						<h3 className='text-black font-medium text-base'>Observación</h3>
					</div>
					<div className='w-full'>
						<p className=' text-gray text-justify, text-sm font-normal '>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
							optio quia veritatis, dolore debitis beatae ad sit! Dignissimos
							magnam quia vitae error in? Sequi soluta inventore rem et eos
							voluptate! lorem
						</p>
					</div>
				</article>
				<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start'>
					<div>
						<h3 className='text-black font-medium text-base'>Prescripcíon</h3>
					</div>
					<div className='w-full'>
						<p className=' text-gray text-justify, text-sm font-normal '>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
							optio quia veritatis, dolore debitis beatae ad sit!
						</p>
					</div>
				</article>
				<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start '>
					<div>
						<h3 className='text-black font-medium text-base'>Sintomas</h3>
					</div>
					<div className='w-full'>
						<p className=' text-gray text-justify, text-sm font-normal '>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
							optio quia veritatis, dolore debitis beatae ad sit! Dignissimos
							magnam quia vitae error in? Sequi soluta inventore rem et eos
							voluptate! lorem
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
