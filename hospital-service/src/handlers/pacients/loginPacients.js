const loginPacientHandler = (req, res) => {
  try {
    req.session.name = req.newPacient.name;
    req.session.lastname = req.newPacient.lastname;
    req.session.email = req.newPacient.email;
    req.session.password = req.newPacient.password;
    req.session.image = req.newPacient.image;
    req.session.city = req.newPacient.city;
    req.session.role = req.newPacient.role;
    req.session.isLogged = true;

    res.status(200).send("Logueado");
  } catch (err) {
    res.status(500).send("Error al loguear");
    throw new Error(err);
  }
};
