const { Pacient } = require("../../db");

const deletePacientById = async (pacientId) => {
  if (!pacientId) throw new Error("Pacient not found");

  const pacientToDelete = await Pacient.findByPk(pacientId);
  await Pacient.destroy({
    where: {
      pacientId: pacientId,
    },
  });

  if (pacientToDelete) {
    return { sucess: true, data: pacientToDelete };
  } else {
    return { success: false, data: pacientToDelete };
  }
};

module.exports = { deletePacientById };
