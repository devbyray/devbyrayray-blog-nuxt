<template lang="">
	<div>
		<Meta hid="canonical" property="canonical" :content="pageUrl" />
		<Meta hid="og:title" property="og:title" :content="blog?.title" />
		<Meta hid="og:description" property="og:description" :content="blog?.description ?? CONFIG?.sitedesc" />
		<Meta hid="og:type" property="og:type" content="website" />
		<Meta hid="og:image" property="og:image" :content="pageImage ?? CONFIG?.logoUrl" />
		<Meta hid="og:url" property="og:url" :content="pageUrl" />
		<Meta hid="og:locale" property="og:locale" content="en_EN" />

		<Meta name="twitter:card" property="twitter:card" content="summary" />
		<Meta name="twitter:site" property="twitter:site" :content="CONFIG?.twitter" />
		<Meta name="twitter:creator" property="twitter:creator" :content="CONFIG?.twitter" />
		<Meta name="twitter:title" property="twitter:title" :content="blog?.title" />
		<Meta hid="twitter:image" property="twitter:image" :content="pageImage ?? CONFIG?.logoUrl" />
		<Meta
			hid="twitter:description"
			property="twitter:description"
			:content="blog?.description ?? CONFIG?.sitedesc"
		/>

		<TheHeader home></TheHeader>
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-4">

			<div class="page-container">
				<div class="tagcloud">
					<h2>Tags</h2>
					<ul class="flex flex-wrap">
						<Tag v-for="tag in tags" :tag="tag"></Tag>
					</ul>
				</div>

				<div v-for="topic in homepageTopics" class="category-posts mb-8">
					<CategoryPosts :topic="topic" :limit="4"></CategoryPosts>
					<hr>
				</div>

				<header>
					<h2 class="text-white font-bold text-3xl tracking-tight">Recent posts</h2>
				</header>
				
				<div v-if="posts" class="post-grid grid gap-8 text-neutral-600 mb-8">
					<div
						v-for="article in posts"
						:key="article?._path"
						class="p-5 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative"
					>
						<BlogPost :article="article"></BlogPost>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const {
	public: { CONFIG }
} = useRuntimeConfig()

const homepageTopics = ['JavaScript', 'Angular', 'TypeScript']
const contentDir = 'blog'
const { data: posts } = await useAsyncData('posts', () =>
	queryContent('posts').sort({ date: -1 }).find()
)
const tags = ref()

onMounted(() => {
	const tagggs = []
	posts?.value.forEach(post => tagggs.push(post?.tags))
	tags.value = [...new Set(tagggs?.flat())].sort()
})


</script>

<style scoped>
.page-container {
	max-width: 1600px;
	margin: 0 auto;
}
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
