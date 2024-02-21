const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Pacient",
        {
            pacientId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {timestamps : false},
    );

};