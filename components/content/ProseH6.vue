<template>
  <h6 :id="id" class="text-black dark:text-white">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h6>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>