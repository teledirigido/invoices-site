<template>
  <div class="mx-auto py-6">
    <h1 class="f-size-l f-light pb-2">Blog</h1>

    <ul v-if="articles?.length">
      <li v-for="article in articles" :key="article.slug" class="blog-item d-flex gap-1">
        <div>
          <h3 class="f-size-ml f-light underlined-on-hover">
            <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
          </h3>
          <p class="pt-1 d-flex gap-05 c-text-secondary">
            {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
            <span>•</span>
            <NuxtLink
              v-if="categoryNames[article.categorySlug ?? '']"
              :to="`/blog/categories/${article.categorySlug}`"
            >
              {{ categoryNames[article.categorySlug ?? ''] }}
            </NuxtLink>
          </p>
        </div>
        <p class="ml-auto f-body-small c-text-secondary">
          {{ formatDate(article.dateTime) }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'public' });
const { locale } = useI18n();

const { data: articles } = await useAsyncData(
  () => `blog-index-${locale.value}`,
  () => queryCollection('blog').where('locale', '=', locale.value).order('dateTime', 'DESC').all(),
  { watch: [locale] },
);

const formatDate = (dateTime: string) => new Date(dateTime).toLocaleDateString(locale.value);

const { data: categories } = await useAsyncData(
  () => `blog-categories-${locale.value}`,
  () => queryCollection('blogCategories').where('locale', '=', locale.value).all(),
  { watch: [locale] },
);

const categoryNames = computed(() =>
  Object.fromEntries((categories.value ?? []).map((c) => [c.slug, c.name])),
);
</script>
