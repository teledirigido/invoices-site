<template>
  <PublicLegalPage slug="terms" />
</template>

<script setup>
definePageMeta({ layout: 'public' });
const { t } = useI18n();

useSeoMeta({
  title: () => t('meta.terms.title'),
  description: () => t('meta.terms.description'),
  ogTitle: () => t('meta.terms.title'),
  ogDescription: () => t('meta.terms.description'),
});
</script>
