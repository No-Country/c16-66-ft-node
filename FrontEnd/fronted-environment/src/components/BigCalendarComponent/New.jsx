//import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar'//npm i react-big-calendar requerido
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours,format} from 'date-fns'

import { CalendarEvent } from './CalendarEvent'

import { localizer, getMessagesES } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { UserStore } from "../../StoreGeneral/UsersStore";
import { DoctorStore } from "../../StoreGeneral/DoctorsStore";




const events =[{
  title: 'cita con doctor2', 
  id: "84198441-bad3-42c9-a083-61997c4deba5",
 //extraer fecha exacta del objeto de la DB campos date y hour
  start: addHours(new Date(),4),
  end:addHours(new Date(),5)

},
  {

  //FORMATO DE EVENTOS DE LA DB
  //-----------------------------------
  // id: "84198441-bad3-42c9-a083-61997c4deba5",
  // "date": "2024-03-30",
  // "hour": "14:08:00",
  // "pending": true,
  // "doctorId": "858138f5-1882-43b9-b6c1-050096afeacd",
  // "pacientId": "b5da4c6e-3d9a-4351-957b-97c85ee95f6b"
  // hacer funcion que convierta del formato de la DB al formato de big Calendar


  //FORMATO QUE RECIBE BIG CALENDAR
  //--------------------------------------------
  //se debe de extraer el nombre del doctor usando el id de este evento
  title: 'cita con doctor', 
   id: "84198441-bad3-42c9-a083-61997c4deba5",
  //extraer fecha exacta del objeto de la DB campos date y hour
   start: new Date(), 
   end:addHours(new Date(),1) //cada cita sera de 1h
}]

export const New = () => {

 // const { user }=useAuthStore(); // hook para manejo de usuarios, doctor y paciente
 const navigate = useNavigate();
 const { userLogged } = UserStore();
 const { doctorLogged } = DoctorStore();


 if (!userLogged && !doctorLogged) {
  navigate("/autogestion");
}

 // const {openDateModal }= useUiStore(); // hacer modal y preguntar a JP como se le ha dado manejo
 // const {events,setActiveEvent,startLoadingEvents}=useCalendarStore(); //crear un store para turnos si no lo hay/ mirar como se hacen los otros

  const eventStyleGetter = (event,start,end,isSelected) => {

//const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)
//console.log(isMyEvent)
//console.log({event,start,end,isSelected})

    const style = {
      //realizar validacion para que solo muestre los eventos 
      //que pertenescan al id logueado 
      display: 'flex', 
      backgroundColor: 'white', 
      borderRadius: '5px',
      opacity: 0.8,
      color: 'black',
      fontFamily: 'Roboto'
    }
    return { style }
  }




  //const onDoubleClick = (event) => { // funcion para abrir el modal, requiere hook de store de UI, no se requiere abrir modal para el evento por ahora
  //  openDateModal();
 // }

  //const onSelect = (event) => { //requiere store del calendario (turnos), setea el turno como turno activo, no parece muy util por ahora mirar que usos tiene setActiveEvent en el hook de calendario
    //setActiveEvent(event);
  //}


 // useEffect(() => {
   // startLoadingEvents();
  
 // }, [])
  



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
         formats={{
       
         }}
       // onDoubleClickEvent={ onDoubleClick }
       // onSelectEvent={onSelect}
      />
    </>
  )
}