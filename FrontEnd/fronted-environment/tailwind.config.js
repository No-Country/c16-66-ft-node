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
				darkBlue: "#115E86",
				lightBlue: "#82C3E4",
				lightGreen: "#C6F1BF",
				gray: "#797979",
				lightGray: "#CDCDCD",
				mostLighthBlue: "#E3EEF2",
			},
		},
	},
	plugins: [],
};
