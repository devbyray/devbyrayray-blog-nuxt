<template lang="">
	<div>
		<div class="bg-gray-100 dark:bg-gray-900 py-10 px-6">
			<header class="text-center page-header">
				<h1 class="text-white text-4xl font-bold mb-8">Dev By RayRay</h1>
				<img
					loading="lazy"
					src="https://res.cloudinary.com/raymons/image/upload/c_scale,g_center,w_300/v1610102296/devbyrayray/blog/Template.png"
					width="300"
				/>
			</header>
			<!-- <pre>{{ posts }}</pre> -->

			<div class="container page-container">
				<header>
					<h2 class="text-white font-bold text-3xl tracking-tight">
						Recent posts
					</h2>
				</header>

				<div
					v-if="posts"
					class="post-grid grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3"
				>
					<div
						v-for="article in posts"
						:key="article?._path"
						class="bg-white shadow-md border border-gray-200 rounded-lg mb-5"
					>
						<Transition>
							<div class="p-5 flex flex-col self-end inner-card h-full blog-post">
								<div v-if="article?.image && !article?.image.startsWith('images/')">
									<img
										:src="getImageUrl(article?.image, 'overview')"
										loading="lazy"
										width="400"
										height="250"
										class="rounded-lg"
									/>
								</div>
								<div v-if="article?.image && article?.image.startsWith('images/')">
									<nuxt-img
										:src="`${article?.image}`"
										width="400"
										height="250"
										class="rounded-lg"
									/>
								</div>
								<div class="tags justify-start flex flex-wrap flex-row uppercase">
									<span
										:class="'tag text-sm mb-2 mr-2 tag-' + tag.toLowerCase().replaceAll(' ', '-')"
										v-for="tag in article?.categories"
										>{{ tag.replaceAll("'", '') }}</span
									>
								</div>
								<nuxt-link :to="article?._path"
									><h3 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
										{{ article?.title }}
									</h3></nuxt-link
								>
								<div class="date">
									<time>{{ article?.date }}</time>
								</div>
								<p class="font-normal text-gray-700 mb-3">{{ article?.description }}</p>
								<p><nuxt-link target="_blank" :to="`https://medium.com${article?.slug}`">Medium</nuxt-link></p>
							</div>
						</Transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'
import { getTopicPosts } from '@/lib/posts-requests'
const contentDir = 'blog'
const { data: posts } = await useAsyncData('posts', async () => await queryContent(contentDir).sort({date: -1}).find())
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

.page-header {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.page-header img {
	max-width: 100%;
	height: auto;
}

.blog-post img {
	width: 100%;
	height: 250px;
	object-fit: cover;
	margin-bottom: 1rem;
}
</style>
