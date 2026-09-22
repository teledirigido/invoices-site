<script setup lang="ts">
defineProps<{
  title?: string;
  background?: string;
  opacity?: string;
  shadow?: boolean;
  showLogo?: boolean;
}>();
</script>

<template>
  <div
    class="blog-card"
    :class="[background ? `bg-${background}` : undefined, shadow ? 'has-shadow' : undefined]"
    :style="opacity ? { opacity } : undefined"
  >
    <p v-if="title" class="f-size-ml d-flex ai-center gap-1 pb-1">
      <img v-if="showLogo" src="/images/favicon/favicon-32x32.png" alt="" class="blog-card__logo" />
      {{ title }}
    </p>
    <div class="">
      <slot />
    </div>
  </div>
</template>
