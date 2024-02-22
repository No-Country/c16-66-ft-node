const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Appoinment",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            hour: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {timestamps : false},
    );

};