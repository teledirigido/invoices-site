<template>
  <span
    class="rotating-word"
    :style="{
      width: currentWidth ? `${currentWidth}px` : undefined,
    }"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <span
      v-for="(word, index) in words"
      v-show="index === currentIndex || index === leavingIndex"
      :key="word"
      :ref="(el) => setItemRef(el, index)"
      class="rotating-word__item"
      :class="{ 'rotating-word__item--leaving': index === leavingIndex }"
    >
      {{ word }}
    </span>
  </span>
</template>

<script setup>
const emit = defineEmits(['ready']);

const { tm, rt, locale } = useI18n();
const words = computed(() => tm('index.hero.rotatingWords').map((word) => (typeof word === 'string' ? word : rt(word))));

const INTERVAL_MS = 1200;
const SLIDE_MS = 400;

const currentIndex = ref(0);
const leavingIndex = ref(-1);
const currentWidth = ref(0);
const itemEls = new Map();
let timer;
let resizeObserver;

function setItemRef(el, index) {
  if (el) {
    itemEls.set(index, el);
  } else {
    itemEls.delete(index);
  }
}

function shuffle(length) {
  const counter = Array.from({ length }, (_, i) => i);
  for (let i = counter.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [counter[i], counter[j]] = [counter[j], counter[i]];
  }
  return counter;
}

let bag = shuffle(words.value.length);

function observeCurrent() {
  if (!resizeObserver) return;
  resizeObserver.disconnect();
  const el = itemEls.get(currentIndex.value);
  if (el) resizeObserver.observe(el);
}

watch(locale, () => {
  bag = shuffle(words.value.length);
  currentIndex.value = 0;
  leavingIndex.value = -1;
  nextTick(observeCurrent);
});

function drawNext() {
  if (bag.length === 0) {
    bag = shuffle(words.value.length);
    if (bag[0] === currentIndex.value && bag.length > 1) {
      [bag[0], bag[1]] = [bag[1], bag[0]];
    }
  }
  return bag.shift();
}

function next() {
  const nextIndex = drawNext();
  leavingIndex.value = currentIndex.value;
  currentIndex.value = nextIndex;
  nextTick(observeCurrent);
  setTimeout(() => {
    leavingIndex.value = -1;
  }, SLIDE_MS);
}

function pause() {
  clearInterval(timer);
}

function resume() {
  clearInterval(timer);
  timer = setInterval(next, INTERVAL_MS);
}

onMounted(() => {
  let firstMeasure = true;
  resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry) currentWidth.value = entry.borderBoxSize?.[0]?.inlineSize ?? entry.target.offsetWidth;
    if (firstMeasure && currentWidth.value) {
      firstMeasure = false;
      emit('ready');
    }
  });
  nextTick(observeCurrent);
  resume();
});
onUnmounted(() => {
  clearInterval(timer);
  resizeObserver?.disconnect();
});
</script>

<style scoped lang="scss">
.rotating-word {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 1.2em;
  overflow: hidden;
  transition: width 0.4s ease;

  &__item {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.2em;
    white-space: nowrap;
    animation: rotating-word-in 0.4s ease both;

    &--leaving {
      animation: rotating-word-out 0.4s ease both;
    }
  }
}

@keyframes rotating-word-in {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotating-word-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
