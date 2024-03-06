const {Appoinment} = require("../../db");

const deleteAppoinmentById = async (id) => {
    
    if(!id) throw new Error("Appoinment not found")
    const appoinmentToDelete = await Appoinment.findByPk(id);
    await Appoinment.destroy({
    where: {
        id: id,
    },
    });

    if (appoinmentToDelete) {
        return { success: true, data: appoinmentToDelete}
    } else {
        return { success: false, data: appoinmentToDelete}
    }
}

module.exports = {deleteAppoinmentById}