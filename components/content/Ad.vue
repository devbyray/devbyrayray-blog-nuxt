<template>
	<div>
		<Script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"></Script>
		<div class="bordered adaptive horizontal" data-ea-publisher="byrayraydev" :data-ea-type="type" :id="id" :data-ea-style="sticky ? 'stickybox': ''"></div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	type: 'image' | 'text',
	id: string,
	sticky: boolean
}
const props = withDefaults(defineProps<Props>(), {
	type: 'image',
	id: 'default',
	sticky: false
})
</script>

<style scoped>
</style>
