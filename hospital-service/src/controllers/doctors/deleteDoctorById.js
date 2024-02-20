const { Doctor } = require("../../db");

const deleteDoctorById = async (id) => {
    
    if(!id) throw new Error("Doctor not found")
    const doctorToDelete = await Doctor.findByPk(id);
    await Doctor.destroy({
    where: {
        id: id,
    },
    });

    if (doctorToDelete) {
        return { success: true, data: doctorToDelete}
    } else {
        return { success: false, data: doctorToDelete}
    }
}

module.exports = {deleteDoctorById}