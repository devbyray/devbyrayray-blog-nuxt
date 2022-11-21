<template>
	<div class="default-layout">
		<slot />
		<Script v-if="!LOCAL" async src="https://www.googletagmanager.com/gtag/js?id=UA-166352508-1"></Script>
		<Script v-if="!LOCAL" async>
			window.dataLayer = window.dataLayer || [] function gtag() { dataLayer.push(arguments) } gtag('js', new
			Date()) gtag('config', 'UA-166352508-1')
		</Script>
		<Script async src=""></Script>
		<div class="fixed-footer-wrapper">
			<div
				class="bordered adaptive horizontal fixed-footer"
				data-ea-publisher="byrayraydev"
				id="fixed-footer"
				data-ea-type="text"
				data-ea-style="fixedfooter"
			></div>
		</div>
	</div>
</template>

<script setup>
const {
	public: { LOCAL }
} = useRuntimeConfig()

definePageMeta({
	pageTransition: {
		mode: 'default',
		pageTransition: false,
		layoutTransition: false
	}
})
// useHead({
// 	script: [{
// 		async: true,
// 		src: 'https://media.ethicalads.io/media/client/ethicalads.min.js'
// 	}]
// })

onBeforeUpdate(() => {
	console.log('ethicalads: ', ethicalads)
	if(ethicalads) {
		ethicalads.load();
	}
})
</script>

<style scoped>
.fixed-footer {
	z-index: 99;
}
</style>
