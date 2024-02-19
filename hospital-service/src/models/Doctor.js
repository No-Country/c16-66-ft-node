const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Doctor",
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