export function PerfilForm() {
	return (
		<section
			style={{ maxWidth: "720px", maxHeight: "700px" }}
			className='overflow-scroll sm:w-5/12 lg:w-11/12 flex flex-col bg-slate-100 border-2 shadow-xl rounded-2xl border-gray p-8'
		>
			{" "}
			<div className='flex-col mb-1'>
				<h3 className='text-lg font-medium lg:text-2xl text-black'>
					Mis Datos Personales
				</h3>
				<p className='text-gray text-lg font-normal'>
					<span className='text-red'>*</span> Campo obligatorio
				</p>
			</div>
			<form>
				<article className='flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Nombre <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue  '
						>
							Apellidos <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
				</article>
				<article className='flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Fecha de nacimiento <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue  '
						>
							DNI <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
				</article>
				<article className=' flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Teléfono <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue  '
						>
							Cuil <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
				</article>
				<article className=' flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Email
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
							disabled
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Contraseña
						</label>
						<input
							type='password'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
							disabled
						/>
					</div>
				</article>
				<div className='flex-col mt-3'>
					<h3 className=' font-medium text-2xl text-black'>Direccíon</h3>
					<p className='text-gray text-lg font-normal'>
						<span className='text-red'>*</span> Campo obligatorio
					</p>
				</div>
				<article className=' flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							País <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue  '
						>
							Provincia <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
				</article>
				<article className=' flex flex-col lg:flex-row justify-around gap-2'>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='name'
							className='ml-2  font-semibold text-base text-darkBlue '
						>
							Dirección <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
					<div className='w-11/12 lg:w-2/5 ml-2 pt-2'>
						<label
							htmlFor='lastNAme'
							className='ml-2  font-semibold text-base text-darkBlue  '
						>
							Localidad y Código Postal <span className='text-red'>*</span>
						</label>
						<input
							type='text'
							className='w-full py-1 border border-darkBlue rounded-xl bg-lightGray mt-1'
						/>
					</div>
				</article>
				<article className='flex justify-around lg:justify-center lg:gap-20 mt-4'>
					<div
						type='submit'
						className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 border-darckBlue rounded-xl flex justify-center bg-darkBlue hover:bg-green-800 text-white hover:border-darkBlue  hover:text-mostLighthBlue hover:cursor-pointer'
					>
						Guardar
					</div>
					<div
						type='submit'
						className='w-1/3 md:w-1/3 py-3 sm:text-sm md:text-lg sm:font-semibold md:font-bold px-4 border-2 rounded-xl  border-red flex justify-center bg-white text-red hover:bg-red hover:text-white	 hover:cursor-pointer'
					>
						{" "}
						Cancelar
					</div>
				</article>
			</form>
		</section>
	);
}
