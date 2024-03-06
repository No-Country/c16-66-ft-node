const passport = require("passport");

// Middleware para verificar la sesión utilizando Passport
const checkSessionMiddleware = (req, res, next) => {
  // passport.authenticate() con 'session' como estrategia
  passport.authenticate("session", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      // Si el usuario no está autenticado, devuelve un mensaje de error
      return res.status(401).send("Usuario no autenticado");
    }
    // Si el usuario está autenticado, continúa con la siguiente función de middleware
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { checkSessionMiddleware };
