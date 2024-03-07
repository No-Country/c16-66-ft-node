const { Admin } = require("../../db");

const getAdmins = async () => {
  const admins = await Admin.findAll({});

  return admins;
};

module.exports = { getAdmins };
