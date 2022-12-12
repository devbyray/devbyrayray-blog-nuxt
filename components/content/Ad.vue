<template>
	<div class="ad-wrapper">
		<div
			class="bordered adaptive horizontal"
			data-ea-publisher="byrayraydev"
			:data-ea-type="type"
			:id="id"
			:data-ea-keywords="tags"
		></div>
	</div>
</template>

<script setup>
const props = withDefaults(defineProps(), {
	type: 'image',
	id: 'default',
	topics: undefined
})

const id = props?.id ?? 'default'
const type = props?.type ?? 'image'

const tags = props?.topics ? props?.topics?.toString()?.replaceAll(',', '|') : ''

useHead({
	script: [
		{
			src: 'https://media.ethicalads.io/media/client/ethicalads.min.js',
			async: true
		}
	]
})
</script>

<style scoped>
.ad-wrapper {
	min-height: 200px;
}
</style>
