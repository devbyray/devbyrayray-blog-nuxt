<template>
	<div class="header-container">
		<header v-if="home" class="text-center page-header flex items-center flex-col">
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
			<img loading="lazy" :src="CONFIG?.logoUrl" width="300" />
			<em class="font-bold dark:text-white text-2xl mb-16">{{ CONFIG?.sitedesc }}</em>
		</header>
		<header v-if="!home" class="text-center page-header flex items-center flex-row mb-8">
			<img loading="lazy" :src="CONFIG?.logoUrl" width="50" />
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
<style>
.header-container {
	max-width: 800px;
	margin: 0 auto;
}
</style>
