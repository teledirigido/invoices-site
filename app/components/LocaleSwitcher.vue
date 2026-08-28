<template>
  <select :value="locale" class="locale-switcher" aria-label="Language" @change="changeLocale">
    <option v-for="l in availableLocales" :key="l.code" :value="l.code">
      {{ l.name }}
    </option>
  </select>
</template>
<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';

const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => locales.value as Array<LocaleObject>);
const changeLocale = (event: Event) => {
  setLocale((event.target as HTMLSelectElement).value as LocaleObject['code']);
};
</script>
