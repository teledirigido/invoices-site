<template>
  <section v-if="articles?.length">
    <h3 :class="`f-size-l f-light text-${props.titleAlignment} pb-3`">{{ title }}</h3>
    <div :class="`grid-${Math.min(articles.length, 3)} gap-2`">
      <div v-for="article in articles" :key="article.slug" class="item bg-white br-1 p-3 has-bg">
        <p class="pb-1 c-text-secondary text-right">
          {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
        </p>
        <h3 class="f-size-ml f-light underlined-on-hover">
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h3>
        <p class="pb-1 pt-1">
          <span class="f-body-small c-text-secondary">
            {{ formatDate(article.dateTime) }}
          </span>
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
    excludeSlug?: string;
    titleAlignment?: 'center' | 'left' | 'right';
  }>(),
  {
    count: 3,
    titleAlignment: 'center',
  },
);

const { t, locale } = useI18n();

const title = computed(() => props.title ?? t('blog.latestArticles'));

const { data: fetchedArticles } = await useAsyncData(
  () => `archive-blog-${props.categorySlug ?? 'all'}-${props.count}-${locale.value}`,
  () => {
    let query = queryCollection('blog').where('locale', '=', locale.value);
    if (props.categorySlug) query = query.where('categorySlug', '=', props.categorySlug);
    return query.order('dateTime', 'DESC').limit(props.count).all();
  },
  { watch: [locale, () => props.categorySlug, () => props.count] },
);

const articles = computed(() =>
  (fetchedArticles.value ?? [])
    .filter((a) => a.slug !== props.excludeSlug)
    .slice(0, props.excludeSlug ? props.count - 1 : props.count),
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
