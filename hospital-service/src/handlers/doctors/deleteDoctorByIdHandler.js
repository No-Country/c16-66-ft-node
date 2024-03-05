const {deleteDoctorById} = require("../../controllers/doctors/deleteDoctorById")

const deleteDoctorByIdHandler = async (req, res) => {
    try {

        const {doctorId} = req.params;
        const doctor = await deleteDoctorById(doctorId)
        res.status(201).json(doctor)

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {deleteDoctorByIdHandler}