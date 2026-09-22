<template>
  <section v-if="articles?.length" class="py-4">
    <h3 class="f-size-l f-light text-center pb-3">{{ title }}</h3>
    <div class="grid-3 gap-2">
      <div v-for="article in articles" :key="article.slug" class="item bg-white br-1 p-3 has-bg">
        <p class="text-right pb-1">
          <span class="f-body-small c-text-secondary">
            {{ formatDate(article.dateTime) }}
          </span>
        </p>
        <h3 class="f-size-ml f-light underlined-on-hover">
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h3>
        <p class="pt-1 c-text-secondary">
          {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
        </p>
      </div>
    </div>
    <div class="pt-2 op-05 d-flex ai-center jc-end gap-1">
      <NuxtLink class="underlined" to="/blog">
        {{ $t('blog.viewAll') }}
      </NuxtLink>
      <Icon name="mdi-arrow-right" />
    </div>
  </section>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    count?: number;
    categorySlug?: string;
    title?: string;
  }>(),
  {
    count: 3,
  },
);

const { t, locale } = useI18n();

const title = computed(() => props.title ?? t('blog.latestArticles'));

const { data: articles } = await useAsyncData(
  () => `archive-blog-${props.categorySlug ?? 'all'}-${props.count}-${locale.value}`,
  () => {
    let query = queryCollection('blog').where('locale', '=', locale.value);
    if (props.categorySlug) query = query.where('categorySlug', '=', props.categorySlug);
    return query.order('dateTime', 'DESC').limit(props.count).all();
  },
  { watch: [locale, () => props.categorySlug, () => props.count] },
);

const { data: categories } = await useAsyncData(
  () => `blog-categories-${locale.value}`,
  () => queryCollection('blogCategories').where('locale', '=', locale.value).all(),
  { watch: [locale] },
);

const categoryNames = computed(() =>
  Object.fromEntries((categories.value ?? []).map((c) => [c.slug, c.name])),
);

const formatDate = (dateTime: string) => new Date(dateTime).toLocaleDateString(locale.value);
</script>
