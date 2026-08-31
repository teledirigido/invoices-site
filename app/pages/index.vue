<template>
  <Hero />
  <AppShowcase />

  <section class="w-1140 mx-auto">
    <div class="grid-3 grid-highlights f-hanken pb-2 gap-2 f-body">
      <div class="item br-1 p-2 f-hanken">
        <h3 class="f-size-m">
          {{ $t('index.highlights.dailyTitle') }}
        </h3>
        <p class="pt-1 c-text-secondary f-size-sm">
          {{ $t('index.highlights.dailyDesc') }}
        </p>
      </div>
      <div class="item br-1 p-2 f-hanken">
        <h3 class="f-size-m">
          {{ $t('index.highlights.modelsTitle') }}
        </h3>
        <p class="pt-1 c-text-secondary f-size-sm">
          {{ $t('index.highlights.modelsDesc') }}
        </p>
      </div>
      <div class="item br-1 p-2 f-hanken">
        <h3 class="f-size-m">
          {{ $t('index.highlights.invoicesTitle') }}
        </h3>
        <p class="pt-1 c-text-secondary f-size-sm">
          {{ $t('index.highlights.invoicesDesc') }}
        </p>
      </div>
    </div>
  </section>

  <section class="w-860 mx-auto landing-hero py-5 text-center">
    <p class="top-text pb-1">{{ $t('index.problem.label') }}</p>
    <h2 class="f-size-l f-light">
      {{ $t('index.problem.heading') }}
      <!-- <br /> -->
      <!-- {{ $t('index.problem.headingSub') }} -->
    </h2>
    <div class="w-780 mx-auto f-hanken pb-2">
      <div class="pt-1 f-body f-hanken ws-break-spaces">
        {{ $t('index.problem.description') }}
      </div>
      <div class="pt-2 f-size-m f-bold">{{ $t('index.problem.conclusion') }}</div>
      <hr class="hr-bottom" />
    </div>
  </section>

  <section id="audience" class="grid-2 gap-3 w-1140 mx-auto pb-4 pb-1--mobile">
    <div class="item">
      <Screenshot
        slug="factura / 260008"
        src="/images/tipo-autonomo.png"
        :alt="$t('index.screenshots.altFactura')"
        :max-height="390"
        :width="1440"
        :height="1050"
        :show-scroll="false"
      />
    </div>
    <div class="item">
      <p class="top-text pt-1">{{ $t('index.audience.label') }}</p>
      <h3 class="f-size-l f-light pt-1">{{ $t('index.audience.heading') }}</h3>
      <div class="f-hanken pt-2 c-text-secondary f-body">
        <p class="pb-1 ws-break-spaces">
          {{ $t('index.audience.description') }}
        </p>
        <p class="pb-1">{{ $t('index.audience.conclusion') }}</p>
        <Button
          :text="$t('index.hero.cta')"
          icon="mdi:arrow-right"
          class="br-1"
          style="background-color: #fff"
          :has-shadow="true"
          href="#"
          type="text"
          :on-click="show"
        />
      </div>
    </div>
  </section>

  <h3 class="f-size-l f-light pt-2">{{ $t('index.models.exportHeading') }}</h3>
  <div class="pt-05">
    <p>{{ $t('index.models.exportSubheading') }}</p>
  </div>
  <section class="bg-secondary p-3 my-2 br-1">
    <div class="grid-3 gap-4">
      <div class="item">
        <h3 class="f-size-ml f-light">{{ $t('index.models.modelo130Title') }}</h3>
        <p class="pt-1 f-body-small">
          {{ $t('index.models.modelo130Desc') }}
        </p>
      </div>
      <div class="item">
        <h3 class="f-size-ml f-light">{{ $t('index.models.modelo303Title') }}</h3>
        <p class="pt-1 f-body-small">
          {{ $t('index.models.modelo303Desc') }}
        </p>
      </div>
      <div class="item">
        <h3 class="f-size-ml f-light">{{ $t('index.models.modelo349Title') }}</h3>
        <p class="pt-1 f-body-small">
          {{ $t('index.models.modelo349Desc') }}
        </p>
      </div>
    </div>
  </section>

  <section class="pt-5 pb-4">
    <h3 class="f-size-l f-light text-center">{{ $t('index.socialSecurity.heading') }}</h3>
    <div class="grid-2 mt-2 gap-2 mx-auto" style="max-width: 850px; ">

      <div class="item bg-white br-1 p-3">
        <h3 class="f-size-ml f-light">{{ $t('index.socialSecurity.obligationsTitle') }}</h3>
        <p class="pt-1 f-body-small">
          {{ $t('index.socialSecurity.obligationsDesc') }}
        </p>
      </div>

      <div class="item bg-white br-1 p-3">
        <h3 class="f-size-ml f-light">{{ $t('index.socialSecurity.bracketTitle') }}</h3>
        <p class="pt-1 f-body-small">
          {{ $t('index.socialSecurity.bracketDesc') }}
        </p>
      </div>

    </div>
  </section>


  <section id="scope" class="w-860 mx-auto text-center py-4">
    <p class="top-text">{{ $t('index.scope.label') }}</p>
    <h3 class="f-size-l f-light pt-1">{{ $t('index.scope.heading') }}</h3>
    <div class="pt-2 f-hanken f-body">
      {{ $t('index.scope.description') }}
    </div>
    <div class="pt-2 d-flex gap-1 jc-center flex-wrap">
      <Chip type="secondary" display="inline">{{ $t('index.scope.chipNominas') }}</Chip>
      <Chip type="secondary" display="inline">{{ $t('index.scope.chipModulos') }}</Chip>
      <Chip type="secondary" display="inline">{{ $t('index.scope.chipPresenta') }}</Chip>
    </div>
  </section>

  <NotifyMe />

  <Toast ref="toast" :duration="4000" @close="() => router.replace({ query: {} })">
    {{ toastMessage }}
  </Toast>
