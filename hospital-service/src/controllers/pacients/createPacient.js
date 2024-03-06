const { Pacient } = require("../../db");

const createPacient = async (
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
) => {
  const newPacient = await Pacient.create({
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
  });

  return newPacient;
};

module.exports = { createPacient };
