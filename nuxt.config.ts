// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "TosTov",
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css", "~/assets/css/animations.css"],
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/google-fonts",
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	googleFonts: {
		families: {
			Poppins: [400, 500, 600, 700],
		},
	},
});
