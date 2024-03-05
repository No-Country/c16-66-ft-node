const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pacient",
    {
      pacientId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      birthdate: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.INTEGER,
      },
      cuil: {
        type: DataTypes.STRING,
      },
      image: {
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
      tel: {
        type: DataTypes.STRING,
      },
      socialSecurity: {
        type: DataTypes.ENUM("Ioma", "OSDE", "Swiss Medical"),
        allowNull: true,
      },
      planSocialSecurity: {
        type: DataTypes.STRING,
      },
      reviews: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      appointments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "Pacient",
      },
    },
    { timestamps: false }
  );
};
