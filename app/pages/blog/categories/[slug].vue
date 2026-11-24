<template>
  <div v-if="category" class="mx-auto py-6">
    <h1 class="f-size-l f-light pb-2">{{ category.name }}</h1>
    <NuxtLink class="underlined" to="/blog">All Articles</NuxtLink>
    <BlogArticleList :articles="articles ?? []" :category-names="categoryNames" />

    <div class="pt-2 c-text-secondary">
      <NuxtLink class="underlined" to="/blog">{{ $t('blog.backToAll') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' });

const route = useRoute();
const slug = route.params.slug as string;
const { locale } = useI18n();

const { data: categories } = await useAsyncData(
  () => `blog-categories-${locale.value}`,
  () => queryCollection('blogCategories').where('locale', '=', locale.value).all(),
  { watch: [locale] },
);

const { data: articles } = await useAsyncData(
  () => `blog-category-articles-${slug}-${locale.value}`,
  () =>
    queryCollection('blog')
      .where('categorySlugs', 'LIKE', `%"${slug}"%`)
      .where('locale', '=', locale.value)
      .order('dateTime', 'DESC')
      .all(),
  { watch: [locale] },
);

const category = computed(() => categories.value?.find((c) => c.slug === slug));

const categoryNames = computed(() =>
  Object.fromEntries((categories.value ?? []).map((c) => [c.slug, c.name])),
);

useSeoMeta({
  title: () => category.value?.name,
  description: () => category.value?.name,
});
</script>
