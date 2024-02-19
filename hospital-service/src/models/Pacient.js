const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Pacient",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {timestamps : false},
    );

};