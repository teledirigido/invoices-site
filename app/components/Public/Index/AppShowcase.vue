<script setup lang="ts">
import Screenshot from '../Screenshot.vue';

const activeTab = ref<'webapp' | 'claude'>('webapp');
</script>

<template>
  <section class="w-1000 mx-auto pt-2 pb-6 pb-3--mobile fade-up" style="animation-delay: 0.28s">
    <div class="d-flex gap-05 pb-1">
      <div class="showcase-nav--item" :class="{ active: activeTab === 'webapp' }" @click="activeTab = 'webapp'">
        <Icon name="mdi-web" />
        {{ $t('index.appShowcase.tabWebApp') }}
      </div>
      <div class="showcase-nav--item disabled" :class="{ active: activeTab === 'claude' }" @click="activeTab = 'claude'">
        <Icon name="material-icon-theme:claude" />
        {{ $t('index.appShowcase.tabClaude') }}
        <span class="label">{{ $t('index.appShowcase.comingSoon') }}</span>
      </div>
      <div class="showcase-nav--item disabled" :class="{ active: activeTab === 'claude' }" @click="activeTab = 'claude'">
        <Icon name="hugeicons:chat-gpt" />
        ChatGPT
        <span class="label">{{ $t('index.appShowcase.comingSoon') }}</span>
      </div>
    </div>
    <div class="showcase-content">
      <div v-if="activeTab === 'webapp'" class="showcase-content--item pt-1">
        <p class="f-hanken pb-1">
          {{ $t('index.appShowcase.descWebApp') }}
        </p>
        <Screenshot
          slug="ingresos"
          src="/images/hero-image.png"
          :alt="$t('index.screenshots.altIngresos')"
          :max-height="510"
          :show-scroll="true"
        />
      </div>
      <!-- <div v-if="activeTab === 'claude'" class="showcase-content--item">
        <p class="f-hanken pb-2">
          {{ $t('index.appShowcase.descClaude') }}
        </p>
        <Screenshot
          slug="chat"
          src="/images/claude-chat.png"
          :alt="$t('index.screenshots.altChat')"
          :max-height="510"
          :show-scroll="true"
        />
      </div> -->
    </div>
  </section>
</template>

<style scoped lang="scss">
.showcase-nav--item {
  display: flex;
  align-items: center;
  gap:0.5rem;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 1000px;
  font-size:1.2rem;
  font-weight: 300;
  color: var(--text-secondary, rgba(46, 42, 36, 0.6));
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover {
    background-color: rgba(222, 201, 160, 0.18);
  }
  &.active {
    background-color: rgba(222, 201, 160, 0.35);
    color: inherit;
  }
  &.disabled {
    pointer-events: none;
  }
  .label {
    margin-left: 0.5rem;
    display: inline-block;
    padding:0.3rem 0.75rem;
    text-transform: uppercase;
    font-size:0.8rem;
    background:#FFF;
    border-radius:5px;
  }
}
</style>