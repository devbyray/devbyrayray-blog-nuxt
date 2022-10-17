<template>
	<header class="content-header absolute top-0 left-0 w-full">
		<div class="header-content absolute bottom-0 left-0 w-full p-8" :class="{gradient: showGradient}">
			<div class="top flex">
				<ul class="text-gray-200 mt-8 flex flex-wrap items-start">
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<strong>Date: </strong><time>{{ formatDate(blog?.date) }}</time>
					</li>
					<li
						v-if="blog?.tags?.length > 0"
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-primary-color text-white"
					>
						<span>{{ blog?.tags[0] }}</span>
					</li>
				</ul>
				<ul class="text-gray-200 mt-8 flex flex-wrap items-start">
					<li
						class="inline-block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 mr-1.5 mb-2 bg-secondary-color text-white"
					>
						<strong>Reading time: </strong>
						<span>~{{ Math.round(blog?.readingTime?.minutes) }} minutes</span>
					</li>
				</ul>
			</div>
			<h1 v-if="showTitle" class="dark:text-gray-200 uppercase">{{ blog?.title }}</h1>
		</div>
		<div v-if="blog?.image" class="cover-image">
			<nuxt-img
				provider="cloudinary"
				:src="`${blog?.image.replace('images/', '/')}`"
				width="960"
				height="400"
				class="rounded-t-lg object-cover mb-0"
				:modifiers="{
					c: 'crop'
				}"
			/>
		</div>
	</header>
</template>
<script setup lang="ts">
import { formatDate } from '@/lib/date'

interface Props {
	blog: any;
	showTitle: boolean;
	showGradient: boolean;
}

withDefaults(
	defineProps<Props>(), {
		blog: {},
		showTitle: true,
		showGradient: true,
	}
)
</script>

<style scoped>
.cover-image {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.cover-image img {
	width: 100%;
	height: 100%;
}
.content-header {
	height: 500px;
	overflow: hidden;
}
.content-header h1 {
	font-size: 3rem;
	line-height: 3.2rem;
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
}

@media screen and (min-width: 1300px) {
	/* .content-header {
		height: 500px;
	} */
	.content-header h1 {
		font-size: 4rem;
		line-height: 4.2rem;
	}
}
</style>
