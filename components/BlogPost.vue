<template>
	<div>
		<PostHeader :blog="article" :showTitle="false" :showGradient="true" />
		<nuxt-link :to="article?._path" class="dark:text-white"
			><component :is="titleTag ?? 'h2'" class="font-bold dark:text-white text-3xl mt-0 leading-10 mb-2">
				{{ article?.title }}
			</component></nuxt-link
		>

		<p class="font-normal mb-3">{{ article?.description }}</p>
		<div class="mt-auto">
			<nuxt-link :to="article?._path" class="dark:text-white"
				><span
					class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-base font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-primary-color hover:bg-secondary-color text-white"
				>
					Read more
				</span></nuxt-link
			>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	article: any
	titleTag: string
}
defineProps<Props>()
</script>
