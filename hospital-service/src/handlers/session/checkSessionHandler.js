const checkSessionHandler = (req, res) => {
  try {
    if (req.session.isLogged) {
      const sessionDTO = {
        sesion: req.session,
        sesionId: req.session.id,
      };
      console.log(req.session);
      res.status(200).send({ status: "sesion OK", payload: sessionDTO });
    } else {
      // Si el usuario no está autenticado, devuelve un mensaje de error
      res.status(401).send("Usuario no autenticado");
    }
  } catch (err) {
    // Maneja cualquier error que pueda ocurrir
    res.status(500).send("Error al verificar la sesión");
    console.error(err);
  }
};

module.exports = { checkSessionHandler };
