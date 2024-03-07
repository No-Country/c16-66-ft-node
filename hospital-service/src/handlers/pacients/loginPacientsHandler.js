const loginPacientHandler = (req, res) => {
  try {
    console.log(req.session);
    console.log(req.user);

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
    // req.session.pacientId = req.user.pacientId;
    // req.session.name = req.user.name;
    // req.session.lastname = req.user.lastname;
    // req.session.birthdate = req.user.birthdate;
    // req.session.email = req.user.email;
    // req.session.password = req.user.password;
    // req.session.dni = req.user.dni;
    // req.session.cuil = req.user.cuil;
    // req.session.image = req.user.image;
    // req.session.adress = req.user.adress;
    // req.session.town = req.user.town;
    // req.session.province = req.user.province;
    // req.session.country = req.user.country;
    // req.session.tel = req.user.tel;
    // req.session.socialSecurity = req.user.socialSecurity;
    // req.session.planSocialSecurity = req.user.planSocialSecurity;
    // req.session.reviews = req.user.reviews;
    // req.session.appointments = req.user.appointments;
    // req.session.rol = req.user.rol;
    // req.session.isLogged = true;

    // req.session.name = req.user.name;
    // req.session.lastname = req.user.lastname;
    // req.session.email = req.user.email;
    // req.session.password = req.user.password;
    // req.session.image = req.user.image;
    // req.session.city = req.user.city;
    // req.session.role = req.user.role;
    // req.session.isLogged = true;

    res.status(200).send({ status: "success", payload: newPacientDTO });
  } catch (err) {
    res.status(500).send("Error al loguear");
    throw new Error(err);
  }
};

module.exports = { loginPacientHandler };
