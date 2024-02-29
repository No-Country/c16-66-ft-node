const { createPacient } = require("../../controllers/pacients/createPacient");

const createPacientHandler = async (req, res) => {
  try {
    const {
      name,
      lastname,
      birthdate,
      email,
      password,
      dni,
      cuil,
      image,
      adress,
      town,
      province,
      country,
      tel,
      socialSecurity,
      planSocialSecurity,
    } = req.body;
    const newPacient = await createPacient(
      name,
      lastname,
      birthdate,
      email,
      password,
      dni,
      cuil,
      image,
      adress,
      town,
      province,
      country,
      tel,
      socialSecurity,
      planSocialSecurity
    );
    res.status(200).json({ status: "success", payload: newPacient });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createPacientHandler };
