<template>
  <h2 class="f-size-ml f-light pb-1 pt-3">
    <a v-if="headingAnchors && $attrs.id" class="heading-anchor" :href="`#${$attrs.id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
// Only blog articles link their h2 titles: pages/blog/[slug].vue provides it.
// The id comes from Nuxt Content and falls through as an attribute.
const headingAnchors = inject('headingAnchors', false);
</script>
