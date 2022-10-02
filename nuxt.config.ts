// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
	plugins: [],
	// css
	css: ['~/assets/css/main.css'],
	components: false,
	content: {
		// https://content.nuxtjs.org/api/configuration
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-material-oceanic.css'
			}
		}
	},
	tailwindcss: {
		// add '~tailwind.config` alias
		exposeConfig: false
	},
	// image: {
	// 	cloudinary: {
	// 		baseURL: 'https://res.cloudinary.com/raymons/image/upload/'
	// 	}
	// },
	build: {
		postcss: {
			// Add plugin names as key and arguments as value
			// Install them before as dependencies with npm or yarn
			plugins: {
				// Disable a plugin by passing false as value
				'postcss-nested': {}
			},
			preset: {
				// Change the postcss-preset-env settings
				autoprefixer: {
					grid: true
				}
			}
		}
	}
})
