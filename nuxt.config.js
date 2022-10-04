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
		documentDriven: true
	},
	postcss: {
		plugins: {
			'postcss-import': true,
			'tailwindcss/nesting': 'postcss-nesting',
			autoprefixer: {},
			tailwindcss: {}
		}
	},
	hooks: {
		'content:file:beforeInsert': document => {
			if (document.extension === '.md') {
				Object.entries(document).forEach(([key, value]) => {
					const _key = `case_insensitive__${key}`

					// Strings
					if (!document[_key] && typeof value === 'string') {
						document[_key] = value.toLocaleLowerCase()
					}

					// Arrays
					if (!document[_key] && Array.isArray(value)) {
						document[_key] = value.map(val => {
							if (typeof val === 'string') {
								return val.toLocaleLowerCase()
							}
							return val
						})
					}
				})
			}
		}
	}
}
