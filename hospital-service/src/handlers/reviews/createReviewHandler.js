const {createReview} = require("../../controllers/reviews/createReview");

const createReviewHandler = async (req, res) => {
    try{
        const {reviewText, rating, pacientId} = req.body
        const newReview = await createReview(reviewText, rating, pacientId)
        res.status(201).json(newReview)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createReviewHandler}