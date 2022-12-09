<template>
	<div class="toc mb-8 top-4 bg-gray-900 pb-4" v-if="filterToc(links).length > 0">
		<header class="widget-header flex items-center">
			<button v-if="hasToggle" class="toggle-button bg-gray-900 p-2" @click="showToc = !showToc">
				<nuxt-img
					provider="cloudinary"
					:modifiers="{
						f: 'auto'
					}"
					loading="lazy"
					width="24px"
					height="24px"
					src="menu.svg"
				/>
			</button>
			<strong class="my-0 ml-4">Table of Content</strong>
		</header>
		<section class="widget-content pb-4" v-if="showToc">
			<ol class="mb-0 list-decimal pl-8 mt-4">
				<li v-for="link in filterToc(links)" :key="link?.id" class="text-white pl-4 text-lg leading-7">
					<nuxt-link :to="`#${link?.id}`" class="text-white">{{ link?.text }}</nuxt-link>
				</li>
			</ol>
		</section>
	</div>
</template>

<script setup lang="ts">
interface Props {
	links?: any[] | null
	hasToggle?: boolean
}
interface Link {
	id: string
	depth: number
	text: string
}
const props = withDefaults(defineProps<Props>(), {
	links: null,
	hasToggle: false
})

const showToc = ref(props?.hasToggle ? false : true)

function filterToc(links: Link[]): Link[] {
	if (links) {
		return links.filter(item => item?.id !== 'thanks')
	} else {
		return []
	}
}
</script>

<style scoped>
.toc {
	z-index: 9999;
	margin-left: -1rem;
	margin-right: -1rem;
}
</style>
