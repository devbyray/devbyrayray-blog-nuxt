<template>
	<NuxtLink class="text-sky-400 dark:text-white" :href="href" target="_blank">
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: ''
	},
	blank: {
		type: Boolean,
		default: true
	}
})
</script>
