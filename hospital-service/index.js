const server = require("./src/server");
const { conn } = require("./src/db");
const { Doctor, Pacient } = require("./src/db");
const api = require("./api/doctos.json");
const api2 = require("./api/pacient.json");

const PORT = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Listening on port: ${PORT}`);
      const { doctors } = api;
      const { pacient } = api2;

      doctors.map(
        async ({
          name,
          lastname,
          email,
          password,
          licensenumber,
          specialty,
          image,
        }) => {
          await Doctor.findOrCreate({
            where: {
              name,
            },
            defaults: {
              name,
              lastname,
              email,
              password,
              licensenumber,
              specialty,
              image,
            },
          });
        }
      );

      doctors.map(
        async ({
          name,
          lastname,
          email,
          password,
          licensenumber,
          specialty,
          image,
        }) => {
          await Doctor.findOrCreate({
            where: {
              name,
            },
            defaults: {
              name,
              lastname,
              email,
              password,
              licensenumber,
              specialty,
              image,
            },
          });
        }
      );

      pacient.map(
        async ({
          name,
          lastname,
          birthdate,
          email,
          password,
          dni,
          cuil,
          image,
          adress,
          town,
          province,
          country,
          tel,
          socialSecurity,
          planSocialSecurity,
          role,
        }) => {
          await Pacient.findOrCreate({
            where: {
              name,
            },
            defaults: {
              name,
              lastname,
              birthdate,
              email,
              password,
              dni,
              cuil,
              image,
              adress,
              town,
              province,
              country,
              tel,
              socialSecurity,
              planSocialSecurity,
              role,
            },
          });
        }
      );
    });
  })
  .catch((error) => console.error(error));
