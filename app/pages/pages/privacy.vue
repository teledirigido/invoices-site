<template>
  <PublicLegalPage slug="privacy" />
</template>

<script setup>
definePageMeta({ layout: 'public' });
const { t } = useI18n();

useSeoMeta({
  title: () => t('meta.privacy.title'),
  description: () => t('meta.privacy.description'),
  ogTitle: () => t('meta.privacy.title'),
  ogDescription: () => t('meta.privacy.description'),
});
</script>
