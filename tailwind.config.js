/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				pts: {
					red: "#E40935",
					blue: {
						base: "#2A3E6B",
						dark: "#1F2E50",
					},
				},
			},
			container: {
				padding: "2rem",
				center: true,
			},
			backgroundImage: {
				pattern: "url('/assets/bg-texture.png')",
			},
		},
	},
	plugins: [],
};
