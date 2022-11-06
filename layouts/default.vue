<template>
	<div class="default-layout">
		<slot />
		<Script async src="https://www.googletagmanager.com/gtag/js?id=UA-166352508-1"></Script>
		<Script async>
			window.dataLayer = window.dataLayer || []
			function gtag() {
				dataLayer.push(arguments)
			}
			gtag('js', new Date())

			gtag('config', 'UA-166352508-1')
		</Script>
	</div>
</template>
