const { tokenGenerator } = require("../videoCallService-B/tokenGenerator");
const { decodeTwilioToken } = require("../../utils/decodeTwilioToken");

const createTokenB = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const { identity, room } = req.body;
    const token = await tokenGenerator(identity, room);

    const decodedToken = await decodeTwilioToken(token);

    const tokenDTO = {
      jti: decodedToken.jti,
      grants: decodedToken.grants,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
      iss: decodedToken.iss,
      sub: decodedToken.sub,
    };

    res.status(200).send({ token: tokenDTO });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { createTokenB };
