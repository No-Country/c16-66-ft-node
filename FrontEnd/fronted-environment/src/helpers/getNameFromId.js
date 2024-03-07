import { UserStore } from "../StoreGeneral/UsersStore";
import { DoctorStore } from "../StoreGeneral/DoctorsStore";


export const getNameFromId = (id,role ='')=>{

    const {  users} = UserStore();
    const { doctors } = DoctorStore();

    let doctorsCopy = [...doctors]
    let usersCopy = [...users]
    if(role==='doctor'){
        let doctor;
       
        doctor=doctorsCopy.find((doctor) => doctor.doctorId===id)//estoy comparando id de doctor con id de paciente?/si id es de paciente
        let name = doctor.name;
        return name;

    }else{
        let patient;
        //console.log(id)
        patient=usersCopy.find((patient) => patient.pacientId==id)
        let name = patient.name;
        return name;
    }

}