<template>
  <PublicLegalPage slug="terms-claude" />
</template>

<script setup>
definePageMeta({ layout: 'public' });
const { t } = useI18n();

useSeoMeta({
  title: () => t('meta.termsClaude.title'),
  description: () => t('meta.termsClaude.description'),
  ogTitle: () => t('meta.termsClaude.title'),
  ogDescription: () => t('meta.termsClaude.description'),
});
</script>
