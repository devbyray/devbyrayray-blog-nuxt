<template lang="">
	<div>
		Blog
		<ol>
			<li v-for="article in articles" :key="article.slug">
				<h2>{{ article.title }}</h2>
				<p>{{ article.description }}</p>
				<pre>{{ article?.slug }}</pre>
			</li>
		</ol>
	</div>
</template>
<script setup>
const { data: articles } = await useAsyncData('home', () => queryContent('articles').find())
</script>
