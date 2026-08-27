<template>
  <div v-if="type === 'desktop'" data-dc-tpl="28" class="screenshot-desktop">
    <div data-dc-tpl="29" class="screenshot-desktop__bar">
      <span data-dc-tpl="30" class="screenshot-desktop__dot"></span>
      <span data-dc-tpl="31" class="screenshot-desktop__dot screenshot-desktop__dot--2"></span>
      <span data-dc-tpl="32" class="screenshot-desktop__dot screenshot-desktop__dot--3"></span>
      <span data-dc-tpl="33" class="screenshot-desktop__url"> nitidez.es / {{ slug }} </span>
    </div>
    <div
      ref="containerRef"
      class="screenshot-frame"
      :style="{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }"
    >
      <video
        v-if="media === 'video'"
        data-dc-tpl="34"
        :src="src"
        class="screenshot-frame__video"
        autoplay
        loop
        muted
        playsinline
      />
      <img
        v-else
        data-dc-tpl="34"
        :src="src"
        :alt="alt"
        class="screenshot-frame__img"
        :style="{ transform: `translateY(${offset}px)` }"
      />
    </div>
  </div>

  <div v-else class="screenshot-mobile">
    <div
      ref="containerRef"
      class="screenshot-frame"
      :style="{ maxHeight: media === 'video' || !maxHeight ? undefined : `${maxHeight}px` }"
    >
      <video
        v-if="media === 'video'"
        :src="src"
        class="screenshot-frame__video"
        autoplay
        loop
        muted
        playsinline
      />
      <img
        v-else
        :src="src"
        :alt="alt"
        class="screenshot-frame__img"
        :style="{ transform: `translateY(${offset}px)` }"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: 'mobile' | 'desktop';
    media?: 'image' | 'video';
    slug: string;
    src: string;
    alt?: string;
    maxHeight?: number;
  }>(),
  {
    type: 'desktop',
    media: 'image'
  },
);

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

<style scoped lang="scss">
.screenshot-desktop {
  border-radius: 16px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(46, 42, 36, 0.08);
  box-shadow:
    rgba(46, 42, 36, 0.45) 0px 40px 80px -40px,
    rgba(46, 42, 36, 0.2) 0px 8px 20px -12px;

  &__bar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 16px;
    background: rgb(239, 230, 215);
    border-bottom: 1px solid rgba(46, 42, 36, 0.06);
    overflow: scroll;
  }

  &__dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgb(216, 197, 166);

    &--2 {
      background: rgb(228, 211, 180);
    }

    &--3 {
      background: rgb(234, 220, 194);
    }
  }

  &__url {
    margin-left: 14px;
    font-size: 12.5px;
    color: rgb(154, 145, 132);
    font-weight: 500;
  }
}

.screenshot-mobile {
  border-radius: 54px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  border: 10px solid rgb(205, 192, 165);
  box-shadow:
    rgba(46, 42, 36, 0.45) 0px 40px 80px -40px,
    rgba(46, 42, 36, 0.2) 0px 8px 20px -12px;
}

.screenshot-frame {
  overflow: hidden;

  &__img {
    display: block;
    width: 100%;
    height: auto;
  }

  &__video {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
