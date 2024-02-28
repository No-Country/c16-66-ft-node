const checkSessionHandler = (req, res) => {
  try {
    // Verifica si el usuario está autenticado
    if (req.session.isLogged) {
      console.log(req.session);
      res.status(200).send("Sesion OK");
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
