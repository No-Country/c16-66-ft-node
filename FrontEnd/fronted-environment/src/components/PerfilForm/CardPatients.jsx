import { Box, Modal } from "@mui/material"
import { useState } from "react"
import close from '../../assets/svg/close.svg'
import duo from '../../assets/svg/duo.svg'
import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function CardPatients ({patient}) {
    const[modal, setModal] = useState(false)
    const navigate = useNavigate()
    return (
        <section className=" bg-bgLightGreen rounded-xl h-fit w-52 p-2">
            <div className="flex justify-around">
                <img src={patient.image} alt="Image user" className=" w-9 h-auto rounded-full" />
                <div className="flex flex-col">
                    <h3 className="text-xs font-semibold">{patient.name} {patient.lastname}</h3>
                    <h4 className="text-xs">{patient.birthdate}</h4>
                </div>
            </div>
                <div className="flex flex-col items-start mb-3">
                    <p className="text-xs">Número de historia: 4562596</p>
                    <p className="text-xs">DNI:{patient.dni}</p>
                    <p className="text-xs">Apellido:{patient.lastname}</p>
                    <p className="text-xs">Nombre:{patient.name}</p>
                    <p className="text-xs">Ocupación: Abogada</p>
                    <p className="text-xs">Fecha de nacimiento: {patient.birthdate}</p>
                    <p className="text-xs">Estado civil: Soltera</p>
                    <p className="text-xs">País: Argentina</p>
                    <p className="text-xs -mb-3">Residencia actual:{patient.adress}</p>
                </div>
                <button 
                onClick={()=>setModal(true)}
                className="text-xs font-semibold ml-2 border-b">Consultar ficha completa</button>
                {
                    <Modal
                    open={modal === true}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>
                        <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            zIndex: "10",
                            transform: "translate(-50%, -50%)",
                            width: 350,
                            bgcolor: "#D8EDF2",
                            border: "2px solid #EAF7EA",
                            boxShadow: 24,
                            p: 2,
                            borderRadius: "8px",
                        }}>
                            <div className="flex justify-end">
                            <button onClick={()=>setModal(false)}><img className="h-3" src={close} alt="button close"/></button>
                            </div>
                            <div className="flex justify-start">
                            <img src={patient.image} alt="Image user" className=" w-16 h-auto rounded-md" />
                            <div className="flex flex-col justify-center pl-3">
                                <h3 className="text-xs font-semibold">{patient.name} {patient.lastname}</h3>
                                <h4 className="text-xs">{patient.birthdate}</h4>
                            </div>
                            </div>
                            <section className="flex flex-col mt-4">
                                <div className="flex mb-3">
                                <p className="text-xs font-semibold">Motivo de consulta </p>
                                <p className="text-xs ml-2">Presenta dolor abdominal, vómito, nauseas y dolor de cabeza</p>
                                </div>

                                <div className="flex mb-3">
                                <p className="text-xs font-semibold">Enfermedad actual </p>
                                <p className="text-xs ml-2">Mujer de 24 años con antecedentes de hipertensión arterial desde el 2020, tratado con Enarapril 10 mg/día. Sin dieta dash.
                                Ingresa a la consulta el 14/11/2022 a las 19:00 hrs por un dolor en el abdomen de inicio súbito, carácter cólico, intensidad 10/10, se irradia en forma hemicenturon, que no cede el uso de antiespasmódicos (Buscapina) automedicado en su casa, donde el dolor se agrada por la ingesta de alimentos grasos, alivia en posicuón decúbito lateral.Presentó síntomas acompañantes como vómitos y nauseas.</p>
                                </div>

                                <div className="flex mb-3">
                                <p className="text-xs font-semibold">Tratamiento </p>
                                <p className="text-xs ml-2">Se realizaron estudios de laoratorio, Rayos x, EGC y ecografía abdominal</p>
                                </div>

                                <button
                                onClick={()=>navigate('/video-llamada')}
                                className="text-xs border-2 border-gray p-1 w-fit mx-auto flex items-center rounded-xl bg-white"><img src={duo} alt="boton para iniciar videollamada" />Iniciar videoconsulta</button>
                            </section>
                        </Box>
                    </Modal>
                }
        </section>
    )
}