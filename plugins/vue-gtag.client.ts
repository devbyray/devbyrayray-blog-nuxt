import VueGtag from 'vue-gtag-next'
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(VueGtag, {
		property: {
			id: 'G-GKECW9DJS8',
			params: {
				anonymize_ip: true
			}
		}
	})
})
