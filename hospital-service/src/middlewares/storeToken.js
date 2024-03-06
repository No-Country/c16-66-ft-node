const {
  tokenGenerator,
} = require("../services/videoCallService-B/tokenGenerator");

const storeTokenMiddleware = (req, res, next) => {
  const { identity, room } = req.body;
  const token = tokenGenerator(identity, room);
  req.customToken = token; // Almacena el token en la solicitud
  next();
};

module.exports = { storeTokenMiddleware };
