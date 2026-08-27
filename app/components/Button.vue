<template>
  <div
    :class="`admin-button-wrapper admin-button-${type} 
      ${$slots.submenu ? 'admin-button-has-submenu' : ''}
      ${disabled ? 'admin-button--disabled' : ''}
      `"
  >
    <a
      class="admin-button--text"
      :href="href ? href : '#'"
      :class="`${icon || $slots.submenu || prependIcon ? 'button-with-icon' : ''}`"
      v-bind="$attrs"
      @click="handleClick"
    >
      <Icon
        v-if="prependIcon"
        :name="loading ? 'mdi:loading' : prependIcon"
        :class="{ spinning: loading }"
      />
      {{ text }}
      <Icon
        v-if="icon && !prependIcon"
        :name="loading ? 'mdi:loading' : icon"
        :class="{ spinning: loading }"
      />
      <Icon v-else-if="!icon && !prependIcon && $slots.submenu" name="mdi:chevron-down" />
    </a>
    <div v-if="$slots.submenu" class="admin-button--submenu">
      <slot name="submenu" />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
const props = withDefaults(
  defineProps<{
    disabled?: boolean | undefined;
    type?: 'primary' | 'secondary' | 'text';
    text?: string;
    href?: string;
    icon?: string;
    prependIcon?: string;
    loading?: boolean;
    onClick?: () => void;
  }>(),
  {
    disabled: false,
    type: 'primary',
  },
);
function handleClick(e: MouseEvent) {
  if (props.onClick) {
    e.preventDefault();
    if (!props.disabled) props.onClick();
    return;
  }
  if (props.href?.startsWith('#')) {
    e.preventDefault();
    document.querySelector(props.href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
