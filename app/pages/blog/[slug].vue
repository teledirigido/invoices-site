<template>
  <section v-if="article" class="blog-single mx-auto py-6">
    <article class="blog-entry">
      <h1 class="f-size-l f-light pb-1">{{ article.title }}</h1>
      <p class="f-body-small c-text-secondary pb-2">
        {{ formatDate(article.dateTime) }} ·
        {{ $t('blog.minRead', { count: getReadingMinutes(article.body) }) }}
        <template v-if="category">
          ·
          <NuxtLink class="underlined" :to="`/blog/categories/${category.slug}`">
            {{ category.name }}
          </NuxtLink>
        </template>
      </p>

      <div class="f-body c-text-secondary f-hanken blog-body">
        <div v-if="translation" class="f-hanken is-multi-lang">
          <i>
            This article is also available in
            <NuxtLink
              class="underlined"
              :to="`/blog/${translation.slug}`"
              @click="setLocale(translation.locale)"
            >
              {{ translation.languageName }}
            </NuxtLink>
          </i>
        </div>
        <ContentRenderer :value="article" />
      </div>
      <RelatedBlogArticles
        :count="2"
        v-if="article"
        :exclude-slug="article.slug"
        :category-slug="article.categorySlug"
      />
      <hr class="hr-bottom hr-bottom--left" />
      <div class="pt-2 c-text-secondary">
        <NuxtLink class="underlined d-flex ai-center gap-1" to="/blog">
          <Icon name="mdi-arrow-left" />
          {{ $t('blog.backToAll') }}
        </NuxtLink>
      </div>
    </article>
    <aside class="blog-aside">
      <p class="f-body-small pb-1">Categories</p>
      <ul v-if="categories?.length" class="d-flex flex-column gap-05">
        <li v-for="cat in categories" :key="cat.slug">
          <NuxtLink class="underlined" :to="`/blog/categories/${cat.slug}`">
            {{ cat.name }}
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </section>
  <Pricing />
</template>

<script setup lang="ts">
import type { Link } from '@unhead/vue';
import type { LocaleObject } from '@nuxtjs/i18n';
import Pricing from '~/components/Public/Index/Pricing.vue';

const route = useRoute();
const slug = route.params.slug as string;
const { locale, locales, setLocale } = useI18n();

const { data: article } = await useAsyncData(
  () => `blog-${slug}`,
  () => queryCollection('blog').where('slug', '=', slug).first(),
);

const { data: translationArticle } = await useAsyncData(
  () => `blog-translation-${slug}`,
  () => {
    if (!article.value?.translationSlug) return Promise.resolve(null);
    return queryCollection('blog').where('slug', '=', article.value.translationSlug).first();
  },
  { watch: [article] },
);

const translation = computed(() => {
  if (!translationArticle.value) return null;
  const localeObj = (locales.value as Array<LocaleObject>).find(
    (l) => l.code === translationArticle.value!.locale,
  );
  return {
    slug: translationArticle.value.slug,
    locale: translationArticle.value.locale as LocaleObject['code'],
    languageName: localeObj?.name ?? translationArticle.value.locale,
  };
});

const { data: categories } = await useAsyncData(
  () => `blog-categories-${slug}`,
  () => {
    if (!article.value?.locale) return Promise.resolve([]);
    return queryCollection('blogCategories').where('locale', '=', article.value.locale).all();
  },
  { watch: [article] },
);

const category = computed(() => {
  if (!article.value?.categorySlug) return null;
  return categories.value?.find((c) => c.slug === article.value!.categorySlug) ?? null;
});

const formatDate = (dateTime: string) =>
  new Date(dateTime).toLocaleDateString(article.value?.locale ?? locale.value);

definePageMeta({ layout: 'public' });

const config = useRuntimeConfig();
const description = computed(() => article.value?.description ?? article.value?.title ?? '');
const canonicalUrl = computed(() => `${config.public.siteUrl}${route.path}`);
const ogImageUrl = computed(() => `${config.public.siteUrl}/images/open-graph.png`);

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

useHead(() => {
  const links: Link[] = [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: article.value?.locale ?? locale.value, href: canonicalUrl.value },
  ];
  if (translation.value) {
    links.push(
      {
        rel: 'alternate',
        hreflang: translation.value.locale,
        href: `${config.public.siteUrl}/blog/${translation.value.slug}`,
      },
      { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl.value },
    );
  }
  return {
    link: links,
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
              image: ogImageUrl.value,
              publisher: {
                '@type': 'Organization',
                name: 'Nitidez.es',
                url: config.public.siteUrl,
              },
            }),
          },
        ]
      : [],
  };
});
</script>
