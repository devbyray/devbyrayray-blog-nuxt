// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	ssr: true,
	target: 'static',
	modules: ['@nuxt/content', '@nuxt/image-edge'],
	plugins: [],
	// css
	css: ['@/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
	components: true,
	content: {
		documentDriven: true,
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-dark',
				// Theme used if `html.dark`
				dark: 'github-dark',
			},
			preload: ['vue']
		}
	},
	postcss: {
		plugins: {
			'postcss-import': true,
			'tailwindcss/nesting': 'postcss-nesting',
			autoprefixer: {},
			tailwindcss: {}
		}
	},
	plugins: ['@/plugins/fontawesome.js']
}
