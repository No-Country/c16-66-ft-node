const { Doctor } = require("../../db");

const createDoctor = async (name,lastname,email,licensenumber,specialty,image) => {
    
    const newDoctor = await Doctor.create({name,lastname,email,licensenumber,specialty,image})

    return newDoctor
}

module.exports = {createDoctor}