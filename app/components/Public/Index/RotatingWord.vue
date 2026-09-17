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
      class="rotating-word__item"
      :class="{ 'rotating-word__item--leaving': index === leavingIndex }"
    >
      {{ word }}
    </span>
    <span
      v-for="word in words"
      :key="`ruler-${word}`"
      ref="rulerRefs"
      class="rotating-word__ruler"
      aria-hidden="true"
    >{{ word }}</span>
  </span>
</template>

<script setup>
const { tm, rt } = useI18n();
const words = tm('index.hero.rotatingWords').map((word) => (typeof word === 'string' ? word : rt(word)));

const INTERVAL_MS = 1200;
const SLIDE_MS = 400;

const currentIndex = ref(0);
const leavingIndex = ref(-1);
const currentWidth = ref(0);
const rulerRefs = ref(null);
let timer;

function shuffle(length) {
  const counter = Array.from({ length }, (_, i) => i);
  for (let i = counter.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [counter[i], counter[j]] = [counter[j], counter[i]];
  }
  return counter;
}

let bag = shuffle(words.length);

function drawNext() {
  if (bag.length === 0) {
    bag = shuffle(words.length);
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
  resizeTo(currentIndex.value);
  setTimeout(() => {
    leavingIndex.value = -1;
  }, SLIDE_MS);
}

function resizeTo(index) {
  const ruler = rulerRefs.value?.[index];
  if (ruler) currentWidth.value = ruler.offsetWidth;
}

function pause() {
  clearInterval(timer);
}

function resume() {
  clearInterval(timer);
  timer = setInterval(next, INTERVAL_MS);
}

onMounted(() => {
  resizeTo(currentIndex.value);
  resume();
});
onUnmounted(() => clearInterval(timer));
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
    width: 100%;
    line-height: 1.2em;
    white-space: nowrap;
    animation: rotating-word-in 0.4s ease both;

    &--leaving {
      animation: rotating-word-out 0.4s ease both;
    }
  }

  &__ruler {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    white-space: nowrap;
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
