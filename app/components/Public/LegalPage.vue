<template>
  <div v-if="page" class="w-860 mx-auto py-6 f-hanken">
    <p class="top-text pb-1">{{ page.topText }}</p>
    <h1 class="f-size-l f-light pb-1">{{ page.title }}</h1>

    <div class="summary-grid pb-4 pt-2">
      <div v-for="item in page.summary" :key="item.title" class="summary-item p-2">
        <p class="pb-05">{{ item.title }}</p>
        <p class="f-body-small">{{ item.desc }}</p>
      </div>
    </div>

    <div class="privacy-body f-body c-text-secondary">
      <p>{{ page.lastUpdated }}</p>

      <ContentRenderer :value="page" />

      <hr class="hr-bottom mt-3" />
      <p class="pt-2 f-size-xs op-05">{{ page.disclaimer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ slug: string }>();
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  () => `legal-${props.slug}-${locale.value}`,
  () => queryCollection('legalPages').where('slug', '=', props.slug).where('locale', '=', locale.value).first(),
  { watch: [locale] },
);
</script>
