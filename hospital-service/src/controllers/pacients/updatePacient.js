const { Pacient } = require("../../db");

const updatePacient = async (
  id,
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
  const pacient = await Pacient.findByPk(id);

  if (!pacient) {
    throw new Error("Pacient not found");
  }

  pacient.name = name ? name : pacient.name;
  pacient.lastname = lastname ? lastname : pacient.lastname;
  pacient.adress = adress ? adress : pacient.adress;
  pacient.birthdate = birthdate ? birthdate : pacient.birthdate;
  pacient.email = email ? email : pacient.email;
  pacient.password = password ? password : pacient.password;
  pacient.dni = dni ? dni : pacient.dni;
  pacient.cuil = cuil ? cuil : pacient.cuil;
  pacient.image = image ? image : pacient.image;
  pacient.town = town ? town : pacient.town;
  pacient.province = province ? province : pacient.province;
  pacient.country = country ? country : pacient.country;
  pacient.tel = tel ? tel : pacient.tel;
  pacient.socialSecurity = socialSecurity
    ? socialSecurity
    : pacient.socialSecurity;
  pacient.planSocialSecurity = planSocialSecurity
    ? planSocialSecurity
    : pacient.planSocialSecurity;

  await pacient.save();

  return pacient;
};

module.exports = { updatePacient };
