module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.ts',
		'./tailwind.config.js'
	],
	theme: {
		extend: {
			colors: {
				default: 'rgb(17 24 39)',
			}
		}
	},
	plugins: [],
	mode: 'jit'
}
