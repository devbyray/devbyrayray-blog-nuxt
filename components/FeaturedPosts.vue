<template>
	<section :id="topic">
		<div v-if="posts" class="post-grid grid gap-8 text-white mb-8">
            <h2>Featured</h2>
			<div
				v-for="article in posts"
				:key="article?._path"
				class="p-5 mb-8 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative bg-white overflow-hidden"
			>
				<BlogPost :article="article" :titleTag="titleTag" :isHorizontal="true"></BlogPost>
			</div>
		</div>
	</section>
</template>

<script setup>
const { data: posts } = await useAsyncData(`featured-posts`, () =>
	queryContent('posts')
		.limit(3)
		.where({ featured: true })
		.sort({ date: -1 })
		.find()
)
</script>

<style scoped>
.post-grid {
    max-width: 800px;
	margin: 0 auto;

}
/* @media screen and (min-width: 500px) {
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
} */
</style>
