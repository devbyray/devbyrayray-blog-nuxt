<template>
    <div class="page-max-md flex justify-center">
		<div class="bordered adaptive horizontal" data-ea-publisher="byrayraydev" :data-ea-type="type" :id="id" :data-ea-style="sticky ? 'stickybox': ''" :data-ea-keywords="tags"></div>
	</div>
</template>

<script setup>
const props = withDefaults(defineProps(), {
	type: 'image',
	id: 'post-content',
	sticky: false,
	topics: undefined
})

const tags = props?.topics?.toString()?.replaceAll(',', '|');

useHead({
	script: [{
		async: true,
		src: 'https://media.ethicalads.io/media/client/ethicalads.min.js'
	}]
})

</script>

<style scoped>
</style>
