<template>
  <Toast v-model="visible" @close="hide">
    <div v-if="success" class="notify-success">
      <p>{{ $t('index.toast.success') }}</p>
    </div>
    <form v-else action="#" class="c-form c-form-default" @submit.prevent="submit">
      <div class="field d-flex gap-05" style="padding-bottom: 1rem;">
        <input
          ref="input"
          v-model="email"
          type="email"
          class="text"
          :placeholder="$t('index.toast.placeholder')"
          :disabled="loading"
        />
        <button type="submit">{{ $t('index.toast.submit') }}</button>
      </div>
      <div class="d-flex helper space-between">
        <p>
          <NuxtLink to="/pages/privacy" class="underlined-on-hover f-size-xs" target="_blank">
            {{ $t('index.toast.privacyLink') }}
          </NuxtLink>
        </p>
      </div>
      <p v-if="error" class="notify-error">{{ error }}</p>
    </form>
  </Toast>
</template>

<script setup>
const { t } = useI18n();
const { visible, hide } = useNotifyToast();
const config = useRuntimeConfig();
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
    await $fetch(`${config.public.appUrl}/api/notify`, {
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

<style scoped lang="scss">
.notify-success {
  padding: 1rem 0;
  text-align: center;
}
.notify-error {
  color: red;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}
button {
  background: #444;
  color: #FFF;
  padding:1rem;
  border-radius: 0.5rem;
  border:0 none;
  font-size: inherit;
}
</style>
