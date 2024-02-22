const {createAppoinment} = require("../../controllers/appoinment/createAppoinment");

const createAppoinmentHandler = async (req, res) => {
    try {
        const {date, hour, doctorId, pacientId} = req.body;
        const newAppoinment = await createAppoinment(date, hour, doctorId, pacientId);
        res.status(201).json(newAppoinment);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createAppoinmentHandler}