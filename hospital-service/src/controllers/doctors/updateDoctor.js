const { Doctor } = require("../../db");

const updateDoctor = async (
  id,
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
  const doctor = await Doctor.findByPk(id);

  if (!doctor) {
    throw new Error("doctor not found");
  }

  doctor.name = name ? name : doctor.name;
  doctor.lastname = lastname ? lastname : doctor.lastname;
  doctor.birthdate = birthdate ? birthdate : doctor.birthdate;
  doctor.email = email ? email : doctor.email;
  doctor.password = password ? password : doctor.password;
  doctor.dni = dni ? dni : doctor.dni;
  doctor.cuil = cuil ? cuil : doctor.cuil;
  doctor.adress = adress ? adress : doctor.adress;
  doctor.town = town ? town : doctor.town;
  doctor.province = province ? province : doctor.province;
  doctor.country = country ? country : doctor.country;
  doctor.telephone = telephone ? telephone : doctor.telephone;
  doctor.licensenumber = licensenumber ? licensenumber : doctor.licensenumber;
  doctor.specialty = specialty ? specialty : doctor.specialty;
  doctor.socialSecurity = socialSecurity ? socialSecurity : doctor.socialSecurity;
  doctor.registrationNumber = registrationNumber ? registrationNumber : doctor.registrationNumber;
  doctor.image = image ? image : doctor.image;

  await doctor.save();
  return doctor;
};

module.exports = { updateDoctor };
