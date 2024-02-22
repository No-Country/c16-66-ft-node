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
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: true
                }
            },
            hour: {
                type: DataTypes.TIME,
                allowNull: false,
                validate: {
                    is: /^([01]\d|2[0-3]):([0-5]\d)$/,
                },
            },
            pending: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            }
        }, {timestamps : false},
    );

};