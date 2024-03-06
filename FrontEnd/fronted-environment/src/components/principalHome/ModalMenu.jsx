import { Link, useNavigate } from 'react-router-dom'
import close from '../../assets/svg/close.svg'
import personWhite from '../../assets/svg/personWhite.svg'
// import search from '../../assets/svg/search.svg'
import RegisterButton from './RegisterButton'
import arrowDown from '../../assets/svg/arrowDown.svg'
import { UserStore} from '../../StoreGeneral/UsersStore'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
import { useState } from 'react'
import { Modal, Box } from "@mui/material";
import { Toaster, toast } from 'sonner'

// eslint-disable-next-line react/prop-types
export function ModalMenu ({menuClose}) {

    const { userLogged, loggOutUser }= UserStore()
    const { doctorLogged, loggOutDoctor } = DoctorStore()
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    function goTo(contacto) {
        location.hash = "#" + contacto;
    }
    const logOutFuncion = () => {
		toast.success(
			'Cerraste sesiòn'	
		)
		userLogged ? loggOutUser() : loggOutDoctor();
		navigate("/");
	};

    return (
        <section className="z-10 p-3 w-1/2 sm:w-2/6 modal h-fit rounded-xl absolute top-0 left-0 lg:hidden">
            <div className='flex justify-end mb-8'>
                <button onClick={menuClose}>
                    <img src={close} alt='boton para cerrar menu'/>
                </button>
            </div>
            <div className='h-fit flex flex-col items-center'>
            <Toaster richColors />
            {
                userLogged || doctorLogged ?

                <Link to='/home' className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'> Home
                </Link>
                :
                <RegisterButton text={'Registrate'} arrowDown={arrowDown} className={`p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm`} className2={`text-xs p-4 bg-white rounded-xl fixed top-24 right-1 flex flex-col items-start`} btn={`hover:bg-darkBlue p-2 sm:px-8 rounded-xl hover:text-white`}/>
            
            }
                <Link to='/medical-list' className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'>
                    Cartilla médica
                </Link>
                <a href='#contacto' onClick={()=>{goTo('contacto')}} className='p-2 w-10/12 mb-3 bg-whiteOpacity rounded-xl flex items-center text-xs sm:text-sm'>
                    Contacto
                </a>

            {
                userLogged || doctorLogged ?
                <><div className=" cursor-pointer p-2 w-10/12 bg-darkBlue rounded-xl flex items-center  justify-center text-xs sm:text-sm text-white mb-16" onClick={() => setModal(true)}>
				Cerrar sesión
			</div>
			{modal && (
				<Modal
					open={modal === true}
					// onClose={() => handleModalImg}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							zIndex: "10",
							transform: "translate(-50%, -50%)",
							width: 400,
							bgcolor: "background.paper",
							border: "2px solid #000",
							boxShadow: 24,
							p: 4,
							borderRadius: "8px",
						}}
					>
						<div className='flex flex-col gap-4'>
							<h2 className='text-center font-semibold text-base text-black'>
								¿Deseas cerrar sesión?
							</h2>
							<div className='mt-5 flex justify-center'>
								<button
									onClick={() => logOutFuncion()}
									className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-red hover:text-mostLighthBlue mr-2'
								>
									Continuar
								</button>
								<button
									onClick={() => setModal(false)}
									className=' border bg-mostLighthBlue w-1/2 mx-auto text-darkBlue  rounded-md border-darkBlue hover:bg-green-700 hover:text-mostLighthBlue'
								>
									Regresar
								</button>
							</div>
						</div>
					</Box>
				</Modal>
                )}</>
                :
                <Link to='/autogestion' className='p-2 w-10/12 bg-darkBlue rounded-xl flex items-center  justify-center text-xs sm:text-sm text-white mb-16'>
                    INICIAR SESIÓN<img src={personWhite} alt='icono de usuario' className='w-5'/>
                </Link>
            }
                {/* <button className='p-1 w-full bg-white text-gray rounded-3xl flex items-center border-gray border-2'>
                    <img src={search} alt='buscador' className='w-1/6 h-2/3 text-sm sm:text-base'/> 
                    Buscador...
                </button> */}
            </div>
        </section>
    )
}