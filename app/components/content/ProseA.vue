<template>
  <a :href="href" :target="target" :rel="rel" class="link">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ href?: string }>();
defineOptions({ inheritAttrs: false });

const isExternal = computed(() => /^https?:\/\//.test(props.href ?? ''));
const target = computed(() => (isExternal.value ? '_blank' : undefined));
const rel = computed(() => (isExternal.value ? 'noopener' : undefined));
</script>
