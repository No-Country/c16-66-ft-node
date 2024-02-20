const {deleteDoctorById} = require("../../controllers/doctors/deleteDoctorById")

const deleteDoctorByIdHandler = async (req, res) => {
    try {

        const {id} = req.params;
        const doctor = await deleteDoctorById(id)
        res.status(201).json(doctor)

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {deleteDoctorByIdHandler}