const {getDoctorById} = require("../../controllers/doctors/getDoctorById")

const getDoctorsByIdHandler = async (req, res) => {
    try {

        const {id} = req.params;
        const doctor = await getDoctorById(id)
        res.status(201).json(doctor)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getDoctorsByIdHandler}