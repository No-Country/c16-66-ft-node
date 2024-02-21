const { Doctor } = require("../../db");

const deleteDoctorById = async (doctorId) => {
    
    if(!doctorId) throw new Error("Doctor not found")
    const doctorToDelete = await Doctor.findByPk(doctorId);
    await Doctor.destroy({
    where: {
        doctorId: doctorId,
    },
    });

    if (doctorToDelete) {
        return { success: true, data: doctorToDelete}
    } else {
        return { success: false, data: doctorToDelete}
    }
}

module.exports = {deleteDoctorById}