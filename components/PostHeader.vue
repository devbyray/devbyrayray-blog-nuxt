<template>
	<header
		class="content-header absolute top-0 left-0 w-full"
		:class="{ 'is-homepage': isHomepage, 'no-homepage': !isHomepage, 'is-horizontal': isHorizontal }"
	>
		<div class="header-content absolute bottom-0 left-0 w-full p-8" :class="{ gradient: showGradient }">
			<div class="top flex flex-wrap">
				<ul class="text-gray-200 flex flex-wrap items-start">
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<time class="flex items-center"
							>{{ formatDate(blog?.date) }} <MazIcon src="/icons/calendar.svg" size="1rem" class="ml-1" />
						</time>
					</li>
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<span class="flex items-center"
							>{{ Math.round(blog?.readingTime?.minutes) }} min
							<MazIcon src="/icons/clock.svg" size="1rem" class="ml-1"
						/></span>
					</li>
				</ul>
			</div>
			<div class="bottom flex flex-col">
				<div class="tags flex flex-wrap">
					<Tag v-for="tag in tags" :key="tag" :tag="tag"></Tag>
				</div>
				<h1 v-if="showTitle" class="dark:text-gray-200 uppercase">{{ blog?.title }}</h1>
			</div>
		</div>
		<div class="cover-image rounded-lg">

			<nuxt-img
				v-if="blog?.image && blog?.image?.includes('image/')"
				provider="cloudinary"
				:src="blog?.image.replace('image/', '')"
				:width="imageFormat?.width"
				:height="imageFormat?.height"
				class="rounded-lg object-cover mb-0"
				:modifiers="{
					c: 'crop',
					f: 'webp'
				}"
				:alt="blog?.title"
				:title="blog?.title"
				loading="lazy"
			/>
			<nuxt-img
				v-if="blog?.image && !blog?.image?.includes('image/')"
				:src="getImageUrl(blog?.image, isHomepage ? 'overview' : 'big')"
				:width="imageFormat?.width"
				:height="imageFormat?.height"
				class="rounded-lg object-cover mb-0"
				:alt="blog?.title"
				:title="blog?.title"
				loading="lazy"
			/>
		</div>
	</header>
</template>
<script setup lang="ts">
import { formatDate } from '@/lib/date'
import { getImageUrl } from '@/lib/image'
import MazIcon from 'maz-ui/components/MazIcon'

// function getImageUrl(url: string, width: number) {
// 	console.log('url: ', url)
// 	const edits = 'c_crop,f_auto'
// 	if (url && !url.startsWith('http')) {
// 		return `https://res.cloudinary.com/raymons/image/upload/${edits}/devbyrayray/blog/${url?.replace('images/', '/')}`
// 	}
// 	return `https://res.cloudinary.com/raymons/image/fetch/${edits}/${url}`
// }

interface Props {
	blog: any
	showTitle: boolean
	showGradient: boolean
	isHomepage: boolean
	isHorizontal: boolean
}

const props = withDefaults(defineProps<Props>(), {
	blog: {},
	showTitle: true,
	showGradient: true,
	isHomepage: true,
	isHorizontal: false
})

const tags = props?.isHomepage ? props?.blog?.tags?.slice(0, 2) : props?.blog?.tags

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

const formats = {
	overview: {
		width: 500,
		height: 500
	},
	big: {
		width: 960,
		height: 500
	},
}
const imageFormat = props?.isHomepage ? formats?.overview : formats?.big

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
	position: relative;
	margin-bottom: 2rem;
}
.no-homepage.content-header {
	margin-left: -2rem;
	margin-right: -2rem;
	width: calc(100% + 4rem);
	margin-top: -2rem;
}
.is-homepage.content-header {
	margin-left: -1.25rem;
	margin-right: -1.25rem;
	width: calc(100% + 2.5rem);
	margin-top: -1.25rem;
}
.is-horizontal.content-header {
	margin-bottom: 0;
	height: calc(100% + 2.5rem);
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
@media screen and (min-width: 1400px) {
	.content-header h1 {
		font-size: 4rem;
		line-height: 4.2rem;
	}
}
</style>
