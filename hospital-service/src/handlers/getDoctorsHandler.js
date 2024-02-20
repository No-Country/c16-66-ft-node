const {Doctor} = require("../db")

const getAllDoctors = async (req, res) => {
    
    try{
        const doctors = await Doctor.findAll({
        })
        const {name} = req.query;
        if(!name) {
            return res.status(200).json(doctors);
        }

        //Filtrar por nombre, nombres que CONTIENEN la letra proporcionada por parametro
        const matchingdoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(name.toLowerCase())
        );

        if (matchingdoctors.length > 0) {
                return res.status(200).json(matchingdoctors);
            } 

        else {
                return res.status(400).json({ error: "No se encontraron doctores que coincidan con la búsqueda. "});
            }
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

        }

module.exports = {getAllDoctors}