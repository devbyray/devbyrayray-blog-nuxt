<template>
	<nuxt-link :to="`/tag/${tag}`"
		class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-primary-color text-white hover:text-black"
		:class="classes(tag)"
	>#{{tag}}</nuxt-link>
</template>

<script setup lang="ts">
defineProps({
    tag: String
})
function classes(tag: string) {
	const obj = {}
	const tags = ['javascript', 'typescript', 'angular', 'vue', 'css', 'html', 'formly', 'codenewbie', 'canva']
	return {
		'tag-angular': tag?.toLowerCase()?.includes('angular'),
		'tag-vue': tag?.toLowerCase()?.includes('vue'),
		'tag-javascript': tag?.toLowerCase()?.includes('javascript'),
		'tag-typescript': tag?.toLowerCase()?.includes('typescript'),
		'tag-css': tag?.toLowerCase()?.includes('css'),
		'tag-formly': tag?.toLowerCase()?.includes('formly'),
		'tag-webdev': tag?.toLowerCase()?.includes('webdev'),
		'tag-codenewbie': tag?.toLowerCase()?.includes('codenewbie'),
		'tag-canva': tag?.toLowerCase()?.includes('canva'),
		'tag-other': tags?.includes(tag?.toLowerCase())
	}
}
</script>

<style scoped>
.tag-angular {
	background: var(--color-angular);
}
.tag-typescript {
	background: var(--color-typescript);
}
.tag-vue {
	background: var(--color-vue);
}
.tag-javascript {
	color: black;
	background: var(--color-javascript);
}
.tag-css {
	background: var(--color-css);
}
.tag-html {
	background: var(--color-html);
}
.tag-formly {
	background: var(--color-formly);
}
.tag-webdev {
	background: var(--color-webdev);
}
.tag-canva {
	background: var(--color-canva);
}
.tag-codenewbie {
	background: var(--color-codenewbie);
}
.tag-design {
	background: var(--color-design);
}

</style>