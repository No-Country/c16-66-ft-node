const {getAppoinmentById} = require("../../controllers/appoinment/getAppoinmentById")

const getAppoinmentByIdHandler = async (req, res) => {
    try {

        const {id} = req.params;
        const appoinment = await getAppoinmentById(id)
        res.status(201).json(appoinment)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getAppoinmentByIdHandler}