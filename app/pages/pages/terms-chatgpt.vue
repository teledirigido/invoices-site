<template>
  <PublicLegalPage slug="terms-chatgpt" />
</template>

<script setup>
definePageMeta({ layout: 'public' });
const { t } = useI18n();

useSeoMeta({
  title: () => t('meta.termsChatgpt.title'),
  description: () => t('meta.termsChatgpt.description'),
  ogTitle: () => t('meta.termsChatgpt.title'),
  ogDescription: () => t('meta.termsChatgpt.description'),
});
</script>
