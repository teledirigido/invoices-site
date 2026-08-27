<template>
  <section class="w-860 mx-auto landing-hero py-4 text-center">
    <p class="top-text pb-1 px-2 fade-up" style="animation-delay: 0s">
      {{ $t('index.hero.tagline') }}
    </p>
    <h1 class="fade-up" style="animation-delay: 0.06s">
      {{ $t('index.hero.heading') }}
    </h1>
    <div class="w-600 mx-auto f-hanken fade-up" style="animation-delay: 0.12s">
      <p class="pt-1 f-body">
        {{ $t('index.hero.description') }}
      </p>
      <div class="pt-2">
        <Button
          :text="$t('index.hero.cta')"
          icon="mdi-arrow-right"
          :has-shadow="true"
          href="#notify"
          :on-click="show"
        />
        <p class="f-size-xs pt-1 op-05">{{ $t('index.hero.disclaimer') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { show } = useNotifyToast();
</script>
