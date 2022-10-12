<template>
    <p class="runkit-container text-center">
        <span class="runkit  inline-block text-black px-4 py-1 rounded">
            <a class="text-black hover:text-black" :href="link" target="_blank">Try it on RunKit</a>
        </span>
    </p>
</template>

<script setup lang="ts">
defineProps<{ link: string }>()
</script>

<style scoped>
.runkit {
    margin-left: -1rem;
    margin-right: -1rem;
    background: var(--color-javascript);
}
</style>