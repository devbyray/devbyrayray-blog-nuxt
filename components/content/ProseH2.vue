<template>
  <h2 :id="id" class="text-black dark:text-white">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>