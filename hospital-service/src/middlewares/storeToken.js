const {
  tokenGenerator,
} = require("../services/videoCallService-B/tokenGenerator");

const storeTokenMiddleware = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { identity, room } = req.body;
  const token = await tokenGenerator(identity, room);
  req.customToken = token; // Almacena el token en la solicitud
  next();
};

module.exports = { storeTokenMiddleware };
