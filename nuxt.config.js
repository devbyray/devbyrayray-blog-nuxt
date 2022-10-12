// https://v3.nuxtjs.org/api/configuration/nuxt.config
export const CONFIG = {
	sitename: 'Dev By RayRay',
	siteTitle: `Diving in HTML, CSS, JavaScript, TypeScript and a lot more | Dev By RayRay`,
	sitedesc: `Let's dive in HTML, CSS, JavaScript, TypeScript, Angular and Vue and grow together in our Frontend Development skills`,
	appcolor: '#ffce00',
	twitter: '@devbyrayray',
	logoUrl:
		'https://res.cloudinary.com/raymons/image/upload/c_scale,g_center,w_300,f_auto/v1610102296/devbyrayray/blog/Dev_by_RayRay_-_logo',
	domain: 'https://byrayray.dev'
}

export const HEAD = {
	htmlAttrs: {
		lang: 'en'
	},
	title: CONFIG?.siteTitle,
	titleTemplate: '%s - ' + CONFIG?.sitename,
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			hid: 'description',
			name: 'description',
			content: CONFIG?.sitedesc
		},
		// SOCIAL
		{
			hid: 'og:title',
			property: 'og:title',
			content: CONFIG?.sitename
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: CONFIG?.sitedesc
		},
		{
			hid: 'og:type',
			property: 'og:type',
			content: 'website'
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: CONFIG?.logoUrl
		},
		{
			hid: 'og:url',
			property: 'og:url',
			content: CONFIG?.domain
		},
		{
			property: 'og:locale',
			content: 'en_EN'
		},
		// Twitter
		{
			hid: 'twitter:card',
			property: 'twitter:card',
			content: 'summary'
		},
		{
			hid: 'twitter:title',
			property: 'twitter:title',
			content: CONFIG?.sitename
		},
		{
			hid: 'twitter:creator',
			property: 'twitter:creator',
			content: CONFIG?.twitter
		},
		{
			hid: 'twitter:image',
			property: 'twitter:image',
			content: CONFIG?.logoUrl
		},
		{
			hid: 'twitter:description',
			property: 'twitter:description',
			content: CONFIG?.sitedesc
		},
		// Other
		{
			name: 'apple-mobile-web-app-title',
			content: CONFIG?.sitename
		},
		{
			name: 'application-name',
			content: CONFIG?.sitename
		},
		{
			name: 'msapplication-TileColor',
			content: CONFIG?.appcolor
		},
		{
			name: 'theme-color',
			content: CONFIG?.appcolor
		}
	],
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png'
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#b91d47'
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest'
		},
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOriginIsolated: true
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
			crossorigin: 'anonymous'
		}
	],
	script: [],
	link: [],
	// please note that this is an area that is likely to change
	style: [],
	noscript: []
}

export default {
	runtimeConfig: {
		public: {
			CONFIG,
			HEAD
		}
	},
	target: 'static',
	modules: ['@nuxt/content', '@nuxt/image-edge'],
	plugins: [],
	// css
	css: ['@/assets/css/main.css', 'maz-ui/css/main.css'],
	components: true,
	content: {
		documentDriven: true,
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-dark',
				// Theme used if `html.dark`
				dark: 'github-dark'
			},
			preload: ['vue']
		},
		markdown: {
			remarkPlugins: ['remark-reading-time']
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
	plugins: [],
	head: HEAD,
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/raymons/image/upload/devbyrayray/blog'
		}
	},
	build: {
		transpile: ['maz-ui'] // ⚠️ important ⚠️
	}
}
