const { Doctor } = require("../../db");

const updateDoctor = async (

    id,
    name,
    lastname,
    email,
    licensenumber,
    specialty,
    image

    ) => {
        
        const doctor = await Doctor.findByPk(id);
        
        if (!doctor) {
            throw new Error("doctor not found")
        }

        doctor.name = name ? name : doctor.name;
        doctor.lastname = lastname ? lastname : doctor.lastname;
        doctor.email = email ? email : doctor.email;
        doctor.licensenumber = licensenumber ? licensenumber : doctor.licensenumber;
        doctor.specialty = specialty ? specialty : doctor.specialty;
        doctor.image = image ? image : doctor.image;

        await doctor.save();
        return doctor;

        };

module.exports = {updateDoctor}