<template>
	<div class="default-layout">
		<slot />
		<Script v-if="!LOCAL"
				async
				defer
				src="https://analytics.umami.is/script.js"
				data-website-id="37eb8bc1-f543-4d95-aba1-f52b88986834"
			></Script>

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
