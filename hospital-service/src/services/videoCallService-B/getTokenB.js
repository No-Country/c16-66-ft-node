const { decodeTwilioToken } = require("../../utils/decodeTwilioToken");

const getTokenB = (req, res) => {
  const token = req.customToken; // Accede al token almacenado en la solicitud

  console.log(token);
  try {
    if (token) {
      const decodedToken = decodeTwilioToken(token);
      if (decodedToken) {
        res.send(decodedToken);
      } else {
        res.status(500).send("Error al decodificar el token");
      }
    } else {
      res.status(404).send("Token not found");
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { getTokenB };
