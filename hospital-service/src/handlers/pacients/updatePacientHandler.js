const { updatePacient } = require("../../controllers/pacients/updatePacient");

const updatePacientHandler = async (req, res) => {
  try {
    const { pacientId } = req.params;
    const {
      name,
      lastname,
      adress,
      birthdate,
      email,
      password,
      dni,
      cuil,
      image,
      town,
      province,
      country,
      tel,
      socialSecurity,
      planSocialSecurity,
      role,
    } = req.body;

    const pacient = await updatePacient(
      pacientId,
      name,
      lastname,
      adress,
      birthdate,
      email,
      password,
      dni,
      cuil,
      image,
      town,
      province,
      country,
      tel,
      socialSecurity,
      planSocialSecurity,
      role
    );

    res.status(200).json({ status: "success", payload: pacient });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { updatePacientHandler };
