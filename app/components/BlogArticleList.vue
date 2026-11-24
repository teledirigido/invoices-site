<template>
  <ul v-if="articles?.length" class="grid-2 gap-column-4">
    <li v-for="article in articles" :key="article.slug" class="blog-item">
      <header>
        <p class="ml-auto f-body-small c-text-secondary pb-1">
          {{ formatDateTime(article.dateTime) }}
        </p>
        <h3 class="f-size-ml f-light underlined-on-hover">
          <NuxtLink :to="localePath(`/blog/${article.slug}`)">{{ article.title }}</NuxtLink>
        </h3>
      </header>
      <p class="pt-1 d-flex gap-05 c-text-secondary">
        {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
        <template v-for="slug in categoriesOf(article)" :key="slug">
          <span>•</span>
          <NuxtLink class="underlined" :to="localePath(`/blog/categories/${slug}`)">
            {{ categoryNames[slug] }}
          </NuxtLink>
        </template>
      </p>
      <p class="pt-1 c-text-secondary f-hanken">
        {{ article.summaryText }}
      </p>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { MinimarkTree } from 'minimark';
const localePath = useLocalePath();

const props = withDefaults(
  defineProps<{
    articles?: Array<{
      slug: string;
      title: string;
      dateTime: string;
      body: MinimarkTree;
      categorySlugs?: string[];
      summaryText?: string;
    }>;
    categoryNames?: Record<string, string>;
  }>(),
  {
    articles: () => [],
    categoryNames: () => ({}),
  },
);

const { formatDateTime } = useFormats();
const categoriesOf = (article: { categorySlugs?: string[] }) =>
  (article.categorySlugs ?? []).filter((slug) => props.categoryNames[slug]);
</script>
