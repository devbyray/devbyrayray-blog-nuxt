<template>
	<div class="page-max-md flex justify-center">
		<div
			class="bordered adaptive horizontal"
			data-ea-publisher="byrayraydev"
			data-ea-type="image"
			id="post-content"
			:data-ea-keywords="tags()"
		></div>
	</div>
</template>

<script setup>
const props = withDefaults(defineProps(), {
	type: 'image',
	topics: undefined
})

const tags = props?.topics?.toString()?.replaceAll(',', '|')
</script>

<style scoped></style>
