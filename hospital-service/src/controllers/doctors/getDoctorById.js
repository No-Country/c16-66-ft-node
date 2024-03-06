const { Doctor } = require("../../db");

const getDoctorById = async (id) => {

    const doctor = await Doctor.findByPk(id);

    if(!doctor) {
        throw new Error("Doctor not found") 
    }

    return doctor
}

module.exports = {getDoctorById}