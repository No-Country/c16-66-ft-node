//import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar'//npm i react-big-calendar requerido
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours,format} from 'date-fns'

import { CalendarEvent } from './CalendarEvent'

import { localizer, getMessagesES } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";
import { AppoinmentStore } from "../../StoreGeneral/AppoinmentStore"
import { useAppointmentStore } from '../../hooks/useAppointmentStore';
import { dbApoinmentsToEvents } from '../../helpers/dbApoinmentToCalendarE';



export const New = () => {

 // const { user }=useAuthStore(); // hook para manejo de usuarios, doctor y paciente
 const navigate = useNavigate();
 const { userLogged, users} = UserStore();
 const { doctorLogged,doctors } = DoctorStore();
 const { appoinments } = AppoinmentStore();
 const {getAppointmentResponse, appointmentForId} = useAppointmentStore()




 //trae array de 100 elementos


let mockRole='pacient' //rol de usuario logueado
let mockId = '67154a0a-ff65-4146-aab5-3c5bce137082' //id de usuario logueado
let mockApoinments = appointmentForId(mockId,mockRole) //funciona
 //EVENTOS A RENDERIZAR------------------------------------------
const events = dbApoinmentsToEvents(mockApoinments,mockRole) //cuando se pueda loguear se debe de cambiar los mocks por el userlogged/doctorlogged  y el user.role

console.log(userLogged)


 if (!userLogged && !doctorLogged) {
  navigate("/autogestion");
}

 // const {openDateModal }= useUiStore(); // hacer modal y preguntar a JP como se le ha dado manejo
 
  const eventStyleGetter = (event,start,end,isSelected) => {


    const style = {
      display: 'flex', 
      backgroundColor: 'white', 
      borderRadius: '5px',
      opacity: 0.8,
      color: 'black',
      fontFamily: 'Roboto'
    }
    return { style }
  }

  return (
    <>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}  //lista de eventos que se renderizan, esto se debe conectar con la lista de turnos del usuario loguado
        defaultView={'week'}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 200px )' }} //ajustar tama;o
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
         components={{
           event: CalendarEvent 
         }}
         views={['month','week','day']}
      />
    </>
  )
}