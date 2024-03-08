const { decodeTwilioToken } = require("../../utils/decodeTwilioToken");

const getTokenB = (req, res) => {
  const token = req.customToken; // Accede al token almacenado en la solicitud
  res.header("Access-Control-Allow-Origin", "*");
  console.log(token);
  try {
    if (token) {
      const decodedToken = decodeTwilioToken(token);
      if (decodedToken) {
        console.log(decodedToken);
        console.log(decodedToken.jti);
        console.log(decodedToken.grants);
        console.log(decodedToken.iat);
        console.log(decodedToken.exp);
        console.log(decodedToken.iss);
        console.log(decodedToken.sub);

        const tokenDTO = {
          jti: decodedToken.jti,
          grants: decodedToken.grants,
          iat: decodedToken.iat,
          exp: decodedToken.exp,
          iss: decodedToken.iss,
          sub: decodedToken.sub,
        };

        res.status(200).send({ token: tokenDTO });
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
