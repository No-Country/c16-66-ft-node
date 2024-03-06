const {Appoinment} = require("../../db")

const getAllAppoinment = async (req, res) => {
    
    try{

        const appoinments = await Appoinment.findAll({
        })
        
        const {doctorId, pacientId} = req.query;
        if(!doctorId && !pacientId) {
        return res.status(201).json(appoinments);
        }

        if (doctorId) {
        
            const matchingappoinments = appoinments.filter((appoinment) =>
            appoinment.doctorId === doctorId
            );
    
            if (matchingappoinments.length > 0) {
                    return res.status(200).json(matchingappoinments);
                } 
    
            else {
                    return res.status(400).json({ error: "No se encontraron citas que coincidan con la búsqueda. "});
                }}
    
            if (pacientId) {
                
                const matchingappoinments = appoinments.filter((appoinment) =>
            appoinment.pacientId === pacientId
            );
    
            if (matchingappoinments.length > 0) {
                    return res.status(200).json(matchingappoinments);
                } 
                } else {
                    return res.status(400).json({ error: "No se encontraron citas que coincidan con la búsqueda. " });
                }
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

}

module.exports = {getAllAppoinment}