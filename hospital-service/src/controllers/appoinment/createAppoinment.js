const {Appoinment} = require("../../db")
const {Doctor} = require("../../db")
const {Pacient} = require("../../db")

const createAppoinment = async(date, hour, doctorId, pacientId) => {

    const newAppoinment = await Appoinment.create({date, hour, doctorId, pacientId})
    
    const doctoradd = await Doctor.findAll({
        where: {doctorId: doctorId}
    })
    console.log(doctoradd)
    await newAppoinment.add(doctoradd)

    const pacientadd = await Pacient.findAll({
        where: {pacientId: pacientId}
    })

    await newAppoinment.addPacient(pacientadd)

    return newAppoinment
}

module.exports = {createAppoinment}