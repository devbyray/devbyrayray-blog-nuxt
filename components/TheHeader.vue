<template>
	<div class="header-container">
		<header v-if="home" class="page-max-md m-auto text-center page-header flex items-center flex-col">
			<nav class="w-full">
				<ul class="w-full flex justify-center items-center gap-8">
					<li>
						<nuxt-link class="text-white" to="/">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link class="text-white" to="/about">About</nuxt-link>
					</li>
				</ul>
			</nav>
			<h1 class="text-white text-4xl font-bold mb-8">Dev By RayRay</h1>
			<nuxt-img provider="cloudinary" loading="lazy" src="Dev_by_RayRay_-_logo" width="300" />
			<em class="font-bold text-white text-2xl mb-16">{{ CONFIG?.sitedesc }}</em>
		</header>
		<header v-if="!home" class="page-max-md text-center page-header flex items-center flex-row mb-8">
			<nuxt-link class="text-white" to="/">
				<nuxt-img provider="cloudinary" loading="lazy" src="rayray.png" width="100" />
				
			</nuxt-link>
			<nav class="w-full">
				<ul class="w-full flex justify-center items-center gap-8">
					<li>
						<nuxt-link class="text-white" to="/">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link class="text-white" to="/about">About</nuxt-link>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>
<script setup>
const {
	public: { CONFIG }
} = useRuntimeConfig()
defineProps({
	home: Boolean
})
</script>
<style scoped>
.header-container {
	background: var(--color-javascript)
}
</style>
