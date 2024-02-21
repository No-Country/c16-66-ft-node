const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Doctor",
        {
            doctorId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                startAt: 1001,
                increment: 10,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,//por el momento
            },
            licensenumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            specialty: {
                type: DataTypes.ENUM("General Medicine","Pediatrics","Gynecology and Obstetrics","Internal Medicine","General Surgery","Orthopedics","Dermatology","Ophthalmology","Psychiatry","Cardiology"),
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        }, {timestamps : false},
    );

};