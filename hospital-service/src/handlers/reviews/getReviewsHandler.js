const {Review} = require("../../db")

const getAllReviesHandler = async (req, res) => {
    
    try{
        const reviews = await Review.findAll({
        })
        const {doctorId} = req.query;
        if(!doctorId) {
            return res.status(200).json(reviews);
        }

        //Filtrar por nombre, nombres que CONTIENEN la letra proporcionada por parametro
        const matchingreviews = reviews.filter((review) =>
        review.doctorId === doctorId
        );
        
        if (matchingreviews.length > 0) {
                return res.status(200).json(matchingreviews);
            } 

        else {
                return res.status(400).json({ error: "No se encontraron reviews que coincidan con la búsqueda. "});
            }
        
        } catch (error) {
                return res.status(500).send(error.message)
        }

        }

module.exports = {getAllReviesHandler}