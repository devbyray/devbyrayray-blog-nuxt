<template>
	<NuxtLayout>
		<Head>
			<Link rel="canonical" :href="pageUrl" />
			<Meta hid="og:title" property="og:title" :content="blog?.title" />
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
			<Meta name="twitter:title" property="twitter:title" :content="blog?.title" />
			<Meta hid="twitter:image" property="twitter:image" :content="getImageUrl(blog?.image) ?? CONFIG?.logoUrl" />
			<Meta hid="og:image" property="og:image" :content="getImageUrl(blog?.image) ?? CONFIG?.logoUrl" />
			<Meta
				hid="twitter:description"
				property="twitter:description"
				:content="blog?.description ?? CONFIG?.sitedesc"
			/>
		</Head>
		<TheHeader></TheHeader>
		<div class="bg-gray-900 dark:bg-gray-900 lg:py-10 lg:px-12">
			<div class="page-container 3xl:max-w-7xl m-auto pt-16 relative">
				<article
					class="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-2xl p-8 page-content relative lg:max-w-5xl"
				>
					<div class="dino-header absolute"></div>

					<PostHeader :blog="blog" :showTitle="true" :showGradient="true" :isHomepage="false" />
					<Toc
						class="show-mobile bg-gray-700 p-4"
						v-if="blog?.body?.toc?.links"
						:links="blog?.body?.toc?.links"
						:hasToggle="true"
					></Toc>
					<div class="content">
						<ContentDoc>
							<template #empty>
								<h1>Sorry the post could not be found 🙈</h1>
								<p>Check the homepage to find that post or a related one 😉</p>
							</template>
						</ContentDoc>
					</div>
					<Profile></Profile>
				</article>
				<aside class="right-side">
					<div class="sticky top-5">
						<Ad id="post-sidebar" sticky="true"></Ad>

						<Toc
							class="widget text-white hide-mobile"
							v-if="blog?.body?.toc?.links"
							:links="blog?.body?.toc?.links"
						></Toc>
					</div>
				</aside>
				<footer class="prev-next pt-8">
					<ul class="grid grid-cols-2 gap-4">
						<li v-if="prev" class="list-none prev">
							<span>Previous post</span>
							<nuxt-link class="text-black flex p-4 rounded-2xl items-center mb-4 gap-8" :to="prev._path"
								><MazIcon size="2rem" src="/icons/chevron-left.svg" />{{ prev.title }}</nuxt-link
							>
						</li>
						<li v-if="next" class="list-none next">
							<span>Next post</span>
							<nuxt-link
								class="text-black flex p-4 rounded-2xl items-center justify-end gap-8 text-left"
								:to="next._path"
								>{{ next.title }}<MazIcon src="/icons/chevron-right.svg" size="2rem" class="ml-8"
							/></nuxt-link>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	</NuxtLayout>
</template>
<script setup>
import { formatDate } from '@/lib/date'
import { getImageUrl } from '@/lib/image'
import MazIcon from 'maz-ui/components/MazIcon'

const { path } = useRoute()
const {
	public: { CONFIG }
} = useRuntimeConfig()

const { data: blog } = await useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne()
})

const pageUrl = ref('')
const pageImage = ref('')
const pageDate = ref('')

onMounted(() => {
	window.scrollTo(0, 0)
})

console.log('blog: ', blog)
console.log('imageee: ', blog?.value?.image)
pageUrl.value = `${CONFIG.domain}${path}`
pageImage.value = getImageUrl(blog?.value?.image)
pageDate.value = formatDate(blog?.value?.date)
console.log('blog: ', blog)

const { prev, next } = useContent()

useHead({
	htmlAttrs: {
		lang: 'en_EN'
	}
})
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
		max-width: 1600px;
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(600px, 2fr) 1fr;
	}
}

pre {
	max-width: 100%;
	overflow: hidden;
}
.prev-next {
	display: flex;
	grid-column: 1/2;
}
.prev-next a {
	background: var(--primary-color);
}
.prev-next a:hover {
	background: var(--secondary-color);
}
.next span {
	text-align: right;
}
.dino-header {
	top: -50px;
	width: 50px;
	height: 50px;
	left: 85%;
	background-image: url('/images/dino.png');
	background-repeat: no-repeat;
	background-position: center;
}
.content-header h1 {
	font-size: 3rem;
	line-height: 3.2rem;
}
</style>
