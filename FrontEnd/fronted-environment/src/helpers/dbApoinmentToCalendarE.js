import { getNameFromId } from "./getNameFromId";
import { addHours } from 'date-fns'



export const dbApoinmentsToEvents = (appoinments = [],role ='')=>{
    let events;
    let appoinmentsCopy  = [...appoinments]

if (role ==='pacient') {

    events = appoinmentsCopy.map((appoinment) => {

       
        //funcion que parsee la fecha y la hora de los turnos de la DB y los pase a formato date-fns
        let drName = getNameFromId(appoinment.doctorId ,'doctor') 
        let exactDate= `${appoinment.date} ${appoinment.hour}`
        let startDate=new Date(exactDate)
      
        let event={

            title: `cita con Dr.${drName}`,
            id: appoinment.id,
            start: startDate,
            end: addHours(startDate,1) 
        }

        return event
    })

}else{
    events = appoinmentsCopy.map((appoinment) => {

             
              let patientName = getNameFromId(appoinment.pacientId ,'pacient')
              let exactDate= `${appoinment.date} ${appoinment.hour}`
              let startDate=new Date(exactDate)
        let event={

            title: `cita con ${patientName}`, 
            id: appoinment.id,
            start: startDate,
            end: addHours(startDate,1)  
        }

        return event
    })

}
    
    return events;

}