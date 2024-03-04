import { create } from "zustand";
import { persist } from "zustand/middleware";

export const ReviewStore = create(
	persist(
		(set, get) => ({
			reviews: [],
			addReviews: (newReview) => {
				// traigo el users que hay en el state
				const { reviews } = get();
				let reviewsCopy = [...reviews];
				const isArray = Array.isArray(newReview);
				// Dependiendo si renderiza por primera vez recibe [] o solo agrega un usurario, recibe {}
				!isArray
					? (reviewsCopy = reviewsCopy[reviewsCopy.length] = newReview)
					: (reviewsCopy = newReview);
				set(() => ({ reviews: reviewsCopy }));
			},
			resetReviews: () => {
				set(() => ({ reviews: [] }));
			},
		}),
		{ name: "medConnectReviewInfo" }
	)
);
