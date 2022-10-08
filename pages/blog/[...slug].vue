<template>
	<div>
		<div class="bg-gray-900 dark:bg-gray-900 py-10 px-12">
			<article class="max-w-4xl m-auto bg-white dark:bg-gray-700 dark:text-gray-200 rounded-2xl p-8 content relative">
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
						class="rounded-lg"
					/>
				</div>
				<div v-if="blog?.image && blog?.image.startsWith('images/')">
					<nuxt-img :src="`${blog?.image}`" width="850" height="400" class="rounded-lg" />
				</div>
				<p>
					<time>{{ blog?.date }}</time>
				</p>
				<ul v-if="blog?.tags">
					<li v-for="tag in blog?.tags" :key="tag" class="badge mr-2">{{ tag }}</li>
				</ul>
				<ContentRenderer :value="blog" />

				<Profile></Profile>
				<footer class="prev-next w-full py-8 flex spacebetween">
					<ul>
						<li v-if="prev">
							<NuxtLink class="text-sky-400 dark:text-white" :to="prev._path">{{ prev.title }}</NuxtLink>
						</li>
						<li v-if="next">
							<NuxtLink class="text-sky-400 dark:text-white" :to="next._path">{{ next.title }}</NuxtLink>
						</li>
					</ul>
				</footer>
			</article>
		</div>
	</div>
</template>
<script setup>
import { getImageUrl } from '@/lib/image'

const { path } = useRoute()
const { data: blog } = await useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne()
})

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
</style>
