<template>
  <h2 v-bind="attrs" :id="id" class="f-size-ml f-light pb-1 pt-3">
    <a v-if="headingAnchors && id" class="heading-anchor" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

// Only blog articles link their h2 titles: pages/blog/[slug].vue provides it.
const headingAnchors = inject('headingAnchors', false);

// Nuxt Content keeps accents in the id ("cuándo-hay-que..."), which a copied link
// turns into %C3%A1. Without them the link reads clean: #cuando-hay-que...
const rawAttrs = useAttrs();
const attrs = computed(() => {
  const { id: _id, ...rest } = rawAttrs;
  return rest;
});
const id = computed(() =>
  typeof rawAttrs.id === 'string' ? rawAttrs.id.normalize('NFD').replace(/\p{M}/gu, '') : undefined,
);
</script>
