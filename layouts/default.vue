<template>
	<div class="default-layout">
		<slot />
		<Script v-if="!LOCAL" async src="https://www.googletagmanager.com/gtag/js?id=UA-166352508-1"></Script>
		<Script v-if="!LOCAL" async>
			window.dataLayer = window.dataLayer || []
			function gtag() {
				dataLayer.push(arguments)
			}
			gtag('js', new Date())

			gtag('config', 'UA-166352508-1')
		</Script>
	</div>
</template>

<script setup>
const {
	public: { LOCAL }
} = useRuntimeConfig()
</script>