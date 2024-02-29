const { Doctor } = require("../../db");

const createDoctor = async (
  name,
  lastname,
  birthdate,
  email,
  password,
  dni,
  cuil,
  adress,
  town,
  province,
  country,
  telephone,
  licensenumber,
  specialty,
  socialSecurity,
  registrationNumber,
  image,
  role
) => {
  const newDoctor = await Doctor.create({
    name,
    lastname,
    birthdate,
    email,
    password,
    dni,
    cuil,
    adress,
    town,
    province,
    country,
    telephone,
    licensenumber,
    specialty,
    socialSecurity,
    registrationNumber,
    image,
    role,
  });

  return newDoctor;
};

module.exports = { createDoctor };
