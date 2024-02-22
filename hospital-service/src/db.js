require("dotenv").config();
const {Sequelize} = require("sequelize");
const doctorModels = require("./models/Doctor");

const fs = require("fs");
const path = require("path");
const {DB_USER, DB_HOST, DB_PASSWORD, DB_NAME} = process.env

const sequelize = new Sequelize (
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
        timestamps: false,
    }
)

const basename = path.basename(__filename);

const modelDefiners = [];

//se recorre el contenido e importa cada archivo
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) => 
        (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js")
        )
    .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)))
    })

//injectamos conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);

//convierte la primera letra en mayuscula
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1]
])

sequelize.models = Object.fromEntries(capsEntries);

const {
    Pacient,
    Doctor,
    Appoinment,
} = sequelize.models;

/*1:N*/
Appoinment.belongsTo(Doctor, {foreignKey: "doctorId"});
Doctor.hasMany(Appoinment, {foreignKey: "doctorId"});

Appoinment.belongsTo(Pacient, {foreignKey: "PacientId"});
Pacient.hasMany(Appoinment, {foreignKey: "PacientId"});

module.exports = {
    ...sequelize.models,
    Doctor,
    Appoinment,
    Pacient,
    conn: sequelize,
}