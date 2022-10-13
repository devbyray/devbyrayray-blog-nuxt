<template>
	<div>
		<Head>
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
		</Head>
		<div class="bg-gray-900 dark:bg-gray-900 lg:py-10 lg:px-12">
			<TheHeader></TheHeader>
			<div class="page-container 3xl:max-w-7xl m-auto">
				<article class="bg-white dark:bg-gray-700 dark:text-gray-200 rounded-2xl p-8 content relative lg:max-w-5xl">
					<h1 class="dark:text-gray-200 uppercase">{{ blog?.title }}</h1>
					<ul class="text-gray-200 mt-8 flex flex-wrap items-start">
						<li class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white">
							<strong>Reading time: </strong>
							<span>~{{ Math.round(blog?.readingTime?.minutes) }} minutes</span>
						</li>
						<li v-if="blog?.tags?.length > 0" class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-primary-color text-white">
							<span>{{ blog?.tags[0] }}</span>
						</li>
						<li class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white">
							<strong>Date: </strong><time>{{ formatDate(blog?.date) }}</time>
						</li>
					</ul>

					<!-- <p>
					<span v-if="blog?.tags.length > 0 || blog?.categories.length > 0"
						>Tags: {{ formattedTopics(blog?.tags, blog?.categories) }}</span
					>
				</p> -->
					<div v-if="blog?.image">
						<nuxt-img
							provider="cloudinary"
							:src="`${blog?.image.replace('images/', '/')}`"
							height="400"
							class="rounded-lg object-cover cover-image mb-0"
						/>
					</div>

					<p></p>
					<ContentDoc>
						<template #empty>
							<h1>Document is empty</h1>
						</template>
					</ContentDoc>
				</article>
				<aside class="right-side">
					<Profile></Profile>
				</aside>
				<footer class="prev-next pt-8">
					<ul class="grid grid-cols-2 gap-4">
						<li v-if="prev" class="list-none">
							<nuxt-link
								class="text-black flex p-4 rounded-2xl items-center mb-4"
								:to="prev._path"
								><MazIcon size="2rem" src="/icons/chevron-left.svg" />{{ prev.title }}</nuxt-link
							>
						</li>
						<li v-if="next" class="list-none">
							<nuxt-link
								class="text-black flex p-4 rounded-2xl items-center justify-end"
								:to="next._path"
								>{{ next.title }}<MazIcon src="/icons/chevron-right.svg" size="2rem"
							/></nuxt-link>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'
import { formatDate } from '@/lib/date'
import MazIcon from 'maz-ui/components/MazIcon'

const { path } = useRoute()
const {
	public: { CONFIG }
} = useRuntimeConfig()

const { data: blog } = await useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne()
})
const pageUrl = `${CONFIG.domain}${path}`
const pageImage = `${CONFIG?.domain}/${blog?.image}`
const pageDate = formatDate(blog?.date)

const formattedTopics = (tags, categories) => {
	let topics = ''
	console.log({ tags, categories })
	if (tags?.length > 0) {
		topics += tags
			.map(item => `#${item}`)
			.toString()
			.replaceAll(',', ', ')
	}
	if (categories?.length > 0) {
		topics += categories
			.map(item => `#${item}`)
			.toString()
			.replaceAll(',', ', ')
	}

	return topics
}

console.log('blog: ', blog)

const { prev, next } = useContent()
</script>
<script>
import Prism from '~/plugins/prism'

export default {
	mounted() {
		Prism.highlightAll()
	}
}
</script>

<style scoped>
.page-container {
	max-width: 800px;
	grid-template-columns: 1fr;
}

@media screen and (min-width: 1300px) {
	.page-container {
		max-width: 1200px;
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(0, 1fr) 400px;
	}
}

pre {
  max-width: 100%;
  overflow: hidden;
}
.prev-next {
	display: flex;
}
.cover-image {
	max-width: 100%;
	height: 400px;
}
.prev-next a {
	background: var(--primary-color);
}
.prev-next a:hover {
	background: var(--secondary-color);
}
</style>
