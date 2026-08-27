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
        <AdminButton size="small" :text="$t('auth.login')" target="_blank" href="/login" />
      </div>
    </header>

    <NuxtPage />
    <ToastNotifyMe />
    <footer class="py-2 d-flex gap-2 space-between f-body-small site-footer">
      <div>
        <strong>Nitidez.es</strong>
        &nbsp; — &nbsp; {{ $t('layout.public.madeBy') }}
      </div>
      <div class="d-flex gap-1 ai-center">
        hi@miguel.nz
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

useHead(computed(() => ({
  meta: [
    { property: 'og:title', content: t('meta.ogTitle') },
    { property: 'og:description', content: t('meta.ogDescription') },
    { name: 'description', content: t('meta.ogDescription') },
  ],
})));
</script>
<style lang="scss">
@use '@scss/public.scss';
</style>
