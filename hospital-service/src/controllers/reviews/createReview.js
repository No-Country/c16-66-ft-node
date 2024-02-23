const {Review, Pacient} = require("../../db");

const createReview = async (reviewText, rating, pacientId) => {

    const review = await Review.create({reviewText, rating, pacientId})
    
    const pacientadd = await Pacient.findByPk(pacientId)
    
    await review.setPacient(pacientadd)

    return review

}

module.exports = {createReview}