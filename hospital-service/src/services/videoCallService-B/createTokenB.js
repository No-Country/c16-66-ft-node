const { tokenGenerator } = require("../videoCallService-B/tokenGenerator");

const createTokenB = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const { identity, room } = req.body;

    if (!identity) {
      res.status(500).send("Falta el identity");
    } else if (!room) {
      res.status(500).send("Falta el room");
    } else {
      const token = await tokenGenerator(identity, room);
      res.send(token);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { createTokenB };
