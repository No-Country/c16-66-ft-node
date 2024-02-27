const { Pacient } = require("../../db");

const createPacient = async (
  name,
  lastname,
  email,
  password,
  image,
  city,
  country,
  role
) => {
  const newPacient = await Pacient.create({
    name,
    lastname,
    email,
    password,
    image,
    city,
    country,
    role,
  });

  return newPacient;
};

module.exports = { createPacient };
