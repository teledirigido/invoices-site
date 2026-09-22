<script setup lang="ts">
defineProps<{
  src?: string;
  caption?: string;
}>();
</script>

<template>
  <figure class="blog-body--figure blog-body--video">
    <video :src="src" controls muted playsinline />
    <figcaption v-if="caption" class="f-size-s">{{ caption }}</figcaption>
  </figure>
</template>
