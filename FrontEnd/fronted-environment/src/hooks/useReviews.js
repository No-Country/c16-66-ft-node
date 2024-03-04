import { addReviews as createReview, fetchReviews } from "../Service";
import { ReviewStore } from "../StoreGeneral/ReviewsStore";

export function useReviewsStore() {
	const { addReviews } = ReviewStore();
	const getReviewResponse = async () => {
		const adminApiResponse = await fetchReviews();
		await addReviews(adminApiResponse);
	};

	const createNewReview = async (newData) => {
		console.log("desde hook : ", newData);
		await createReview(newData);
	};

	return { getReviewResponse, createNewReview };
}
