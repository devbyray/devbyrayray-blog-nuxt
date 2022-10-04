// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	ssr: true,
	target: 'static',
	modules: ['@nuxt/content'],
	plugins: [],
	// css
	css: ['@/assets/css/main.css'],
	components: false,
	content: {
		documentDriven: true,
		highlight: {
			theme: {
			  // Default theme (same as single string)
			  default: 'github-light',
			  // Theme used if `html.dark`
			  dark: 'github-dark',
			  // Theme used if `html.sepia`
			  sepia: 'monokai'
			}
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
}
