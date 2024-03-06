const {getPacientById} = require("../../controllers/pacients/getPacientById")

const getPacientByIdHandler = async (req, res) => {
    try {

        const {pacientId} = req.params;
        const pacient = await getPacientById(pacientId)
        res.status(201).json(pacient)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getPacientByIdHandler}