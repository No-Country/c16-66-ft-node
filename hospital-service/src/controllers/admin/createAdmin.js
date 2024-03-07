const { Admin } = require("../../db");

const createAdmin = async (name, lastname, email, password, role) => {
  const newAdmin = await Admin.create({
    name,
    lastname,
    email,
    password,
    role,
  });

  return newAdmin;
};

module.exports = { createAdmin };
