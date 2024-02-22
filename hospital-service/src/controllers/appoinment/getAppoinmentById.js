const {Appoinment} = require("../../db");

const getAppoinmentById = async (id) => {

    const appoinment = await Appoinment.findByPk(id);

    if(!appoinment) {
        throw new Error("Appoinment not found") 
    }

    return appoinment
}

module.exports = {getAppoinmentById}