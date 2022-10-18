<template>
	<header class="content-header absolute top-0 left-0 w-full">
		<div class="header-content absolute bottom-0 left-0 w-full p-8" :class="{ gradient: showGradient }">
			<div class="top flex flex-wrap">
				<ul class="text-gray-200 mt-8 flex flex-wrap items-start">
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<strong>Date: </strong><time>{{ formatDate(blog?.date) }}</time>
					</li>
				</ul>
				<ul class="text-gray-200 mt-8 flex flex-wrap items-start">
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<span>~{{ Math.round(blog?.readingTime?.minutes) }} minutes</span>
					</li>
				</ul>
			</div>
			<div class="bottom flex">
				<Tag v-for="tag in blog?.tags" :key="tag" :tag="tag"></Tag>
				<h1 v-if="showTitle" class="dark:text-gray-200 uppercase">{{ blog?.title }}</h1>
			</div>
		</div>
		<div class="cover-image rounded-t-lg">
			<nuxt-img
				v-if="blog?.image"
				:src="`${getImageUrl(blog?.image)}`"
				width="960"
				height="400"
				class="rounded-t-lg object-cover mb-0"
				:modifiers="{
					c: 'crop'
				}"
				:alt="blog?.title"
				:title="blog?.title"
				loading="lazy"
			/>
		</div>
	</header>
</template>
<script setup lang="ts">
import { formatDate } from '@/lib/date'

function getImageUrl(url: string) {
	if (url && !url.startsWith('http')) {
		return `https://res.cloudinary.com/raymons/image/upload/devbyrayray/blog/${url?.replace('images/', '/')}`
	}
	return `https://res.cloudinary.com/raymons/image/fetch/${url}`;
}

interface Props {
	blog: any
	showTitle: boolean
	showGradient: boolean
}

withDefaults(defineProps<Props>(), {
	blog: {},
	showTitle: true,
	showGradient: true
})

function classes(tag: string) {
	const obj = {}
	const tags = ['javascript', 'typescript', 'angular', 'vue', 'css', 'html', 'formly', 'codenewbie', 'canva']
	return {
		'tag-angular': tag?.toLowerCase()?.includes('angular'),
		'tag-vue': tag?.toLowerCase()?.includes('vue'),
		'tag-javascript': tag?.toLowerCase()?.includes('javascript'),
		'tag-typescript': tag?.toLowerCase()?.includes('typescript'),
		'tag-css': tag?.toLowerCase()?.includes('css'),
		'tag-formly': tag?.toLowerCase()?.includes('formly'),
		'tag-webdev': tag?.toLowerCase()?.includes('webdev'),
		'tag-codenewbie': tag?.toLowerCase()?.includes('codenewbie'),
		'tag-canva': tag?.toLowerCase()?.includes('canva'),
		'tag-other': tags?.includes(tag?.toLowerCase())
	}
}
</script>

<style scoped>
.cover-image {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: var(--color-javascript);
}
.cover-image img {
	width: 100%;
	height: 115%;
}
.content-header {
	height: 500px;
	overflow: hidden;
}
.content-header h1 {
	font-size: 2rem;
	line-height: 2.2rem;
}
.header-content {
	z-index: 99;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.header-content.gradient {
	background: rgb(31, 41, 55);
	background: linear-gradient(
		0deg,
		var(--color-content-background) 0%,
		rgba(31, 41, 55, 0.22650556804753152) 50%,
		rgba(31, 41, 55, 0) 100%
	);
}
.header-content h1 {
	color: var(--primary-color);
	text-shadow: 0 0 50px #000;
}

@media screen and (min-width: 580px) {
	.content-header h1 {
		font-size: 2.5rem;
		line-height: 2.7rem;
	}
}
@media screen and (min-width: 960px) {
	.content-header h1 {
		font-size: 3rem;
		line-height: 3.2rem;
	}
}
@media screen and (min-width: 1300px) {
	.content-header h1 {
		font-size: 4rem;
		line-height: 4.2rem;
	}
}
</style>
