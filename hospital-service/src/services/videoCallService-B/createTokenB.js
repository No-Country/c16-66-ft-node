const createTokenB = (req, res) => {
  try {
    const token = req.customToken; // Accede al token almacenado en la solicitud

    console.log(token);

    res.send(token);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { createTokenB };
