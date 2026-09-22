<template>
  <div v-if="category" class="mx-auto py-6">
    <h1 class="f-size-l f-light pb-2">{{ category.name }}</h1>

    <ul v-if="articles?.length">
      <li v-for="article in articles" :key="article.slug" class="blog-item d-flex gap-1">
        <div>
          <h3 class="f-size-ml f-light underlined-on-hover"><NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink></h3>
          <p class="pt-1 d-flex">
            <Chip type="secondary" class="f-body-small">
              <NuxtLink :to="`/blog/categories/${category.slug}`">{{ category.name }}</NuxtLink>
            </Chip>
          </p>
        </div>
        <p class="ml-auto f-body-small c-text-secondary"> {{ formatDate(article.dateTime) }}</p>
      </li>
    </ul>

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

const { data: category } = await useAsyncData(
  () => `blog-category-${slug}-${locale.value}`,
  () => queryCollection('blogCategories').where('slug', '=', slug).where('locale', '=', locale.value).first(),
  { watch: [locale] },
);

const { data: articles } = await useAsyncData(
  () => `blog-category-articles-${slug}-${locale.value}`,
  () => queryCollection('blog').where('categorySlug', '=', slug).where('locale', '=', locale.value).order('dateTime', 'DESC').all(),
  { watch: [locale] },
);

const formatDate = (dateTime: string) => new Date(dateTime).toLocaleDateString(locale.value);

useSeoMeta({
  title: () => category.value?.name,
  description: () => category.value?.name,
});
</script>
