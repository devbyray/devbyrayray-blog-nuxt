<template lang="">
	<div>
		<div class="bg-default dark:bg-gray-900 py-10 px-6">
			<header class="text-center">
				<h1 class="text-white text-3xl font-bold mb-8">Dev By RayRay</h1>
				<img
					loading="lazy"
					src="https://res.cloudinary.com/raymons/image/upload/c_scale,g_center,w_300/v1610102296/devbyrayray/blog/Template.png"
				/>
			</header>
			<div class="post-grid grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2">
				<div
					v-for="article in articles"
					:key="article.slug"
					class="bg-white shadow-md border border-gray-200 rounded-lg mb-5"
				>
					<Transition>
						<div class="p-5 flex flex-col self-end inner-card h-full blog-post">
							<div v-if="article?.image">
								<img :src="getImageUrl(article?.image, 'overview')" loading="lazy" width="400" height="250" />
							</div>
							<div class="tags justify-start flex flex-wrap flex-row uppercase">
								<span
									:class="'tag text-sm mb-2 mr-2 tag-' + tag.toLowerCase().replaceAll(' ', '-')"
									v-for="tag in article?.categories"
									>{{ tag.replaceAll("'", '') }}</span
								>
							</div>
							<nuxt-link :to="article?._path"
								><h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
									{{ article.title }}
								</h2></nuxt-link
							>
							<div class="date">
								<time>{{ article?.date }}</time>
							</div>
							<p class="font-normal text-gray-700 mb-3">{{ article.description }}</p>
							<p><nuxt-link :to="`https://medium.com${article?.slug}`">Medium</nuxt-link></p>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'
const { data: articles } = await useAsyncData('home', () => queryContent('blog').sort({ date: -1 }).limit(30).find())
</script>

<style scoped>
.tag:before {
	content: '#';
}

.post-grid {
	max-width: 900px;
	margin: 0 auto;
}

.blog-post img {
	width: 100%;
	height: 250px;
	object-fit: cover;
}
</style>
