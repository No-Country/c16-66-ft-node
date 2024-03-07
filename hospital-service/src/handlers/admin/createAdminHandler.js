const { createAdmin } = require("../../controllers/admin/createAdmin");

const createAdminHandler = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    const newAdmin = await createAdmin(name, lastname, email, password);

    res.status(200).json({ status: "success", payload: newAdmin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createAdminHandler };
