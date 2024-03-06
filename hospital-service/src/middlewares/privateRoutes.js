const privateRoutes = (req, res, next) => {
  if (!req.session.isLogged) {
    res.status(401).send("Acceso no autorizado");
  }
  next();
};

module.exports = { privateRoutes };
