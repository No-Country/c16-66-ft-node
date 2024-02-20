const { Doctor } = require("../../db");

const createDoctor = async (name,lastname,email,licensenumber,specialty,imagen) => {
    
    const newDoctor = await Doctor.create({name,lastname,email,licensenumber,specialty,imagen})

    return newDoctor
}

module.exports = {createDoctor}