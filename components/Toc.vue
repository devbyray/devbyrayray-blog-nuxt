<template>
	<div class="toc mb-8">
		<button class="toggle" @click="showToc = !showToc">
			<MazIcon src="/icons/chevron-right.svg" size="2rem" />
		</button>
		<header class="widget-header"><h2 class="mt-0">Table of Content</h2></header>
		<section class="widget-content">
			<ol class="mb-0">
				<li v-for="link in filterToc(links)" :key="link?.id" class="text-white pl-8 text-lg leading-7">
					<nuxt-link :to="`#${link?.id}`" class="text-white">{{ link?.text }}</nuxt-link>
				</li>
			</ol>
		</section>
	</div>
</template>

<script setup lang="ts">
interface Props {
	links: any[]
}
defineProps<Props>()

const showToc = ref(true)

function filterToc(links) {
	console.log('links: ', links)
	if (links) {
		return links.filter(item => item?.id !== 'thanks')
	} else {
		return []
	}
}
</script>
