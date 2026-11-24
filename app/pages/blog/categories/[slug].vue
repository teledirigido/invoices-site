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

// Queries do not depend on the visitor's locale: the static generation runs
// without one (fallback en), so a filter by locale left es-only categories empty.
const { data: allCategories } = await useAsyncData('blog-categories-all', () =>
  queryCollection('blogCategories').all(),
);

const { data: allArticles } = await useAsyncData(`blog-category-articles-${slug}`, () =>
  queryCollection('blog')
    .where('categorySlugs', 'LIKE', `%"${slug}"%`)
    .order('dateTime', 'DESC')
    .all(),
);

// agencia-tributaria and seguridad-social share the slug in es and en:
// prefer the visitor's language, otherwise the only one that exists.
const category = computed(() => {
  const matches = (allCategories.value ?? []).filter((c) => c.slug === slug);
  return matches.find((c) => c.locale === locale.value) ?? matches[0];
});

const articles = computed(() =>
  (allArticles.value ?? []).filter((a) => a.locale === category.value?.locale),
);

const categoryNames = computed(() =>
  Object.fromEntries(
    (allCategories.value ?? [])
      .filter((c) => c.locale === category.value?.locale)
      .map((c) => [c.slug, c.name]),
  ),
);

useSeoMeta({
  title: () => category.value?.name,
  description: () => category.value?.name,
});
</script>
