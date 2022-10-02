<template lang="">
	<div>
		<div class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
			<h1 class="text-white text-3xl font-bold mb-8">Blog</h1>
			<div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<div
					v-for="article in articles"
					:key="article.slug"
					class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
				>
					<div class="p-5 flex flex-col self-end inner-card h-full">
						<div class="tags justify-start flex flex-wrap flex-row uppercase">
							<span :class="'tag text-sm mb-2 mr-2 tag-' + tag.toLowerCase().replaceAll(' ', '-')" v-for="tag in article?.categories">{{tag.replaceAll("'", '')}}</span>
						</div>
						<nuxt-link :to="article?._path"
							><h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
								{{ article.title }}
							</h2></nuxt-link
						>
						<p class="font-normal text-gray-700 mb-3">{{ article.description }}</p>

						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const { data: articles } = await useAsyncData('home', () => queryContent('blog').sort({ date: -1 }).limit(30).find())
</script>

<style scoped>
.tag:before {
	content: "#"
}

</style>
