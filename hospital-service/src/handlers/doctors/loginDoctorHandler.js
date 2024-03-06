const loginDoctorHandler = (req, res) => {
  try {
    console.log(req.session);
    console.log(req.user);
    console.log(req.session.id);

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
      socialSecurity: req.user.socialSecurity,
      registrationNumber: req.user.registrationNumber,
      role: req.user.role,
    };
    req.session.isLogged = true;

    res.status(200).send(newDoctorDTO);
  } catch (err) {
    res.status(500).send("Error al loguear");
    throw new Error(err);
  }
};

module.exports = { loginDoctorHandler };
