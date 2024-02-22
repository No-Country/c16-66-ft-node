/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryBlue: "#67BDEABF",
				primaryGreen: "#C6F1BFBF",
				black: "#2B2B2B",
				white: "#FFFFFF",
				whiteOpacity: "#ffffff80",
				darkBlue: "#115E86",
				lightBlue: "#82C3E4",
				darkGreen: "#467b3e4d",
				lightGreen: "#C6F1BF",
				gray: "#797979",
				lightGray: "#CDCDCD",
				mostLighthBlue: "#E3EEF2",
				celestBgWrapper: "#D1E9F5",
				red: "#B3261E",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
