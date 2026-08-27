<template>
  <section id="notify" class="w-1000 bg-black mx-auto p-4 p-2--mobile br-1 text-center my-4">
    <p class="top-text">{{ $t('index.notifyMe.label') }}</p>
    <h3 class="c-on-black f-size-l pt-1">{{ $t('index.notifyMe.heading') }}</h3>
    <div class="f-hanken f-body pt-2 c-on-black w-600 mx-auto">
      <p>
        {{ $t('index.notifyMe.description') }}
      </p>
    </div>
    <div class="pt-2">
      <AdminButton type="primary" :text="$t('index.hero.cta')" :on-click="show" />
      <p class="c-on-black f-size-xs pt-1 op-05">{{ $t('index.hero.disclaimer') }}</p>
    </div>
  </section>
</template>

<script setup>
const { show } = useNotifyToast();
</script>
