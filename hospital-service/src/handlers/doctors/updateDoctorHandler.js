const { updateDoctor } = require("../../controllers/doctors/updateDoctor");

const updateDoctorHandler = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const {
      name,
      lastname,
      birthdate,
      email,
      password,
      dni,
      cuil,
      adress,
      town,
      province,
      country,
      telephone,
      licensenumber,
      specialty,
      socialSecurity,
      registrationNumber,
      image,
      role,
    } = req.body;
    const doctor = await updateDoctor(
      doctorId,
      name,
      lastname,
      birthdate,
      email,
      password,
      dni,
      cuil,
      adress,
      town,
      province,
      country,
      telephone,
      licensenumber,
      specialty,
      socialSecurity,
      registrationNumber,
      image,
      role
    );
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateDoctorHandler };
