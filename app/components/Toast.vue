<template>
  <Teleport to="body">
    <div class="notify-toast-backdrop" :class="{ visible }" @click.self="hide">
      <div class="notify-toast" :class="{ visible }">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  duration: { type: Number, default: 0 },
  modelValue: { type: Boolean, default: undefined },
});

const emit = defineEmits(['close', 'update:modelValue']);
const internalVisible = ref(false);

const visible = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalVisible.value,
  set: (val) => {
    internalVisible.value = val;
    emit('update:modelValue', val);
  },
});

let timer = null;

function show() {
  visible.value = true;
  if (props.duration > 0) {
    clearTimeout(timer);
    timer = setTimeout(hide, props.duration);
  }
}

function hide() {
  if (!visible.value) return;
  visible.value = false;
  emit('close');
}

defineExpose({ show, hide });
</script>
