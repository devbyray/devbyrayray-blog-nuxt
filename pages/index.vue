<template lang="">
	<NuxtLayout>
		<Title>{{ CONFIG?.sitename }}</Title>

		<Link rel="canonical" :href="pageUrl" />
		<Meta hid="og:title" property="og:title" :content="CONFIG?.sitename" />
		<Meta name="description" :content="blog?.description ?? CONFIG?.sitedesc" />
		<Meta hid="og:description" property="og:description" :content="blog?.description ?? CONFIG?.sitedesc" />
		<Meta hid="og:type" property="og:type" content="website" />
		<Meta hid="og:url" property="og:url" :content="pageUrl" />
		<Meta hid="og:locale" property="og:locale" content="en_EN" />

		<Meta name="author" :content="CONFIG?.sitename" />
		<Meta name="publisher" :content="CONFIG?.sitename" />

		<Meta name="twitter:card" property="twitter:card" content="summary" />
		<Meta name="twitter:site" property="twitter:site" :content="CONFIG?.twitter" />
		<Meta name="twitter:creator" property="twitter:creator" :content="CONFIG?.twitter" />
		<Meta name="twitter:title" property="twitter:title" :content="CONFIG?.sitename" />
		<Meta hid="twitter:image" property="twitter:image" :content="CONFIG?.logoUrl" />
		<Meta hid="og:image" property="og:image" :content="CONFIG?.logoUrl" />
		<Meta
			hid="twitter:description"
			property="twitter:description"
			:content="blog?.description ?? CONFIG?.sitedesc"
		/>

		<TheHeader home></TheHeader>
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-4">
			<div class="page-container">
				<div class="category-posts mb-10">
					<FeaturedPosts></FeaturedPosts>
				</div>

				<div class="max-content newsletter">
					<div class="mb-16 text-center flex flex-col justify-center">
						<h2>Subscribe to my newsletter</h2>
						<div class="flex justify-center">
							<div id="custom-substack-embed" class=""></div>
						</div>
					</div>
				</div>

				<div class="tagcloud mb-8">
					<h2>Tags</h2>
					<ul class="flex flex-wrap">
						<Tag v-for="tag in tags" :tag="tag"></Tag>
					</ul>
				</div>

				<div class="add-wrapper center">
					<Ad id="homepage-before-tags"></Ad>
				</div>

				<div v-if="posts" class="post-grid gap-8 text-neutral-600 mb-8">
					<header>
						<h2 class="text-white font-bold text-3xl tracking-tight">Recent posts</h2>
					</header>
					<div v-for="(article, index) in posts" :key="article?._path">
						<AdsWrapper v-if="index % 3 === 0 && index !== 0" class="mb-4">
							<Ad id="homepage-list"></Ad>
						</AdsWrapper>
						<div
							class="p-5 mb-8 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative bg-white overflow-hidden"
						>
							<BlogPost :article="article" titleTag="h3" :isHorizontal="true"></BlogPost>
						</div>
					</div>
				</div>
				<div class="mt-auto text-center">
					<nuxt-link to="/archive" class="dark:text-white"
						><span
							class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-base font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-primary-color hover:bg-secondary-color text-white"
						>
							Read more in archive
						</span></nuxt-link
					>
				</div>

				<div class="max-content newsletter">
					<div class="mb-16 text-center flex flex-col justify-center">
						<h2>Subscribe to my newsletter</h2>
						<div class="flex justify-center">
							<div id="custom-substack-embed" class=""></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'

const {
	public: { CONFIG }
} = useRuntimeConfig()
const { path } = useRoute()

const homepageTopics = ['javascript', 'angular', 'typescript']
const contentDir = 'blog'
const { data: posts } = await useAsyncData('posts', () => queryContent('posts').limit(12).sort({ date: -1 }).find())
const { data: postTags } = await useAsyncData('tags', () => queryContent('posts').sort({ date: -1 }).find())
const tags = ref()
const pageUrl = ref('')

pageUrl.value = `${CONFIG.domain}${path}`

const tagggs = []
postTags?.value?.forEach(post => tagggs.push(post?.tags))
tags.value = [...new Set(tagggs?.flat())].sort()

useHead({
	htmlAttrs: {
		lang: 'en_EN'
	},
	script: [
		{
			src: 'https://substackapi.com/widget.js',
			async: true
		}
	]
})
</script>

<style scoped>
.page-container {
	max-width: 1600px;
	margin: 0 auto;
}
.max-content,
.post-grid,
.tagcloud {
	max-width: 800px;
	margin: 0 auto;
}
</style>
