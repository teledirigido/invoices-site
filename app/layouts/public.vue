<template>
  <div
    class="template-public content-wrapper--public"
    :class="`page-public--${contentWrapperPage}`"
  >
    <header class="pt-2 site-header d-flex space-between">
      <div class="d-flex gap-1 ai-center">
        <strong><NuxtLink to="/">Nitidez.es</NuxtLink></strong>
        <Chip display="inline" type="primary">{{ $t('layout.public.chip') }}</Chip>
      </div>
      <div v-if="route.path === '/'" class="d-flex gap-2 ai-center f-body-small site-header--menu">
        <a href="#audience">{{ $t('layout.public.menuAudience') }}</a>
        <a href="#scope">{{ $t('layout.public.menuScope') }}</a>
        <Button size="small" :text="$t('auth.login')" target="_blank" :href="`${config.public.appUrl}/login`" />
      </div>
    </header>

    <NuxtPage />
    <ToastNotifyMe />
    <footer class="py-1 pb-2 d-flex gap-2 space-between f-body-small site-footer">
      <div class="d-flex ai-center gap-1">
        <img src="/images/favicon/favicon-32x32.png" alt="">
        <span><strong>Nitidez.es</strong></span> • 
        <span>{{ $t('layout.public.madeBy') }}</span>
      </div>
      <div class="d-flex gap-1 ai-center">
        <LocaleSwitcher />
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import ToastNotifyMe from '~/components/Public/ToastNotifyMe.vue';

const route = useRoute();
const contentWrapperPage = computed(() => route.name as string);
const { t } = useI18n();
const config = useRuntimeConfig();

useSeoMeta({
  title: () => t('meta.home.title'),
  description: () => t('meta.home.description'),
  ogTitle: () => t('meta.home.title'),
  ogDescription: () => t('meta.home.description'),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.home.title'),
  twitterDescription: () => t('meta.home.description'),
});

useHead({
  link: [
    { rel: 'canonical', href: computed(() => `https://nitidez.es${route.path}`) },
  ],
});
</script>
<style lang="scss">
@use '@scss/public.scss';
</style>
