<template>
  <section class="mx-auto landing-hero py-4 text-center">
    <p class="top-text pb-1 px-2 fade-up" style="animation-delay: 0s">
      {{ $t('index.hero.tagline') }}
    </p>
    <h1 class="hero-heading" :class="{ 'hero-heading--ready': ready }">
      <span class="hero-heading__line1" :class="{ 'hero-heading__line--in': ready }" style="animation-delay: 0s">
        {{ $t('index.hero.headingPrefix') }} <br class="rotating-word-break"><RotatingWord @ready="ready = true" />
      </span>
      <br>
      <span class="hero-heading__line2" :class="{ 'hero-heading__line--in': ready }" style="animation-delay: 0.15s">
        {{ $t('index.hero.headingSuffix') }}
      </span>
    </h1>
    <div class="w-600 mx-auto f-hanken fade-up" style="animation-delay: 0.12s">
      <p class="pt-1 f-body">
        {{ $t('index.hero.description') }}
      </p>
      <div class="pt-2">
        <Button
          :text="$t('index.hero.cta')"
          :has-shadow="true"
          icon="mdi-login"
          :href="`${config.public.appUrl}/register`"
        />
        <p class="f-size-xs pt-1 op-05">{{ $t('index.hero.disclaimer') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import RotatingWord from './RotatingWord.vue';

const config = useRuntimeConfig();
const ready = ref(false);
</script>

<style scoped lang="scss">
.hero-heading {
  &__line1,
  &__line2 {
    display: inline-block;
    opacity: 0;
  }

  &__line--in {
    animation: hero-heading-line-in 0.4s ease both;
  }
}

@keyframes hero-heading-line-in {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
