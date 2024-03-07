/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
// Componente para modal ===============================mas largo
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import starIcon from "../../assets/svg/StarBgBlue.svg";
import defaultImg from "../../assets/imgFakePacient/userDefualtImg.png";
import { Avatar } from "@mui/material";
import { toast } from "sonner";
// estados
import { UserStore } from "../../StoreGeneral/UsersStore";
import { ReviewStore } from "../../StoreGeneral/ReviewsStore";
import { useReviewsStore } from "../../hooks/useReviews";

export function MedicConsultModal({ user }) {
	const { reviews } = ReviewStore();
	const { createNewReview } = useReviewsStore();
	const [doctroReviews, setDoctorReviews] = useState([]);
	const { userLogged } = UserStore();
	const [reviewForm, setReviewForm] = useState(false);
	const doctorLogged = user.specialty ? user : {}; // puede ser doctor o paciente
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		// formState: { isDirty },
	} = useForm();

	const openReviewForm = () => {
		setReviewForm(!reviewForm);
	};

	const onSubmitEdit = (newData) => {
		event.preventDefault();
		newData = {
			...newData,
			pacientId: userLogged.id,
			doctorId: user.doctorId,
		};

		createNewReview(newData);
		toast.success("Opinion guardad con exito");
		reset();
		setReviewForm(!reviewForm);
	};

	const abortReview = () => {
		reset();
		openReviewForm();
	};

	useEffect(() => {
		const doctorsReviewsFilterd = reviews.filter(
			(item) => item.doctorId == user.doctorId
		);
		setDoctorReviews(doctorsReviewsFilterd);
	}, [user]);

	//console.log("reviews desde el modal :", doctroReviews);

	return (
		<>
			{doctorLogged && (
				<>
					<article className=' w-full h-fit my-2 py-2 flex align-middle gap-2 rounded-2xl  bg-white hover:bg-mostLighthBlue overflow-x-hidden box-content'>
						<figure className='w-20 h-12 m-auto rounded-full overflow-hidden overflow-x-hidden'>
							{/* Cambiar imagen por la que venga de db */}
							<Avatar
								className='object-cover object-center '
								src={user.image ? user.image : defaultImg}
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
									{user.specialty} | Matrícula N°: {user.licensenumber}
								</h5>
							</article>
						)}
					</article>
					{/* Seccion de Informacion de Doctro, o de Turno de paciente. depende quien esta loggeado */}
					{doctorLogged.specialty ? (
						<section className=' w-11/12 overflow-x-auto max-h-96 flex flex-col items-start gap-4 overflow-scroll 2xl:max-h-5/6 2xl:max-w-fit mx-auto '>
							<article className='w-full h-fit flex flex-col  gap-4 items-start'>
								<div className='w-full flex justify-start'>
									<h3 className=' text-black font-medium text-base'>
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
							{/* Seccion de reseñas */}

							<section className='flex-col'>
								<h3 className=' text-black font-medium text-base py-1 mb-1 inline'>
									Reseñas de nuestros pacientes :
								</h3>
								<div
									style={{
										overflowX: "auto",
										whiteSpace: "nowrap",
									}}
									className=' w-96 flex flex-row h-fit mt-2 mb-2'
								>
									{!reviewForm ? (
										<>
											{doctroReviews.length != 0 &&
												doctroReviews.map((review, i) => {
													return (
														<article
															className='  min-w-80 min-h-44  mx-3  flex flex-col px-3  bg-white border-lightGreen border-2 rounded-xl '
															key={i}
														>
															<h3 className='text-black font-medium text-base py-1 mb-1 inline'>
																{user.name} {user.lastname}
															</h3>
															<div className='text-darkBlue pt-2 text-base lg:text-lg xl:text-xl'>
																<Rating
																	name='read-only'
																	value={review.rating}
																	max={5}
																	icon={<Star color='primary' />}
																	emptyIcon={<Star fontSize='inherit' />}
																	readOnly
																/>
															</div>
															<div className='whitespace-normal'>
																<p className=' text-gray flex flex-col text-sm font-normal m-1'>
																	{review.reviewText}
																</p>
															</div>
														</article>
													);
												})}
											<article className='  min-w-80 min-h-44  mx-3  flex flex-col px-3  bg-white border-lightGreen border-2 rounded-xl'>
												<h3 className='text-black font-medium text-base py-1 mb-1 inline'>
													{user.name} {user.lastname}
												</h3>
												<div className='text-darkBlue pt-2 text-base lg:text-lg xl:text-xl'>
													<Rating
														name='read-only'
														value={3}
														max={5}
														icon={<Star color='primary' />}
														emptyIcon={<Star fontSize='inherit' />}
														readOnly
													/>
												</div>
												<div className='whitespace-normal'>
													<p className=' text-gray flex flex-col text-sm font-normal m-1'>
														Te explica con claridad y te genera mucha confianza,
														muy atento a todos los comentarios que le brindas.
													</p>
												</div>
											</article>
											<article className=' min-w-80 min-h-44  mx-3  flex flex-col px-3  bg-white border-lightGreen border-2 rounded-xl '>
												<h3 className='text-black font-medium text-base py-1 mb-1 inline'>
													{user.name} {user.lastname}
												</h3>
												<div className='text-darkBlue pt-2 text-base lg:text-lg xl:text-xl'>
													<Rating
														name='read-only'
														value={4}
														max={5}
														icon={<Star color='primary' />}
														emptyIcon={<Star fontSize='inherit' />}
														readOnly
													/>
												</div>
												<div className='whitespace-normal'>
													<p className=' text-gray flex flex-col text-sm font-normal m-1'>
														Muy amena la consulta, fue una ventaja tener acceso
														a mi historial médico porque de esa manera pudo
														asesorarme mejor..
													</p>
												</div>
											</article>
										</>
									) : (
										<article className='w-11/12	 min-h-44  bg-white rounded-xl flex flex-col px-3 py-3'>
											<h3 className='text-black font-semibold text-base py-1 mb-1'>
												Dejanos tu opinion sobre{" "}
												<strong className='w-fit h-fit m-auto text-darkBlue font-normal'>
													{user.name} {user.lastname}
												</strong>
											</h3>
											<form onSubmit={handleSubmit(onSubmitEdit)}>
												<div className='whitespace-normal w-full flex flex-col gap-1'>
													<div className='full flex justify-center mb-1'>
														<label
															htmlFor='rating'
															className='w-full font-normal text-base text-black'
														>
															Valora tu experiencia del 0 al 5{" "}
															<input
																type='text'
																className='px-1 w-1/3 border border-gray rounded-md'
																{...register("rating", {
																	required: {
																		value: true,
																		message: "Debes completar el campo",
																	},
																	validate: (value) => {
																		const regex = /^[0-5]*$/;
																		const onlyNumbers = regex.test(value);

																		return onlyNumbers
																			? true
																			: "El campo solo admite numeros del 0 al 5.";
																	},
																})}
															/>
														</label>{" "}
													</div>
													{errors.rating && (
														<span
															className='pl-2 pt-2 flex text-xs font-bold text-red-700'
															style={{ color: "red" }}
														>
															{errors.rating.message}
														</span>
													)}

													<textarea
														placeholder='Por favor cuentanos mas '
														autoFocus
														className='h-20 rounded-xl border-gray border-2 px-4 py-2'
														{...register("reviewText", {
															required: {
																value: true,
																message: "Debes completar el campo",
															},
														})}
													/>
													{errors.reviewText && (
														<span
															className='pl-2 pt-2 flex text-xs font-bold text-red-700'
															style={{ color: "red" }}
														>
															{errors.reviewText.message}
														</span>
													)}
												</div>
												<button
													type='submit'
													className='rounded-xl m-1 p-2 bg-green-500 border-2 border-whiteOpacity hover:border-gray hover:text-black'
												>
													Guardar
												</button>
												<button
													type='none'
													className='rounded-xl m-1 p-2 bg-rose-500 border-2 border-whiteOpacity hover:border-gray hover:text-black'
													onClick={() => abortReview()}
												>
													Cancelar
												</button>
											</form>
										</article>
									)}
								</div>
							</section>
							<article className=' h-24 mb-2'>
								<span>Trabaja con las siguientes obras sociales :</span>
								<ul className='m-2 px-4'>
									{doctorLogged.socialSecurity ? (
										doctorLogged.socialSecurity.map((add, i) => {
											return <li key={i}>{add}</li>;
										})
									) : (
										<span>Dato no informado</span>
									)}
								</ul>
							</article>
							{/* Seccion de botones abajo  */}
							<div className='w-full h-20 mt-2 flex justify-around'>
								<div
									className='w-6/12 h-11/12 m-auto mr-1 border-2 flex flex-col justify-center border-darkBlue rounded-2xl py-1 px-2  shadow-sm bg-whiteOpacity hover:cursor-pointer hover:bg-darkBlue hover:text-white'
									onClick={() => openReviewForm()}
								>
									<p className='w-fit h-fit m-auto font-semibold text-black text-xs'>
										{" "}
										Opina sobre :
									</p>
									<strong className='w-fit h-fit m-auto text-xs'>
										{user.name} {user.lastname}
									</strong>
								</div>
								<div className='w-6/12 h-11/12 m-auto ml-1 border-2 flex flex-col justify-center  border-darkBlue rounded-2xl py-1 px-2 shadow-sm bg-whiteOpacity hover:cursor-pointer'>
									{" "}
									<p className=' h-fit m-auto font-semibold text-black text-xs'>
										Calificación
									</p>
									<div className='flex justify-center'>
										<strong className='w-fit h-fit mr-1 text-darkBlue text-xs'>
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
