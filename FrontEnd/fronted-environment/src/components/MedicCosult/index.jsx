/* eslint-disable react/prop-types */

import FakePacient1 from "../../assets/imgFakePacient/FakePacient1.png";
import folderIcon from "../../assets/svg/folder_shared.svg";
import starIcon from "../../assets/svg/StarBgBlue.svg";

// eslint-disable-next-line react/prop-types
export function MedicConsult({ user }) {
	const doctorLogged = user.specialty ? user : {};

	return (
		<>
			{doctorLogged && (
				<>
					<article className='w-full h-fit my-2 p-2 flex align-middle gap-2 rounded-2xl  bg-white hover:bg-mostLighthBlue '>
						<figure className='w-20 h-12 m-auto rounded-full overflow-hidden overflow-x-hidden'>
							{/* Cambiar imagen por la que venga de db */}
							<img
								className='object-cover object-center '
								src={FakePacient1}
								alt={`Imagen de Perfil del paciente ${user?.name}`}
							/>
						</figure>
						{user.specialty == undefined ? (
							<article className='w-4/6 flex flex-col gap-2 items-start truncate'>
								<h3 className='text-black text-ellipsis font-medium text-base'>
									{user?.name}
								</h3>
								<p>Edad : 28 </p>
							</article>
						) : (
							<article className='w-full pt-1 flex-col'>
								<h3 className=' text-black font-semibold text-base'>
									{" "}
									{user.name}{" "}
								</h3>
								<h5 className=' font-normal text-xs text-gray'>
									{" "}
									{user.specialty} | Matrícula N°: {user.registrationNumber}
								</h5>
							</article>
						)}
					</article>
					{/* Seccion de Informacion de Doctro, o de Turno de paciente. depende quien esta loggeado */}
					{doctorLogged.specialty ? (
						<section className='w-full max-h-96 flex flex-col items-start gap-4 overflow-scroll '>
							<article className='w-full h-fit flex flex-col  gap-4 items-start'>
								<div className='w-full flex justify-start'>
									<img src={folderIcon} alt='Icono de archivo' />
									<h3 className='ml-4 text-black font-medium text-base'>
										Experiencia Laboral
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
										Dignissimos magnam quia vitae error in? Sequi soluta
										inventore rem et eos voluptate! lorem
									</p>
								</div>
							</article>

							<article className='w-full h-fit flex flex-col gap-2 items-start '>
								<div>
									<h3 className='text-black font- text-base'>
										Úiltima revisión
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										<strong className='text-black font- text-base'>
											Dr. Garcia
										</strong>
										<br />
										10-Noviembre-2023 9:45hs
									</p>
								</div>
							</article>
							<article className='w-full h-fit flex flex-col gap-2 items-start '>
								<div>
									<h3 className='text-black font-medium text-base'>
										Observación
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
										Dignissimos magnam quia vitae error in? Sequi soluta
										inventore rem et eos voluptate! lorem
									</p>
								</div>
							</article>
							<article className='w-full h-fit flex flex-col gap-2 items-start'>
								<div>
									<h3 className='text-black font-medium text-base'>
										Prescripcíon
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
									</p>
								</div>
							</article>
							{/* Seccion de botones abajo  */}
							<div className='w-full h-20 flex justify-around'>
								<div className='w-6/12 h-11/12 m-auto mr-1 border-2 flex flex-col  justify-center border-darkBlue rounded-2xl py-1 px-2  shadow-sm bg-whiteOpacity hover:cursor-pointer'>
									<p className='w-fit h-fit m-auto font-semibold text-black'>
										{" "}
										Consultas
									</p>
									<strong className='w-fit h-fit m-auto text-darkBlue'>
										3.216
									</strong>
								</div>
								<div className='w-6/12 h-11/12 m-auto ml-1 border-2 flex flex-col justify-center  border-darkBlue rounded-2xl py-1 px-2 shadow-sm bg-whiteOpacity hover:cursor-pointer'>
									{" "}
									<p className=' h-fit m-auto font-semibold text-black'>
										Calificación
									</p>
									<div className='flex justify-center'>
										<strong className='w-fit h-fit mr-1 text-darkBlue'>
											4.8{" "}
										</strong>
										<img
											src={starIcon}
											alt='Icono de una estrella'
											className=' w-4 mt-0.5'
										/>
									</div>
								</div>
							</div>
						</section>
					) : (
						<section className='w-full max-h-96 flex flex-col items-start gap-4 overflow-scroll '>
							<article className='w-full h-fit flex flex-col  gap-2 items-start'>
								<div>
									<h3 className='text-black font-medium text-base'>Sintomas</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
										Dignissimos magnam quia vitae error in? Sequi soluta
										inventore rem et eos voluptate! lorem
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
									<h3 className='text-black font-medium text-base'>
										Observación
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
										Dignissimos magnam quia vitae error in? Sequi soluta
										inventore rem et eos voluptate! lorem
									</p>
								</div>
							</article>
							<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start'>
								<div>
									<h3 className='text-black font-medium text-base'>
										Prescripcíon
									</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
									</p>
								</div>
							</article>
							<article className='w-full h-fit flex flex-col xl:flex-row gap-4 items-start '>
								<div>
									<h3 className='text-black font-medium text-base'>Sintomas</h3>
								</div>
								<div className='w-full'>
									<p className=' text-gray text-justify, text-sm font-normal '>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Labore optio quia veritatis, dolore debitis beatae ad sit!
										Dignissimos magnam quia vitae error in? Sequi soluta
										inventore rem et eos voluptate! lorem
									</p>
								</div>
							</article>
						</section>
					)}
				</>
			)}
		</>
	);
}
