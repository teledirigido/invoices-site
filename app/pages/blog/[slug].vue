<template>
  <section v-if="article" class="blog-single mx-auto py-6">
    <article class="blog-entry">
      <h1 class="f-size-l f-light pb-1">{{ article.title }}</h1>
      <p class="f-body-small c-text-secondary pb-2">
        {{ formatDate(article.dateTime) }}
        <template v-if="category">
          · <NuxtLink class="underlined" :to="`/blog/categories/${category.slug}`">{{ category.name }}</NuxtLink>
        </template>
      </p>
      <div v-if="translation" class="pb-2 op-05 f-hanken">
        <i>
          This article is also available in
          <NuxtLink class="underlined" :to="`/blog/${translation.slug}`" @click="setLocale(translation.locale)">{{ translation.languageName }}</NuxtLink>
        </i>
      </div>
      <div class="f-body c-text-secondary f-hanken blog-body">
        <ContentRenderer :value="article" />
      </div>
      <hr class="hr-bottom hr-bottom--left">
      <div class="pt-2 c-text-secondary">
        <NuxtLink class="underlined d-flex ai-center gap-1" to="/blog"><Icon name="mdi-arrow-left" />{{ $t('blog.backToAll') }}</NuxtLink>
      </div>
    </article>
    <aside class="blog-aside">
      <p class="f-body-small pb-1">Categories</p>
      <ul v-if="categories?.length" class="d-flex flex-column gap-05">
        <li v-for="cat in categories" :key="cat.slug">
          <NuxtLink class="underlined" :to="`/blog/categories/${cat.slug}`">{{ cat.name }}</NuxtLink>
        </li>
      </ul>
    </aside>
  </section>
  <Pricing />
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';
import Pricing from '~/components/Public/Index/Pricing.vue';

const route = useRoute();
const slug = route.params.slug as string;
const { locale, locales, setLocale } = useI18n();

const { data: article } = await useAsyncData(
  () => `blog-${slug}-${locale.value}`,
  () => queryCollection('blog').where('slug', '=', slug).where('locale', '=', locale.value).first(),
  { watch: [locale] },
);

const { data: translationArticle } = await useAsyncData(
  () => `blog-translation-${slug}-${locale.value}`,
  () => {
    if (!article.value?.translationSlug) return Promise.resolve(null);
    const otherLocale = locale.value === 'en' ? 'es' : 'en';
    return queryCollection('blog').where('slug', '=', article.value.translationSlug).where('locale', '=', otherLocale).first();
  },
  { watch: [article] },
);

const translation = computed(() => {
  if (!translationArticle.value) return null;
  const localeObj = (locales.value as Array<LocaleObject>).find((l) => l.code === translationArticle.value!.locale);
  return {
    slug: translationArticle.value.slug,
    locale: translationArticle.value.locale as LocaleObject['code'],
    languageName: localeObj?.name ?? translationArticle.value.locale,
  };
});

const { data: categories } = await useAsyncData(
  () => `blog-categories-${locale.value}`,
  () => queryCollection('blogCategories').where('locale', '=', locale.value).all(),
  { watch: [locale] },
);

const category = computed(() => {
  if (!article.value?.categorySlug) return null;
  return categories.value?.find((c) => c.slug === article.value!.categorySlug) ?? null;
});

const formatDate = (dateTime: string) => new Date(dateTime).toLocaleDateString(locale.value);

definePageMeta({ layout: 'public' });

const description = computed(() => article.value?.description ?? article.value?.title ?? '');
const canonicalUrl = computed(() => `https://nitidez.es${route.path}`);
const ogImageUrl = 'https://nitidez.es/images/open-graph.png';

useSeoMeta({
  title: () => article.value?.title,
  description,
  ogTitle: () => article.value?.title,
  ogDescription: description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: () => article.value?.title,
  twitterDescription: description,
  twitterImage: ogImageUrl,
  articlePublishedTime: () => article.value?.dateTime,
});

useHead(() => ({
  script: article.value
    ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.value.title,
            description: description.value,
            datePublished: article.value.dateTime,
            dateModified: article.value.dateTime,
            inLanguage: article.value.locale,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl.value,
            },
            image: ogImageUrl,
            publisher: {
              '@type': 'Organization',
              name: 'Nitidez.es',
              url: 'https://nitidez.es',
            },
          }),
        },
      ]
    : [],
}));
</script>
