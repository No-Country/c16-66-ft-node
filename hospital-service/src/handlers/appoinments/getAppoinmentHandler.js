const {Appoinment} = require("../../db")

const getAllAppoinment = async (req, res) => {
    
    try{

        const appoinments = await Appoinment.findAll({
        })
        
        return res.status(201).json(appoinments);
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

}

module.exports = {getAllAppoinment}