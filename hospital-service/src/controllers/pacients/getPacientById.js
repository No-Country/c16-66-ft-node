const { Pacient } = require("../../db");

const getPacientById = async (pacientId) => {
  const pacient = await Pacient.findByPk(pacientId);

  if (!pacient) {
    throw new Error("Pacient not found");
  }

  return pacient;
};

module.exports = { getPacientById };
