/* eslint-disable react/prop-types */
import { Modal, Box } from "@mui/material"
import '../../pages/PrincipalHome/index.css'

export default function ModalSuport ({suport, setSuport}) {

    const sendToSuport = () => {
        const popupContainer = document.getElementById('popupContainer');
        const popup = document.getElementById('popup');
        popupContainer.style.display = 'flex';
        setTimeout(function() {
            popupContainer.style.display = 'none';
        }, 3000);
        setSuport(false)
    }

    return (
        
        <Modal
        open={suport === true}
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
                    Envíanos tu consulta
                </h2>
                <textarea autoFocus className=' outline-none rounded-xl border-gray border-2'/>
                <div className='mt-5 mx-auto'>
                    <button
                        onClick={() => sendToSuport()}
                        className=' border bg-mostLighthBlue w-fit p-2 mx-auto text-darkBlue rounded-md border-darkBlue hover:bg-green-700 hover:text-mostLighthBlue mr-2'
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </Box>
    </Modal>
    
    )
}