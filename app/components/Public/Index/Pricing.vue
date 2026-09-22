<template>
  <div class="p-6 mb-5 has-bg br-1">
    <section class="grid-2">
      <div class="item">
        <p class="top-text pb-1">{{ $t('index.problem.label') }}</p>
        <h2 class="f-size-l f-light">
          {{ $t('index.problem.heading') }}
        </h2>
        <div class="mx-auto f-hanken pb-2">
          <div class="pt-1 f-body f-hanken ws-break-spaces">
            {{ $t('index.problem.description') }}
          </div>
          <div class="pt-2 f-size-m f-bold">{{ $t('index.problem.conclusion') }}</div>
        </div>
      </div>
      <div class="item d-flex ai-center jc-end">
        <div class="pricing-card bg-secondary br-1 p-2">
          <div class="text-right">
            <Chip type="primary" display="inline">{{ $t('index.pricing.chip') }}</Chip>
          </div>
          <div class="pt-1">
            <p class="f-size-l pt-2">
              {{ $t('index.pricing.amount') }}
              <span class="f-size-s">{{ $t('index.pricing.unit') }}</span>
            </p>
          </div>
          <p class="pt-05 f-size-s pb-2 c-text-secondary">{{ $t('index.hero.disclaimer') }}</p>
          <div>
            <Button
              class="w-100"
              :text="$t('index.hero.cta')"
              icon="mdi:login"
              target="_blank"
              :has-shadow="true"
              :href="`${config.public.appUrl}/register`"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig(); 
</script>