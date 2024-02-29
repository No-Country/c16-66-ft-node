const { createDoctor } = require("../../controllers/doctors/createDoctor");

const createDoctorHandler = async (req, res) => {
  try {
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
    } = req.body;
    const newDoctor = await createDoctor(
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
      image
    );
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createDoctorHandler };
