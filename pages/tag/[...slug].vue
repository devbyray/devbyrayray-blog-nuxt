<template>
	<div>
		<Meta hid="canonical" property="canonical" :content="pageUrl" />
		<Meta hid="og:title" property="og:title" :content="page?.title ?? slug[0]" />
		<Meta hid="og:description" property="og:description" :content="page?.description ?? CONFIG?.sitedesc" />
		<Meta hid="og:type" property="og:type" content="website" />
		<Meta hid="og:image" property="og:image" :content="CONFIG?.logoUrl" />
		<Meta hid="og:url" property="og:url" :content="pageUrl" />
		<Meta hid="og:locale" property="og:locale" content="en_EN" />

		<Meta name="twitter:card" property="twitter:card" content="summary" />
		<Meta name="twitter:site" property="twitter:site" :content="CONFIG?.twitter" />
		<Meta name="twitter:creator" property="twitter:creator" :content="CONFIG?.twitter" />
		<Meta name="twitter:title" property="twitter:title" :content="page?.title ?? slug[0]" />
		<Meta hid="twitter:image" property="twitter:image" :content="CONFIG?.logoUrl" />
		<Meta
			hid="twitter:description"
			property="twitter:description"
			:content="page?.description ?? CONFIG?.sitedesc"
		/>

        <TheHeader></TheHeader>
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-4">

			<article class="page-container">
				<section class="page-max-md pb-16">
					<h1 class="text-white font-bold text-3xl tracking-tight" v-if="!page">{{ slug[0] }}</h1>
					<ContentRenderer :value="page">
						<h1 class="text-white font-bold text-3xl tracking-tight">{{ page?.title }}</h1>
						<ContentRendererMarkdown :value="page" />
					</ContentRenderer>
				</section>

				<section v-if="posts" class="page-max-lg post-grid grid gap-8 text-neutral-600 mb-8">
					<div
						v-for="article in posts"
						:key="article?._path"
						class="p-5 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative bg-white"
					>
						<BlogPost :article="article" title-tag="h2"></BlogPost>
					</div>
				</section>
			</article>
		</div>
	</div>
</template>

<script setup>
const {
	path,
	params: { slug }
} = useRoute()
const {
	public: { CONFIG }
} = useRuntimeConfig()

const contentDir = 'posts'
const { data: posts } = await useAsyncData(`posts-${slug[0]}`, () =>
	queryContent(contentDir)
		.where({ $or: [{ tags: { $contains: slug[0] } }, { categories: { $contains: slug[0] } }] })
		.sort({ date: -1 })
		.find()
)
const { data: page } = await useAsyncData(`content-${path.toLowerCase()}`, () => {
	return queryContent().where({ _path: path.toLowerCase() }).findOne()
})

const pageUrl = `${CONFIG.domain}${path}`
const pageImage = `${CONFIG?.domain}/${page?.image}`

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
