<template>
	<div>
		<div class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
			<article class="max-w-3xl m-auto bg-white rounded-2xl p-8 content">
				<header>
					<nuxt-link to="/" class="underline">Go back</nuxt-link>
				</header>
				<h1>{{ blog?.title }}</h1>
				<time>{{ blog?.date }}</time>
				<ul v-if="blog?.tags">
					<li v-for="tag in blog?.tags" :key="tag" class="badge mr-2">{{ tag }}</li>
				</ul>
				<!-- <ContentDoc /> -->
				<ContentRenderer :value="blog" />
			</article>
		</div>
	</div>
</template>
<script setup>
const { path } = useRoute()
const { data: blog } = await useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne()
})
console.log('data: ', blog)
</script>
<script>
import Prism from '~/plugins/prism'
export default {
	mounted() {
		console.log('mounted: ', Prism)
		Prism.highlightAll()
	}
}
</script>
<style lang="postcss">
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre,
ul,
ol {
	margin-bottom: 1rem;
}

.content {
	& h1 {
		@apply text-4xl;
	}
	& h2 {
		@apply text-2xl;
	}

	& ul,
	& ol {
		list-style: inherit;
		list-style-position: inside;
	}
}
</style>
