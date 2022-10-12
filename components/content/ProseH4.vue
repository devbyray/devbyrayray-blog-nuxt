<template>
  <h4 :id="id" class="text-black dark:text-white">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h4>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>