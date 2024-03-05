const {Doctor} = require("../db")

const getAllDoctors = async (req, res) => {
    
    try{
        const doctors = await Doctor.findAll({
        })
        const {name, email} = req.query;
        if(!name && !email) {
            return res.status(200).json(doctors);
        }

        if (name) {
        
        //Filtrar por nombre, nombres que CONTIENEN la letra proporcionada por parametro
        const matchingdoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(name.toLowerCase())
        );

        if (matchingdoctors.length > 0) {
                return res.status(200).json(matchingdoctors);
            } 

        else {
                return res.status(400).json({ error: "No se encontraron doctores que coincidan con la búsqueda. "});
            }}

        if (email) {
            
            const doctorByEmail = await Doctor.findOne({ where: { email: email } });

            if (doctorByEmail) {
                return res.status(200).json(doctorByEmail);
            } else {
                return res.status(400).json({ error: "No se encontró ningún doctor con el correo electrónico proporcionado." });
            }
        }
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

        }

module.exports = {getAllDoctors}