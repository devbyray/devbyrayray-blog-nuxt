<template>
	<div class="add-wrapper" :class="{center: center}">
		<slot />
	</div>
</template>

<script setup lang="ts">
interface Props {
	center: boolean
}
const props = withDefaults(defineProps<Props>(), {
	center: true
})
</script>

<style scoped>
</style>
