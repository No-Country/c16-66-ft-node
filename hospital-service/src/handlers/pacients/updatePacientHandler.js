const { updatePacient } = require("../../controllers/pacients/updatePacient");

const updatePacientHandler = async (req, res) => {
  try {
    const { pacientId } = req.params;
    const { name, lastname, email, password, image, city, country } = req.body;

    const pacient = await updatePacient(
      pacientId,
      name,
      lastname,
      email,
      password,
      image,
      city,
      country
    );

    res.status(200).json({ status: "success", payload: pacient });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { updatePacientHandler };
