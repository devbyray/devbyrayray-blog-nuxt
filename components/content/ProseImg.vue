<template>
	<nuxt-img
		provider="cloudinary"
		:src="`${src.replace('images/', '/')}`"
		:alt="alt"
		:title="alt"
		:width="width"
		:height="height"
		loading="lazy"
		:modifiers="{
			c: 'crop',
		}"
		class="rounded-lg"
	/>
</template>

<script setup lang="ts">
defineProps({
	src: {
		type: String,
		default: ''
	},
	alt: {
		type: String,
		default: ''
	},
	width: {
		type: [String, Number],
		default: undefined
	},
	height: {
		type: [String, Number],
		default: undefined
	}
})
</script>
