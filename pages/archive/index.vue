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
				<div v-if="posts" class="post-grid gap-8 text-neutral-600 mb-8">
					<AdsWrapper>
						<Ad id="archive-header"></Ad>
					</AdsWrapper>
					<header>
						<h2 class="text-white font-bold text-3xl tracking-tight">Archive</h2>
					</header>
					<div v-for="(article, index) in posts" :key="article?._path">
						<AdsWrapper v-if="index % 3 === 0 && index !== 0" class="mb-4">
							<Ad id="archive-list"></Ad>
						</AdsWrapper>
						<div
							class="p-5 mb-8 flex flex-col inner-card h-full blog-post dark:bg-gray-700 dark:text-white rounded-lg relative bg-white overflow-hidden"
						>
							<BlogPost :article="article" titleTag="h3" :isHorizontal="true"></BlogPost>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
<script setup>
const {
	public: { CONFIG }
} = useRuntimeConfig()
const { path } = useRoute()

const { data: posts } = await useAsyncData('archive-posts', () => queryContent('posts').sort({ date: -1 }).find())
const pageUrl = ref('')

pageUrl.value = `${CONFIG.domain}${path}`

useHead({
	htmlAttrs: {
		lang: 'en_EN'
	}
})
</script>

<style scoped>
.page-container {
	max-width: 1600px;
	margin: 0 auto;
}
.post-grid {
	max-width: 800px;
	margin: 0 auto;
}
</style>
