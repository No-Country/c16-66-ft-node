require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(
  //`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, // para local
  `${DATABASE_URL}`, // para deploy
  {
    logging: false,
    native: false,
    timestamps: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

//se recorre el contenido e importa cada archivo
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

//injectamos conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);

//convierte la primera letra en mayuscula
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Pacient, Doctor, Appoinment, Review } = sequelize.models;

/*1:N*/
Appoinment.belongsTo(Doctor, { foreignKey: "doctorId" });
Doctor.hasMany(Appoinment, { foreignKey: "doctorId" });

Appoinment.belongsTo(Pacient, { foreignKey: "pacientId" });
Pacient.hasMany(Appoinment, { foreignKey: "pacientId" });

Review.belongsTo(Pacient, { foreignKey: "pacientId" });
Pacient.hasMany(Review, { foreignKey: "pacientId" });

Review.belongsTo(Doctor, { foreignKey: "doctorId" });
Doctor.hasMany(Review, { foreignKey: "doctorId" });

module.exports = {
  ...sequelize.models,
  Doctor,
  Appoinment,
  Pacient,
  Review,
  conn: sequelize,
};
