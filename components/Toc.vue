<template>
	<div class="toc">
        <header class="widget-header"><h2>Table of Content</h2></header>
		<section class="widget-content">
			<ol class="rounded-2xl list-decimal list-outside pl-8">
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

function filterToc(links) {
	console.log('links: ', links)
	if (links) {
		return links.filter(item => item?.id !== 'thanks')
	} else {
		return []
	}
}
</script>
