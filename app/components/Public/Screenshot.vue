<template>
  <div
    data-dc-tpl="28"
    style="
      border-radius: 16px;
      overflow: hidden;
      background: rgb(255, 255, 255);
      border: 1px solid rgba(46, 42, 36, 0.08);
      box-shadow:
        rgba(46, 42, 36, 0.45) 0px 40px 80px -40px,
        rgba(46, 42, 36, 0.2) 0px 8px 20px -12px;
    "
  >
    <div
      data-dc-tpl="29"
      style="
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 12px 16px;
        background: rgb(239, 230, 215);
        border-bottom: 1px solid rgba(46, 42, 36, 0.06);
        overflow: scroll;
      "
    >
      <span
        data-dc-tpl="30"
        style="width: 11px; height: 11px; border-radius: 50%; background: rgb(216, 197, 166)"
      ></span>
      <span
        data-dc-tpl="31"
        style="width: 11px; height: 11px; border-radius: 50%; background: rgb(228, 211, 180)"
      ></span>
      <span
        data-dc-tpl="32"
        style="width: 11px; height: 11px; border-radius: 50%; background: rgb(234, 220, 194)"
      ></span>
      <span
        data-dc-tpl="33"
        style="margin-left: 14px; font-size: 12.5px; color: rgb(154, 145, 132); font-weight: 500"
      >
        nitidez.es / {{ slug }}
      </span>
    </div>
    <div
      ref="containerRef"
      :style="{
        maxHeight: maxHeight ? `${maxHeight}px` : undefined,
        overflow: 'hidden',
      }"
    >
      <img
        data-dc-tpl="34"
        :src="src"
        :alt="alt"
        :style="{
          display: 'block',
          width: '100%',
          height: 'auto',
          transform: `translateY(${offset}px)`,
        }"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { slug, src, alt } = defineProps<{
  slug: string;
  src: string;
  alt?: string;
  maxHeight?: number;
}>();

const containerRef = ref<HTMLElement>();
const offset = ref(0);

function onScroll() {
  const el = containerRef.value;
  if (!el) return;
  const img = el.querySelector('img') as HTMLImageElement;
  const maxShift = img ? -(img.offsetHeight - el.offsetHeight) : -250;
  const rect = el.getBoundingClientRect();
  const progress = 1 - rect.top / window.innerHeight;
  const raw = (0.5 - progress) * 250;
  offset.value = Math.max(maxShift, Math.min(0, raw));
}

onMounted(() => {
  nextTick(onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
