const {Pacient} = require("../../db")

const getAllPacientsHandler = async (req, res) => {
    
    try{
        const pacients = await Pacient.findAll({
        })
        const {name} = req.query;
        if(!name) {
            return res.status(200).json(pacients);
        }

        //Filtrar por nombre, nombres que CONTIENEN la letra proporcionada por parametro
        const matchingpacients = pacients.filter((pacient) =>
        pacient.name.toLowerCase().includes(name.toLowerCase())
        );

        if (matchingpacients.length > 0) {
                return res.status(200).json(matchingpacients);
            } 

        else {
                return res.status(400).json({ error: "No se encontraron pacientes que coincidan con la búsqueda. "});
            }
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

        }

module.exports = {getAllPacientsHandler}