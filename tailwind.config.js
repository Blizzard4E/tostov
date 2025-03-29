/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [],
	theme: {
		extend: {
			colors: {
				primary: "#1BBC9B",
				foreground: "#7D848D",
				dark: "#352555",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
