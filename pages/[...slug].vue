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
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-12">
			<TheHeader></TheHeader>
			<article
				class="max-w-4xl m-auto bg-white dark:bg-gray-700 dark:text-gray-200 rounded-2xl p-8 content relative"
			>
				<header>
					<nuxt-link to="/" class="underline text-sky-400 dark:text-white">Go back</nuxt-link>
				</header>

				<h1 class="dark:text-gray-200">{{ blog?.title }}</h1>

				<div v-if="blog?.image && !blog?.image.startsWith('images/')">
					<img
						:src="getImageUrl(blog?.image, 'big')"
						loading="lazy"
						width="850"
						height="400"
						class="rounded-lg mb-8"
					/>
				</div>
				<p>
					<em
						>Written at
						<strong
							><time>{{ formatDate(blog?.date) }}</time></strong
						>
						by RayRay
						.</em
					>
					<span v-if="blog?.tags.length > 0 || blog?.categories.length > 0"
							>Tags: {{ formattedTopics(blog?.tags, blog?.categories) }}</span
						>
				</p>
				<div v-if="blog?.image && blog?.image.startsWith('images/')">
					<nuxt-img
						provider="cloudinary"
						:src="`${blog?.image.replace('images/', '/')}`"
						width="850"
						class="rounded-lg object-cover cover-image"
					/>
				</div>
				<p>
					<nuxt-link target="_blank" class="dark:text-white" :to="`https://medium.com${blog?.slug}`"
						>Medium</nuxt-link
					>
				</p>
				<ContentDoc>
					<template #empty>
						<h1>Document is empty</h1>
					</template>
				</ContentDoc>

				<Profile></Profile>
			</article>
			<footer class="prev-next pt-8 max-w-4xl m-auto">
				<ul class="grid grid-cols-2 w-full gap-4">
					<li v-if="prev" class="list-none">
						<nuxt-link class="text-sky-400 dark:text-white flex p-4 rounded-2xl items-center mb-4" :to="prev._path"
							><MazIcon size="2rem" src="/icons/chevron-left.svg" />{{ prev.title }}</nuxt-link
						>
					</li>
					<li v-if="next" class="list-none">
						<nuxt-link class="text-sky-400 dark:text-white flex p-4 rounded-2xl items-center justify-end" :to="next._path"
							>{{ next.title }}<MazIcon src="/icons/chevron-right.svg" size="2rem"
						/></nuxt-link>
					</li>
				</ul>
			</footer>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'
import { formatDate } from '@/lib/date'
import MazIcon from 'maz-ui/components/MazIcon';

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
	console.log({tags, categories})
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
.prev-next {
	display: flex;
}
.cover-image {
	width: 100%;
	height: 400px;
}
.prev-next a {
	background: var(--primary-color);
}
.prev-next a:hover {
	background: var(--secondary-color);
}
</style>
