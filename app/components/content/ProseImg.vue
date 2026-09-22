<script setup lang="ts">
defineProps<{
  src?: string;
  alt?: string;
}>();
</script>

<template>
  <figure class="blog-body--figure">
    <img :src="src" :alt="alt" />
    <figcaption class="f-size-s" v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>
