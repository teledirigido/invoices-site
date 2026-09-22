<template>
  <ArchiveBlog
    v-if="categorySlug"
    :category-slug="categorySlug"
    :count="count + 1"
    :title="title ?? $t('blog.relatedArticles')"
    title-alignment="left"
    :exclude-slug="excludeSlug"
  />
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    excludeSlug: string;
    categorySlug?: string;
    count?: number;
    title?: string;
  }>(),
  {
    count: 3,
  },
);
</script>
