<template lang="">
	<div>
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-4">
			<TheHeader home></TheHeader>

			<div class="container page-container">
				<header>
					<h2 class="text-white font-bold text-3xl tracking-tight">Recent posts</h2>
				</header>

				<div
					v-if="posts"
					class="post-grid grid grid-flow-row gap-8 text-neutral-600 md:grid-cols-2 lg:grid-cols-3"
				>
					<div v-for="article in posts" :key="article?._path" class="bg-white mb-5 rounded-lg">
						<div
							class="p-5 flex flex-col self-end inner-card h-full blog-post dark:bg-gray-700 dark:text-white"
						>
							<div v-if="article?.image">
								<nuxt-img
									provider="cloudinary"
									:src="`${article?.image.replace('images/', '/')}`"
									height="350"
									class="rounded-lg object-cover cover-image"
								/>
							</div>
							<div class="tags justify-start flex flex-wrap flex-row uppercase">
								<span
									:class="'tag text-sm mb-2 mr-2 tag-' + tag.toLowerCase().replaceAll(' ', '-')"
									v-for="tag in article?.categories"
									>{{ tag.replaceAll("'", '') }}</span
								>
							</div>
							<nuxt-link :to="article?._path" class="dark:text-white"
								><h3 class="font-bold dark:text-white text-2xl tracking-tight mb-2">
									{{ article?.title }}
								</h3></nuxt-link
							>
							<div class="date">
								<time>{{ formatDate(article?.date) }}</time>
								<span>{{article?.readingTime?.text}}</span>
							</div>
							<p class="font-normal mb-3">{{ article?.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'
import { formatDate } from '@/lib/date'
import { getTopicPosts } from '@/lib/posts-requests'
const {
	public: { CONFIG }
} = useRuntimeConfig()

const contentDir = 'blog'
const { data: posts } = await useAsyncData('posts', async () => await queryContent('posts').sort({ date: -1 }).find())
// const { data: javascript } = await useAsyncData(
// 	'javascript',
// 	async () => await getTopicPosts('JavaScript', 3, contentDir)
// )
// const { data: typescript } = await useAsyncData(
// 	'typescript',
// 	async () => await getTopicPosts('TypeScript', 3, contentDir)
// )
// const { data: angular } = await useAsyncData('angular', async () => await getTopicPosts('Angular', 3, contentDir))
// const { data: css } = await useAsyncData('css', async () => await getTopicPosts('CSS', 3, contentDir))

function getTagCloud(tags) {
	const tagCloud = new Set()
	if (tags) {
		tags.forEach(item => {
			if (item?.tags) {
				item?.tags.forEach(tagItem => {
					console.log('tagItem: ', tagItem)
					tagCloud.add(tagItem)
				})
			}
		})
	} else {
		return null
	}
	return Array.from(tagCloud)
}

console.log({
	posts
})

useHead({
	title: 'Dev By RayRay'
})
</script>

<style scoped>
.tag:before {
	content: '#';
}

.page-container,
.page-header {
	max-width: 1200px;
	margin: 0 auto;
}

.page-header img {
	max-width: 100%;
	height: auto;
}

.cover-image {
	width: 100%;
	margin-bottom: 1rem;
}
</style>
