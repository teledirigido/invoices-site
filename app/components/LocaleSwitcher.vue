<template>
  <select :value="locale" class="locale-switcher" @change="changeLocale">
    <option v-for="l in availableLocales" :key="l.code" :value="l.code">
      {{ l.name }}
    </option>
  </select>
</template>
<script setup lang="ts">
import type { LOCALES } from '~~/shared/enums/locales';

const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => locales.value as Array<{ code: string; name: string }>);
const changeLocale = (event: Event) => {
  setLocale((event.target as HTMLSelectElement).value as LOCALES);
};
</script>
