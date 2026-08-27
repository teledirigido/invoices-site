<template>
  <Toast v-model="visible" @close="hide">
    <div v-if="success" class="notify-success">
      <p>{{ $t('index.toast.success') }}</p>
    </div>
    <form v-else action="#" class="c-form c-form-default" @submit.prevent="submit">
      <div class="field">
        <input
          ref="input"
          v-model="email"
          type="email"
          class="text"
          :placeholder="$t('index.toast.placeholder')"
          :disabled="loading"
        />
        <div class="d-flex helper pt-1 space-between">
          <p>
            <NuxtLink to="/pages/privacy" class="underlined-on-hover f-size-xs" target="_blank">
              {{ $t('index.toast.privacyLink') }}
            </NuxtLink>
          </p>
          <p class="pt-05 f-size-s text-right" v-if="email.length > 5">
            {{ $t('index.toast.pressEnter') }}
          </p>
        </div>
        <p v-if="error" class="notify-error">{{ error }}</p>
      </div>
    </form>
  </Toast>
</template>

<script setup>
const { t } = useI18n();
const { visible, hide } = useNotifyToast();
const { $api } = useNuxtApp();
const input = ref(null);
const email = ref('');
const loading = ref(false);
const success = ref(false);
const error = ref('');

watch(visible, (val) => {
  if (val) {
    success.value = false;
    error.value = '';
    email.value = '';
    nextTick(() => input.value?.focus());
  }
});

async function submit() {
  error.value = '';
  if (!email.value) return;

  loading.value = true;
  try {
    await $api('/api/notify', {
      method: 'POST',
      body: { email: email.value },
    });
    success.value = true;
    setTimeout(() => hide(), 3000);
  } catch (err) {
    if (err?.statusCode === 429) {
      error.value = t('index.toast.tooManyAttempts');
    } else {
      error.value = t('index.toast.genericError');
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.notify-success {
  padding: 1rem 0;
  text-align: center;
}
.notify-error {
  color: red;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}
</style>
