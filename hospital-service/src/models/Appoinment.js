const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Appoinment",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
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