const {Review, Pacient, Doctor} = require("../../db");

const createReview = async (reviewText, rating, pacientId, doctorId) => {

    const review = await Review.create({reviewText, rating, pacientId, doctorId})
    
    const pacientadd = await Pacient.findByPk(pacientId)
    
    await review.setPacient(pacientadd)

    const doctoradd = await Doctor.findByPk(doctorId)

    await review.setDoctor(doctoradd)

    return review

}

module.exports = {createReview}