</template>
<script lang="ts" setup>
import AppShowcase from '~/components/Public/Index/AppShowcase.vue';
import Hero from '~/components/Public/Index/Hero.vue';
import NotifyMe from '~/components/Public/Index/NotifyMe.vue';
import Screenshot from '~/components/Public/Screenshot.vue';
import Toast from '~/components/Toast.vue';

definePageMeta({ layout: 'public' });
const { t, locale } = useI18n();

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Nitidez',
        url: 'https://nitidez.es',
        description: t('meta.home.description'),
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        inLanguage: locale.value,
        audience: {
          '@type': 'Audience',
          audienceType: 'Freelancers in Spain (autónomos)',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/PreOrder',
        },
        provider: {
          '@type': 'Organization',
          name: 'Nitidez',
          url: 'https://nitidez.es',
        },
      })),
    },
  ],
});

type ConfirmationType = {
  key: 'confirmed' | 'already-confirmed' | 'expired' | 'not-found';
  description: () => string;
};

const confirmationTypes: Array<ConfirmationType> = [
  {
    key: 'confirmed',
    description: () => t('index.toast.subscriptionConfirmed'),
  },
  {
    key: 'already-confirmed',
    description: () => 'Email has been confirmed. We will be in touch soon',
  },
  {
    key: 'expired',
    description: () => 'Tu token de validación ha expirado, inténtalo nuevamente.',
  },
  {
    key: 'not-found',
    description: () => 'Error. Inténtalo nuevamente',
  },
];

const route = useRoute();
const router = useRouter();

const { show } = useNotifyToast();
const toast = ref<InstanceType<typeof Toast> | null>(null);
const toastMessage = ref('');

onMounted(async () => {
  const match = confirmationTypes.find((c) => c.key === route.query.notify);
  if (match) {
    toastMessage.value = match.description();
    await nextTick();
    toast.value?.show();
  }
});
</script>
