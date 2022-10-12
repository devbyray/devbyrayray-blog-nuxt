<template>
  <h3 :id="id" class="text-black dark:text-white">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>