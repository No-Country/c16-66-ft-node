const registerPacientHandler = (req, res) => {
  try {
    const newPacientDTO = {
      id: req.user.pacientId,
      name: req.user.name,
      lastname: req.user.lastname,
      birthdate: req.user.birthdate,
      email: req.user.email,
      password: req.user.password,
      dni: req.user.dni,
      cuil: req.user.cuil,
      image: req.user.image,
      adress: req.user.adress,
      town: req.user.city,
      province: req.user.province,
      country: req.user.country,
      tel: req.user.tel,
      socialSecurity: req.user.socialSecurity,
      planSocialSecurity: req.user.planSocialSecurity,
      reviews: req.user.reviews,
      appointments: req.user.appointments,
      role: req.user.role,
    };
    res
      .status(200)
      .send({ message: "Paciente Registrado", payload: newPacientDTO });
  } catch (err) {
    res.status(500).send("Error al registrar al Paciente", err.message);
  }
};

module.exports = { registerPacientHandler };
