<template>
  <section class="showcase-wrapper w-1000 mx-auto pt-2 pb-6 pb-3--mobile fade-up" :class="{ 'is-ready': ready }">
    <div class="showcase-nav d-flex gap-05 pb-1 mb-2">
      <div
        class="showcase-nav--item showcase-nav--item-webapp"
        :class="{ active: activeTab === 'webapp' }"
        @click="activeTab = 'webapp'"
      >
        <Icon name="mdi-web" />
        {{ $t('index.appShowcase.tabWebApp') }}
      </div>
      <div
        class="showcase-nav--item showcase-nav--item-claude"
        :class="{ active: activeTab === 'claude' }"
        @click="selectClaudeTab"
      >
        <Icon name="material-icon-theme:claude" />
        {{ $t('index.appShowcase.tabClaude') }}
      </div>
      <div class="showcase-nav--item showcase-nav--item-chatgpt" :class="{ active: activeTab === 'chatgpt' }" @click="selectChatgptTab">
        <Icon name="hugeicons:chat-gpt" />
        {{ $t('index.appShowcase.tabChatgpt') }}
      </div>
    </div>
    <div class="showcase-content">
      <Transition name="fade" mode="out-in">
        <div
          v-if="activeTab === 'webapp'"
          key="webapp"
          class="showcase-content--item showcase-content--item-webapp pt-1"
        >
          <p class="f-hanken pb-1 text-center">
            {{ $t('index.appShowcase.descWebApp') }}
          </p>
          <Screenshot
            type="desktop"
            media="video"
            src="/images/hero-desktop-3x.mp4"
            :alt="$t('index.screenshots.altIngresos')"
            :max-height="510"
            :width="1440"
            :height="900"
            :show-scroll="true"
          />
        </div>
        <div
          v-else-if="activeTab === 'claude'"
          key="claude"
          class="showcase-content--item showcase-content--item-claude"
        >
          <div class="d-flex-mobile d-flex gap-4 ai-center jc-center">
            <div class="pb-2 content">
              <h3 class="f-light f-size-l pb-2">{{ $t('index.appShowcase.claudeHeading') }}</h3>
              <div class="d-flex flex-column gap-1 f-size-m f-hanken c-text-secondary">
                <p>
                  {{ $t('index.appShowcase.claudeText1Line1') }} <br>{{ $t('index.appShowcase.claudeText1Line2') }}
                </p>
                <p>
                  {{ $t('index.appShowcase.claudeText2Line1') }} <br>{{ $t('index.appShowcase.claudeText2Line2') }}
                </p>
                <p>
                  {{ $t('index.appShowcase.claudeText3Line1') }} <br>{{ $t('index.appShowcase.claudeText3Line2') }}
                </p>
              </div>
            </div>
            <div>
              <div style="max-width:250px">
                <Screenshot
                  type="mobile"
                  slug="chat"
                  media="video"
                  src="/images/hero-web-3x.mp4"
                  :sources="[{ src: '/images/hero-web-3x.webm', type: 'video/webm' }]"
                  :alt="$t('index.screenshots.altChat')"
                  :max-height="510"
                  :show-scroll="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="activeTab === 'chatgpt'"
          key="chatgpt"
          class="showcase-content--item showcase-content--item-chatgpt"
        >
          <div class="d-flex-mobile d-flex gap-4 ai-center jc-center">
            <div class="pb-2 content">
              <h3 class="f-light f-size-l pb-2">{{ $t('index.appShowcase.chatgptHeading') }}</h3>
              <div class="d-flex flex-column gap-1 f-size-m f-hanken c-text-secondary">
                <p>
                  {{ $t('index.appShowcase.chatgptText1Line1') }} <br>{{ $t('index.appShowcase.chatgptText1Line2') }}
                </p>
                <p>
                  {{ $t('index.appShowcase.chatgptText2Line1') }} <br>{{ $t('index.appShowcase.chatgptText2Line2') }}
                </p>
                <p>
                  {{ $t('index.appShowcase.chatgptText3Line1') }} <br>{{ $t('index.appShowcase.chatgptText3Line2') }}
                </p>
              </div>
            </div>
            <div>
              <div style="max-width:250px">
                <Screenshot
                  type="mobile"
                  slug="chatgpt"
                  media="video"
                  src="/images/hero-openai-web-3x.mp4"
                  :sources="[{ src: '/images/hero-openai-web-3x.webm', type: 'video/webm' }]"
                  :alt="$t('index.screenshots.altChatgpt')"
                  :max-height="510"
                  :show-scroll="true"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import Screenshot from '../Screenshot.vue';

const activeTab = ref<'webapp' | 'claude' | 'chatgpt'>('webapp');
const ready = ref(false);

function selectClaudeTab() {
  activeTab.value = 'claude';
  window.umami?.track('showcase-claude-tab-click');
}

function selectChatgptTab() {
  activeTab.value = 'chatgpt';
  window.umami?.track('showcase-chatgpt-tab-click');
}

onMounted(() => {
  if (window.matchMedia('(max-width: 680px)').matches) {
    activeTab.value = 'claude';
  }
  ready.value = true;
});
</script>

<style scoped lang="scss">
.showcase-wrapper {
  display: none;
  opacity: 0;

  &.is-ready {
    display: block;
    opacity: 1;
    transition: opacity 200ms ease;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>