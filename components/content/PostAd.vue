<template>
	<AdsWrapper>
		<Ad id="post-content" :type="type"></Ad>
	</AdsWrapper>
</template>

<script setup lang="ts">
interface Props {
	type: 'image' | 'text'
}
const props = withDefaults(defineProps<Props>(), {
	type: 'image'
})
</script>

<style scoped></style>
