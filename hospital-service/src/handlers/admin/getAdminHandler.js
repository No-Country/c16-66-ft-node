const { getAdmins } = require("../../controllers/admin/getAdmins");

const getAdminHandler = async (req, res) => {
  try {
    const admins = await getAdmins();

    res.status(200).send({ status: "success", payload: admins });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAdminHandler };
