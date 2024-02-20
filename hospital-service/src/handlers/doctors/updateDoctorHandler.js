const {updateDoctor} = require("../../controllers/doctors/updateDoctor")

const updateDoctorHandler = async (req, res) => {
    try{
        const {id,name,lastname,email,licensenumber,specialty,image} = req.body
        const doctor = await updateDoctor(id,name,lastname,email,licensenumber,specialty,image)
        res.status(201).json(doctor)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {updateDoctorHandler}