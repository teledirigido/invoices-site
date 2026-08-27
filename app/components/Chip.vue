<template>
  <div
    :class="`chip chip--${props.size} chip--${props.type}`"
    :style="props.display ? { display: props.display } : undefined"
  >
    <slot>{{ props.text }}</slot>
  </div>
</template>

<script lang="ts" setup>
type chipSize = 'default' | 'small';
type CSSDisplay = 'inline' | 'block' | 'inline-block' | 'flex' | 'none';

const props = withDefaults(
  defineProps<{
    size?: chipSize;
    text?: string;
    type?: string;
    display?: CSSDisplay;
  }>(),
  {
    size: 'default',
  },
);
</script>
