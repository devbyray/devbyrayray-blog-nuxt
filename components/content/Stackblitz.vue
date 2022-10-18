<template>
	<div class="stackblitz my-8">
		<div :id="`${id}-editor`" loading="lazy"></div>
	</div>
</template>

<script setup>
import sdk from '@stackblitz/sdk'

const props = defineProps({
	id: '',
    filename: '',
    height: Number
})

onMounted(() => {
	sdk.embedProjectId(`${props?.id}-editor`, `${props?.id}`, {
		forceEmbedLayout: true,
		openFile: `${props?.filename}`,
		theme: 'dark',
        clickToLoad: true,
        height: props?.height ?? 600
	})
})
</script>
