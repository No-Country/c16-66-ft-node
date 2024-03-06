import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/FakeLOGO/Logo 3.png'
import person from '../../assets/svg/personWhite.svg'
import menu from '../../assets/svg/menu.svg'
import { useState } from 'react'
import { ModalMenu } from './ModalMenu'
import { Modal, Box } from "@mui/material";
import '../../pages/PrincipalHome/index.css'
import RegisterButton from './RegisterButton'
import arrowDownBlue from '../../assets/svg/arrowDownBlue.svg'
import { UserStore } from '../../StoreGeneral/UsersStore'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore'
import { Toaster, toast } from 'sonner'

export function NavPrincipalHome () {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const { userLogged, loggOutUser }= UserStore()
    const { doctorLogged, loggOutDoctor } = DoctorStore()
    const [modal, setModal] = useState(false);

    const goSession = () => {
        navigate('/autogestion')
    }
    const menuOpen = () => {
        setOpenModal(true)
    }
    const menuClose = () => {
        setOpenModal(false)
    }
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
        <nav className='py-1 px-5 nav h-1/6 flex justify-between items-center'>
            <button onClick={menuOpen} className='mr-28 sm:mr-0 h-5 w-auto p-1 lg:hidden'>
                <img src={menu} alt='boton menu' />
            </button>
            <Toaster richColors />
            {openModal && 
                <ModalMenu menuClose={menuClose} />
            }
            <img src={logo} className='h-8 w-auto lg:h-9' alt='logo MedConnect'/>

            
            <Link to='/medical-list' className='text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex'>
                Cartilla Médica
            </Link>
            <a href='#contacto' onClick={()=>{goTo('contacto')}} className='text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex'>
                Contactos
            </a>
            {
                userLogged || doctorLogged ? 
                <>
                <Link to='/home' className='text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex'>
                Home
                </Link>
                <div className=" cursor-pointer text-xs lg:text-lg p-2 rounded-xl hover:bg-whiteOpacity hidden lg:flex" onClick={() => setModal(true)}>
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
                )}
                </>
                :
                <>

                <RegisterButton arrowDown={arrowDownBlue} className={`hidden lg:inline-flex items-center lg:text-lg p-2 rounded-xl border-2 text-darkBlue hover:bg-whiteOpacity relative`}text={'REGISTRÁTE'} className2={`hidden text-xs p-4 bg-whiteOpacity rounded-xl absolute top-20 right-80 lg:flex flex-col items-start lg:text-base h-fit`} btn={`hover:bg-darkBlue p-2 rounded-xl hover:text-white`}/>
            <button 
                className='hidden lg:flex items-center bg-darkBlue text-white rounded-xl p-2 text-center hover:bg-primaryBlue -xs lg:text-lg' 
                onClick={goSession} 
            >
                AUTOGESTIÓN
                <img src={person} className='h-5 text-center lg:h-6 xl:h-7' alt='icono de persona'/>
            </button> 
                </>
            }
        </nav>
    )
}