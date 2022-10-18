<template>
	<section :id="topic">
		<h2>{{ topic }}</h2>
		<div v-if="posts" class="post-grid grid gap-8 text-neutral-600 mb-8">
			<div
				v-for="article in posts"
				:key="article?._path"
				class="p-5 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative bg-white"
			>
				<BlogPost :article="article"></BlogPost>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
    topic: String
})
const contentDir = 'posts'
const { data: posts } = await useAsyncData(`posts-${props?.topic}`, () =>
	queryContent(contentDir)
		.limit(3)
		.where({ $or: [{ tags: { $contains: props?.topic } }, { categories: { $contains: props?.topic } }] })
		.sort({ date: -1 })
		.find()
)

console.log({ props, posts })
</script>

<style scoped>
.post-grid {
	display: grid;
}
@media screen and (min-width: 500px) {
	.post-grid {
		grid-template-columns: repeat(1, 1fr);
	}
}
@media screen and (min-width: 960px) {
	.post-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (min-width: 1300px) {
	.post-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

.inner-card {
	padding-top: calc(500px + 2rem);
}
</style>
