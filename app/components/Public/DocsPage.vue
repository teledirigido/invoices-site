<template>
  <div v-if="page" class="docs-page mx-auto py-6 f-hanken">
    <p class="top-text pb-1">{{ page.topText }}</p>
    <h1 class="f-size-l f-light pb-1">{{ page.title }}</h1>

    <div class="docs-page__layout pt-2">
      <aside class="docs-page__nav">
        <p class="f-body-small c-text-secondary pb-1">{{ $t('docsMcp.onThisPage') }}</p>
        <ul>
          <li v-for="section in staticSections" :key="section.id">
            <a :href="`#${section.id}`" :class="{ 'is-active': activeId === section.id }">
              {{ section.label }}
            </a>
          </li>
          <li>
            <a href="#tools" :class="{ 'is-active': activeId === 'tools' }">{{ $t('docsMcp.tools') }}</a>
            <ul>
              <li v-for="group in toolGroups" :key="group.name">
                <a
                  :href="`#${slugify(group.name)}`"
                  :class="{ 'is-active': activeId === slugify(group.name) }"
                >
                  {{ group.name }}
                </a>
                <ul>
                  <li v-for="tool in group.tools" :key="tool.name">
                    <a :href="`#${tool.name}`" :class="{ 'is-active': activeId === tool.name }">
                      <code>{{ tool.name }}</code>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#support-and-contact"
              :class="{ 'is-active': activeId === 'support-and-contact' }"
            >
              {{ $t('docsMcp.supportAndContact') }}
            </a>
          </li>
        </ul>
      </aside>

      <div class="docs-body f-body c-text-secondary">
        <p class="pb-3 text-right">{{ page.lastUpdated }}</p>

        <ContentRenderer :value="page" />

        <h2 id="tools" class="f-size-ml f-light pb-1 pt-3">{{ $t('docsMcp.tools') }}</h2>
        <ToolReference />

        <h2 id="support-and-contact" class="f-size-ml f-light pb-1 pt-3">{{ $t('docsMcp.supportAndContact') }}</h2>
        <p>
          <i18n-t keypath="docsMcp.supportText" tag="span">
            <template #email>
              <a class="underlined" href="mailto:hi@miguel.nz">hi@miguel.nz</a>
            </template>
            <template #home>
              <NuxtLink class="underlined" to="/">nitidez.es</NuxtLink>
            </template>
            <template #terms>
              <NuxtLink class="underlined" to="/pages/terms">nitidez.es/pages/terms</NuxtLink>
            </template>
          </i18n-t>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolReference from '~/components/Public/Docs/ToolReference.vue';

const props = defineProps<{ slug: string }>();
const { locale, t } = useI18n();

const { data: page } = await useAsyncData(
  () => `docs-${props.slug}-${locale.value}`,
  () =>
    queryCollection('docsPages')
      .where('slug', '=', props.slug)
      .where('locale', '=', locale.value)
      .first(),
  { watch: [locale] },
);

const toolGroups = computed(() => getLocalizedToolGroups(locale.value as 'en' | 'es'));

const staticSections = computed(() =>
  [
    t('docsMcp.gettingStarted'),
    t('docsMcp.endpoint'),
    t('docsMcp.authAndAuthorization'),
    t('docsMcp.dataAccessed'),
  ].map((label) => ({ id: slugify(label), label })),
);

const sectionIds = computed(() => [
  ...staticSections.value.map((s) => s.id),
  'tools',
  ...toolGroups.value.flatMap((group) => [
    slugify(group.name),
    ...group.tools.map((tool) => tool.name),
  ]),
  'support-and-contact',
]);

const activeId = ref<string | null>(null);
let observer: IntersectionObserver | null = null;

function observeSections() {
  observer?.disconnect();
  const visibleIds = new Set<string>();

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting) visibleIds.add(id);
        else visibleIds.delete(id);
      }

      for (const id of sectionIds.value) {
        if (visibleIds.has(id)) {
          activeId.value = id;
          break;
        }
      }
    },
    { rootMargin: '-10% 0px -70% 0px' },
  );

  for (const id of sectionIds.value) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }
}

onMounted(() => {
  observeSections();
});

watch(locale, () => {
  nextTick(() => observeSections());
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
