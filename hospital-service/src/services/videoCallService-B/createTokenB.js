const { decodeTwilioToken } = require("../../utils/decodeTwilioToken");

const createTokenB = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const token = req.customToken; // Accede al token almacenado en la solicitud

    console.log(token);

    const decodedToken = decodeTwilioToken(token);

    res.send(decodedToken);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { createTokenB };
