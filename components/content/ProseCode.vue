<template>
	<div class="code-container rounded-lg bg-gray-900 text-black">
		<span v-if="filename" class="filename-text text-gray-200 dark:text-gray-100">
			{{ filename }}
		</span>
		<span
			v-if="languageText"
			:style="{ background: languageBackground, color: languageColor }"
			class="language-text"
		>
			{{ languageText }}
		</span>
		<slot />
		<div class="bottom-container">
			<div class="copy-container">
				<span class="copied-text" v-if="copied">Copied code!</span>
				<button :style="{ background: languageBackground, color: languageColor }" class="copy-button" @click="copy(code)">Copy Code</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { copy, copied, text } = useClipboard()
const props = withDefaults(
	defineProps<{
		code?: string
		language?: string | null
		filename?: string | null
		highlights?: Array<number>
	}>(),
	{ code: '', language: null, filename: null, highlights: [] }
)
const languageMap: Record<string, { text: string; color: string; background: string }> = {
	ts: {
		text: 'ts',
		background: '#3178c6',
		color: 'white'
	},
	vue: {
		text: 'vue',
		background: '#42b883',
		color: 'white'
	},
	js: {
		text: 'js',
		background: '#f7df1e',
		color: 'black'
	},
	javascript: {
		text: 'js',
		background: '#f7df1e',
		color: 'black'
	},
	angular: {
		text: 'ng',
		background: '#b52e31',
		color: 'black'
	}
}
const languageText = computed(() => (props.language ? languageMap[props.language]?.text : null))
const languageBackground = computed(() => (props.language ? languageMap[props.language]?.background : null))
const languageColor = computed(() => (props.language ? languageMap[props.language]?.color : null))
</script>

<style scoped>
.code-container {
	position: relative;
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding-top: 1em;
	overflow: hidden;
    margin-left: -1rem;
    margin-right: -1rem;
    width: calc(100% + 2rem);
}
.bottom-container {
	display: flex;
	justify-content: flex-end;
}
.copy-container {
	display: flex;
}
.copied-text {
    padding-top: 0.5rem;
	margin-right: 1em;
}
.copy-button {
    padding: 0.5rem 0.8rem 0.5rem 1rem;
    border-top-left-radius: 5px;
}
.filename-text {
	position: absolute;
	top: 0;
	right: 3.2em;
	padding: 0.25em 0.5em;
	font-size: 14px;
    font-style: italic;
}
.language-text {
	position: absolute;
	top: 0;
	right: 1em;
	padding: 0.25em 0.5em;
	font-size: 14px;
	text-transform: uppercase;
	border-bottom-right-radius: 0.25em;
	border-bottom-left-radius: 0.25em;
}
:slotted(pre) {
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
	flex: 1 1 0%;
	overflow-x: auto;
	padding: 1rem;
	line-height: 1.625;
	counter-reset: lines;
}
:slotted(pre code) {
	width: 100%;
	display: flex;
	flex-direction: column;
}
:slotted(pre code .line) {
	display: inline-table;
	min-height: 1rem;
}
:slotted(pre code .line::before) {
	counter-increment: lines;
	content: counter(lines);
	width: 1rem;
	margin-right: 1.5rem;
	display: inline-block;
	text-align: left;
	color: rgba(115, 138, 148, 0.4);
}
:slotted(pre code .highlight) {
	background-color: #363b46;
	display: block;
	margin-right: -1em;
	margin-left: -1em;
	padding-right: 1em;
	padding-left: 0.75em;
	border-left: 0.25em solid red;
}
</style>
