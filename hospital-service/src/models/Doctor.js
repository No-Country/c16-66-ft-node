const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Doctor",
    {
      doctorId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true, //por el momento
      },
      dni: {
        type: DataTypes.INTEGER,
      },
      cuil: {
        type: DataTypes.STRING,
      },
      adress: {
        type: DataTypes.STRING,
      },
      town: {
        type: DataTypes.STRING,
      },
      province: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      licensenumber: {
        type: DataTypes.INTEGER,
      },
      specialty: {
        type: DataTypes.ENUM(
          "General Medicine",
          "Pediatrics",
          "Gynecology and Obstetrics",
          "Internal Medicine",
          "General Surgery",
          "Orthopedics",
          "Dermatology",
          "Ophthalmology",
          "Psychiatry",
          "Cardiology"
        ),
        allowNull: true,
      },
      socialSecurity: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      registrationNumber: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "Doctor",
      },
    },
    { timestamps: false }
  );
};
