const {deleteAppoinmentById} = require("../../controllers/appoinment/deleteAppoinmentById")

const deleteAppoinmentByIdHandler = async (req, res) => {
    try {

        const {id} = req.params;
        const appoinment = await deleteAppoinmentById(id)
        res.status(201).json(appoinment)

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {deleteAppoinmentByIdHandler}