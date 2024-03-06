const { restart } = require("nodemon");
const {
  deletePacientById,
} = require("../../controllers/pacients/deletePacientById");

const deletePacientByIdHandler = async (req, res) => {
  try {
    const { pacientId } = req.params;
    const pacientToDelete = await deletePacientById(pacientId);
    res.status(200).json({ pacientToDelete });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { deletePacientByIdHandler };
