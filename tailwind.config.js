/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#fefefe",
				black: "#121212",
				gray: {
					bold: "#777575",
					basic: "#cacaca",
				},
				red: { basic: "#c60035", dark: "#900026", light: "#ff7096" },
				navy: { basic: "#334069", dark: "#1d2540", light: "#8898c8" },
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},

			container: {
				center: true,
				padding: {
					sm: "16px",
					md: "80px",
					lg: "120px",
				},
			},
			backgroundImage: {
				pattern: "url('/assets/bg-texture.png')",
			},
		},
	},
	plugins: [],
};
