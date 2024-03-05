const {createReview} = require("../controllers/reviews/createReview")
const {Doctor, Pacient} = require("../db")

const createRamdonReview = async () => {
    
    const NUM_REVIEWS = 80

    const doctors = await Doctor.findAll();
    const patients = await Pacient.findAll();

    for (let i=0; i<NUM_REVIEWS; i++) {

    const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];
    const randomPatient = patients[Math.floor(Math.random() * patients.length)];

        let rating = Math.floor(Math.random()*5) + 1;

        let text;

        switch(rating) {
            case 1: 
            text="Estoy muy desconforme con el doctor asignado, mal servicio y mala atención. Esta modalidad no funciona."
            break;

            case 2:
            text="Bastante desconforme, si bien me ayudo a entender lo que me pasaba hay muchas cosas para mejorar creo que hay que trabajar"
            break;

            case 3:
            text="Fue buena la atención pero se sintio algo incomodo, creo que se debe seguir trabajando en la consulta."
            break;

            case 4:
            text="Fue buena la atención y la experiencia, muy buen profesional."
            break;

            case 5:
            text="Excelente atención y trabajo medico, voy a recomendar la experiencia!"
            break;
        }

        await createReview(text, rating, randomPatient.pacientId, randomDoctor.doctorId);

    }
}

module.exports = {createRamdonReview}