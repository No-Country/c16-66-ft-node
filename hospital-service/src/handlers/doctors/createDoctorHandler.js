const { createDoctor } = require("../../controllers/doctors/createDoctor")

const createDoctorHandler = async (req, res) => {
    try{
        const {name,lastname,email,licensenumber,specialty,image} = req.body
        const newDoctor = await createDoctor(name,lastname,email,licensenumber,specialty,image)
        res.status(201).json(newDoctor)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createDoctorHandler}