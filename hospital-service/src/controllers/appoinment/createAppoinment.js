const {Appoinment} = require("../../db")
const {Doctor} = require("../../db")
const {Pacient} = require("../../db")

const createAppoinment = async(date, hour, pending, doctorId, pacientId) => {

    const newAppoinment = await Appoinment.create({date, hour, pending, doctorId, pacientId})
    
    const doctoradd = await Doctor.findByPk(doctorId)
    
    await newAppoinment.setDoctor(doctoradd)
    
    const pacientadd = await Pacient.findByPk(pacientId)

    await newAppoinment.setPacient(pacientadd)
    
    return newAppoinment
}

module.exports = {createAppoinment}