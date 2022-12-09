<template>
	<div class="default-layout">
		<slot />
		<Script v-if="!LOCAL" async>
			window.dataLayer = window.dataLayer || [];
			function gtag() { dataLayer.push(arguments) };
			gtag('js', new Date());
			gtag('config', 'UA-166352508-1');
		</Script>
		<div class="fixed-footer-wrapper bg-gray-600">
			<div class="page-max-md">
				<div
					class="bordered adaptive horizontal"
					data-ea-publisher="byrayraydev"
					id="fixed-footer"
					data-ea-type="text"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const {
	public: { LOCAL }
} = useRuntimeConfig()

onBeforeUpdate(() => {
	if (ethicalads) {
		setTimeout(() => {
			ethicalads.load_placements().then(() => {})
		}, 1000)
	}
})

useHead({
	script: [{
		async: true,
		src: 'https://www.googletagmanager.com/gtag/js?id=UA-166352508-1'
	}]
})
</script>

<style scoped>
.default-layout {
	padding-bottom: 100px;
}
.fixed-footer-wrapper {
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100px;
	z-index: 99;
	justify-content: center;
	align-items: center;
}
</style>
