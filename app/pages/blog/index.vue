<template>
  <div class="mx-auto py-6">
    <h1 class="f-size-l f-light pb-2">Blog</h1>
    <BlogArticleList :articles="articles ?? []" :category-names="categoryNames" />
    <br />
    <Pricing />
  </div>
</template>
<script setup lang="ts">
import Pricing from '~/components/Public/Index/Pricing.vue';

definePageMeta({ layout: 'public' });
const { locale } = useI18n();

const { data: articles } = await useAsyncData(
  () => `blog-index-${locale.value}`,
  () => queryCollection('blog').where('locale', '=', locale.value).order('dateTime', 'DESC').all(),
  { watch: [locale] },
);

const { data: categories } = await useAsyncData(
  () => `blog-categories-${locale.value}`,
  () => queryCollection('blogCategories').where('locale', '=', locale.value).all(),
  { watch: [locale] },
);

const categoryNames = computed(() =>
  Object.fromEntries((categories.value ?? []).map((c) => [c.slug, c.name])),
);
</script>
