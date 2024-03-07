const { tokenGenerator } = require("../videoCallService-B/tokenGenerator");

const createTokenB = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const { identity, room } = req.body;
    const token = await tokenGenerator(identity, room);

    res.send(token);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { createTokenB };
