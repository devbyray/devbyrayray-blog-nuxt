<template>
	<div class="blog-post" :class="{'is-horizontal': isHorizontal}">
		<PostHeader :blog="article" :showTitle="false" :showGradient="true" :isHomepage="true" :isHorizontal="isHorizontal" />
		<div class="post-content">
			<nuxt-link :to="article?._path" class="text-black dark:text-white"
				><component
					:is="titleTag ?? 'h2'"
					class="font-bold text-black dark:text-white text-3xl mt-0 leading-10 mb-2"
				>
					{{ article?.title }}
				</component></nuxt-link
			>

			<p class="font-normal mb-3 description">{{ article?.description }}</p>
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
	</div>
</template>

<script setup lang="ts">
interface Props {
	article: any
	titleTag: string
	isHorizontal: boolean
}
withDefaults(defineProps<Props>(), {
	article: {},
	titleTag: 'h2',
	isHorizontal: false
})
</script>

<style scoped>
.blog-post.is-horizontal {
	display: grid;
	grid-template-columns: 2fr 3fr;
	gap: 3rem;
}
.description {
	min-height: 200px;
}
</style>
