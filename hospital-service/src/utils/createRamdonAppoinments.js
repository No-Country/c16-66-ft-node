const {createAppoinment} = require("../controllers/appoinment/createAppoinment")
const {Doctor, Pacient} = require("../db")

const createRandomAppointments = async () => {
    const NUM_APPOINTMENTS = 30; 
  
    const doctors = await Doctor.findAll();
    const patients = await Pacient.findAll();
  
    for (let i = 0; i < NUM_APPOINTMENTS; i++) {
      const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];
      const randomPatient = patients[Math.floor(Math.random() * patients.length)];
      
      const date = generateRandomDate();
      const hour = generateRandomHour();
  
      await createAppoinment(date, hour, true, randomDoctor.doctorId, randomPatient.pacientId);
    }
  };
  
  const generateRandomDate = () => {

    const startDate = new Date(); 
    const endDate = new Date(); 
    endDate.setFullYear(endDate.getFullYear() + 1);

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    const formattedDate = randomDate.toISOString().split('T')[0];
  
    return formattedDate;
    
  };
  
  const generateRandomHour = () => {
    
    const hour = Math.floor(Math.random() * 24); 
    const minute = Math.floor(Math.random() * 60); 
  
    const formattedHour = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

    return formattedHour;

  };
  
  module.exports = {createRandomAppointments};