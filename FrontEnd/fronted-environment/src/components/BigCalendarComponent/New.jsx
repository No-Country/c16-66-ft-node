import { useEffect, useState } from 'react';
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
// const [events, setEvents] = useState([]);



//  useEffect(() => {
//   getAppointmentResponse();
//   let filteredAppointments;
//   if (userLogged && appoinments) {
//     filteredAppointments = dbApoinmentsToEvents(appointmentForId(userLogged.pacientId, "pacient"),"pacient")
//     setEvents(filteredAppointments);
//     console.log("que retorna esto :", filteredAppointments);
//   } else {
//     filteredAppointments = dbApoinmentsToEvents(appointmentForId(doctorLogged?.doctorId, "doctor"),"doctor")// doctorLoged? para que dfuncione el reenvio si no hay doctor logeado
//     console.log("que retorna esto :", filteredAppointments);
//     setEvents(filteredAppointments);
//   }
// console.log(events)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);



let role='doctor' //rol de usuario logueado
let id = 'bb48dd6c-4480-4074-8490-edd1c157aba2' //id de usuario logueado
let mockApoinments = appointmentForId(id,role) //funciona

//EVENTOS A RENDERIZAR------------------------------------------
const events = dbApoinmentsToEvents(mockApoinments,role) //cuando se pueda loguear se debe de cambiar los mocks por el userlogged/doctorlogged  y el user.role


 if (!userLogged && !doctorLogged) {
  navigate("/autogestion");
}

 // const {openDateModal }= useUiStore(); // hacer modal y preguntar a JP como se le ha dado manejo
 
  const eventStyleGetter = (event,start,end,isSelected) => {


    const style = {
      display: 'flex', 
      backgroundColor: '#115E86', 
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      fontFamily: 'Roboto'
    }
    return { style }
  }

  return (
    <>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}  
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