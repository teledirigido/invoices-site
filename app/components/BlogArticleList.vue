<template>
  <ul v-if="articles?.length" class="grid-2 gap-column-4">
    <li v-for="article in articles" :key="article.slug" class="blog-item">
      <header>
        <p class="ml-auto f-body-small c-text-secondary pb-1">
          {{ formatDate(article.dateTime) }}
        </p>
        <h3 class="f-size-ml f-light underlined-on-hover">
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h3>
      </header>
      <p class="pt-1 d-flex gap-05 c-text-secondary">
        {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
        <span>•</span>
        <NuxtLink
          v-if="categoryNames[article.categorySlug ?? '']"
          class="underlined"
          :to="`/blog/categories/${article.categorySlug}`"
        >
          {{ categoryNames[article.categorySlug ?? ''] }}
        </NuxtLink>
      </p>
      <p class="pt-1 c-text-secondary f-hanken">
        {{ article.summaryText }}
      </p>
    </li>
  </ul>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    articles?: Array<{
      slug: string;
      title: string;
      dateTime: string;
      body: unknown;
      categorySlug?: string;
      summaryText?: string;
    }>;
    categoryNames?: Record<string, string>;
  }>(),
  {
    articles: () => [],
    categoryNames: () => ({}),
  },
);

const { locale } = useI18n();
const formatDate = (dateTime: string) => new Date(dateTime).toLocaleDateString(locale.value);
</script>
