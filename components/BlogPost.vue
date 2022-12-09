<template>
	<div class="blog-post" :class="{ 'is-horizontal': isHorizontal }">
		<PostHeader
			:blog="article"
			:showTitle="false"
			:showGradient="true"
			:isHomepage="true"
			:isHorizontal="isHorizontal"
		/>
		<div class="post-content pt-4">
			<nuxt-link :to="article?._path" class="text-black dark:text-white"
				><component
					:is="titleTag ?? 'h2'"
					class="font-bold text-black dark:text-white text-3xl mt-0 leading-10 mb-2 post-title"
				>
					{{ article?.title }}
				</component></nuxt-link
			>

			<p class="font-normal mb-3 description text-black dark:text-white">{{ article?.description }}</p>
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
	isHorizontal?: boolean
}
withDefaults(defineProps<Props>(), {
	article: {},
	titleTag: 'h2',
	isHorizontal: false
})
</script>

<style scoped>

.post-title {
	word-break: break-word;
}
.blog-post.is-horizontal {
	gap: 3rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 250px auto;
}

@media screen and (min-width: 960px) {
	.blog-post.is-horizontal {
		grid-template-columns: 2fr 3fr;
		grid-template-rows: 1fr;
	}
}
.description {
	min-height: 200px;
}
</style>
