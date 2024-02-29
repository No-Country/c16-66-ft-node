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
            adress: {
                type: DataTypes.STRING,
            },
            birthdate: {
                type: DataTypes.DATE,
            },
            dni: {
                type: DataTypes.INTEGER,
            },
            cuil: {
                type: DataTypes.STRING,
            },
            province: {
                type: DataTypes.STRING
            },
            telephone: {
                type: DataTypes.STRING,
            },
            SocialSecurity: {
                type: DataTypes.ARRAY(DataTypes.STRING),
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