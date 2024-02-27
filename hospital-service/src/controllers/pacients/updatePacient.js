const { Pacient } = require("../../db");

const updatePacient = async (
  id,
  name,
  lastname,
  email,
  password,
  image,
  city,
  country
) => {
  const pacient = await Pacient.findByPk(id);

  if (!pacient) {
    throw new Error("Pacient not found");
  }

  pacient.name = name ? name : pacient.name;
  pacient.lastname = lastname ? lastname : pacient.lastname;
  pacient.email = email ? email : pacient.email;
  pacient.password = password ? password : pacient.password;
  pacient.image = image ? image : pacient.image;
  pacient.city = city ? city : pacient.city;
  pacient.country = country ? country : pacient.country;

  await pacient.save();

  return pacient;
};

module.exports = { updatePacient };
