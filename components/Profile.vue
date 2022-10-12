<template>
	<section class="profile border-gray-900 dark:border-white border-2 bg-white dark:bg-gray-700">
		<header class="profile-header">
			<div class="photo border-gray-900 border-2 dark:border-white">
				<img src="https://res.cloudinary.com/raymons/image/upload/v1608535075/byrayray/IMG_2810.png" alt="" />
			</div>
			<div class="name text-black dark:text-white">
				<p><strong>RayRay</strong></p>
			</div>
		</header>
		<div class="content text-black dark:text-white">
			<p>
				I’m Ray, a Frontend Developer since 2009 living in the Netherlands. I write about Frontend Development,
				JavaScript, TypeScript, Angular, CSS, VueJS and a lot more related topics.
			</p>
			<p>
				Want to reach me for comments or questions on my blog? Send a DM on
				<nuxt-link href="https://twitter.com/@devbyrayray" target="_blank" class="text-sky-400 dark:text-white">Twitter @DevByRayRay</nuxt-link>
			</p>
		</div>
	</section>
</template>

<style scoped>
.profile {
	/* border: 1px solid; */
	position: relative;
	margin-top: 80px;
	border-radius: 10px;
}
.profile-header {
	top: -60px;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	width: 100%;
}
.photo {
	width: 100px;
	height: 100px;
	background: var(--primary-color);
	border-radius: 100%;
	overflow: hidden;
}
.name {
    padding-top: 1rem;
}
.content {
	padding: 6rem 3rem 2rem;
}
</style>
