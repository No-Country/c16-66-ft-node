const registerDoctorHandler = (req, res) => {
  try {
    const newDoctorDTO = {
      id: req.user.doctorId,
      name: req.user.name,
      lastname: req.user.lastname,
      birthdate: req.user.birthdate,
      email: req.user.email,
      password: req.user.password,
      dni: req.user.dni,
      cuil: req.user.cuil,
      image: req.user.image,
      adress: req.user.adress,
      town: req.user.town,
      province: req.user.province,
      country: req.user.country,
      telephone: req.user.telephone,
      specialty: req.user.specialty,
      socialSecurity: req.user.socialSecurity,
      registrationNumber: req.user.registrationNumber,
      role: req.user.role,
    };
    res
      .status(200)
      .send({ message: "Doctor Registrado", payload: newDoctorDTO });
  } catch (err) {
    res.status(500).send("Error al registrar al Doctor", err.message);
  }
};

module.exports = { registerDoctorHandler };
