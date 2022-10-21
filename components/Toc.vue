<template>
	<div class="toc mb-8 sticky top-4" v-if="filterToc(links).length > 0">
		<header class="widget-header flex items-center">
			<button v-if="hasToggle" class="toggle-button bg-white dark:bg-gray-800 p-2" @click="showToc = !showToc">
				<MazIcon src="/icons/menu.svg" size="1.5rem" />
			</button>
			<strong class="my-0 ml-4">Table of Content</strong>
		</header>
		<section class="widget-content" v-if="showToc">
			<ol class="mb-0 list-decimal pl-8 mt-4">
				<li v-for="link in filterToc(links)" :key="link?.id" class="text-white pl-4 text-lg leading-7">
					<nuxt-link :to="`#${link?.id}`" class="text-white">{{ link?.text }}</nuxt-link>
				</li>
			</ol>
		</section>
	</div>
</template>

<script setup lang="ts">
import MazIcon from 'maz-ui/components/MazIcon'

interface Props {
	links?: any[] | null
	hasToggle: boolean
}
const props = withDefaults(defineProps<Props>(), {
	links: null,
	hasToggle: false
})

const showToc = ref(props?.hasToggle ? false : true)

function filterToc(links) {
	console.log('links: ', links)
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
