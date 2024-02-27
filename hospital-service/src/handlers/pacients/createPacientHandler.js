const { createPacient } = require("../../controllers/pacients/createPacient");

const createPacientHandler = async (req, res) => {
  try {
    const { name, lastname, email, password, image, city, country } = req.body;
    const newPacient = await createPacient(
      name,
      lastname,
      email,
      password,
      image,
      city,
      country,
    );
    res.status(200).json({ status: "success", payload: newPacient });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createPacientHandler };
