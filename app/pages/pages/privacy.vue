<template>
  <div class="w-860 mx-auto py-6 f-hanken">
    <p class="top-text pb-1">{{ $t('privacy.topText') }}</p>
    <h1 class="f-size-l f-light pb-1">{{ $t('privacy.title') }}</h1>

    <div class="summary-grid pb-4 pt-2">
      <div class="summary-item p-2">
        <p class="pb-05">{{ $t('privacy.summary.noCookiesTitle') }}</p>
        <p class="f-body-small">{{ $t('privacy.summary.noCookiesDesc') }}</p>
      </div>
      <div class="summary-item p-2">
        <p class="pb-05">{{ $t('privacy.summary.onlyEmailTitle') }}</p>
        <p class="f-body-small">{{ $t('privacy.summary.onlyEmailDesc') }}</p>
      </div>
      <div class="summary-item p-2">
        <p class="pb-05">{{ $t('privacy.summary.noSharingTitle') }}</p>
        <p class="f-body-small">{{ $t('privacy.summary.noSharingDesc') }}</p>
      </div>
      <div class="summary-item p-2">
        <p class="pb-05">{{ $t('privacy.summary.unsubscribeTitle') }}</p>
        <p class="f-body-small">{{ $t('privacy.summary.unsubscribeDesc') }}</p>
      </div>
    </div>

    <div class="privacy-body f-body c-text-secondary">
      <p>{{ $t('privacy.lastUpdated') }}</p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.controller.title') }}</h2>
      <p class="pb-2">
        <i18n-t keypath="privacy.controller.text" tag="span">
          <template #name>
            <strong class="c-text-primary">Miguel Nz</strong>
          </template>
          <template #email>
            <a href="mailto:hi@miguel.nz" class="link">hi@miguel.nz</a>
          </template>
        </i18n-t>
        <br />
        <i18n-t keypath="privacy.controller.domain" tag="span">
          <template #domain>
            <strong class="c-text-primary">nitidez.es</strong>
          </template>
        </i18n-t>
      </p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.dataCollected.title') }}</h2>
      <p class="pb-2">
        <i18n-t keypath="privacy.dataCollected.text" tag="span">
          <template #highlight>
            <strong class="c-text-primary">{{ $t('privacy.dataCollected.highlight') }}</strong>
          </template>
        </i18n-t>
      </p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.purpose.title') }}</h2>
      <p class="pb-1">{{ $t('privacy.purpose.intro') }}</p>
      <ul class="list pb-2">
        <li>
          <strong class="c-text-primary">{{ $t('privacy.purpose.notifyTitle') }}</strong>
          {{ $t('privacy.purpose.notifyDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.purpose.betaTitle') }}</strong>
          {{ $t('privacy.purpose.betaDesc') }}
        </li>
      </ul>
      <p class="pb-2">{{ $t('privacy.purpose.noOtherUse') }}</p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.retention.title') }}</h2>
      <p class="pb-2">{{ $t('privacy.retention.intro') }}</p>
      <ul class="list pb-2">
        <li>{{ $t('privacy.retention.reason1') }}</li>
        <li class="pt-1">{{ $t('privacy.retention.reason2') }}</li>
      </ul>
      <p class="pb-2">{{ $t('privacy.retention.noLonger') }}</p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.recipients.title') }}</h2>
      <p class="pb-2">
        <i18n-t keypath="privacy.recipients.text" tag="span">
          <template #resend>
            <strong class="c-text-primary">Resend</strong>
          </template>
          <template #link>
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener"
              class="link"
            >
              resend.com
            </a>
          </template>
        </i18n-t>
      </p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.rights.title') }}</h2>
      <p class="pb-1">{{ $t('privacy.rights.intro') }}</p>
      <ul class="list pb-2">
        <li>
          <strong class="c-text-primary">{{ $t('privacy.rights.access') }}</strong>
          — {{ $t('privacy.rights.accessDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.rights.rectification') }}</strong>
          — {{ $t('privacy.rights.rectificationDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.rights.erasure') }}</strong>
          — {{ $t('privacy.rights.erasureDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.rights.objection') }}</strong>
          — {{ $t('privacy.rights.objectionDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.rights.portability') }}</strong>
          — {{ $t('privacy.rights.portabilityDesc') }}
        </li>
        <li class="pt-1">
          <strong class="c-text-primary">{{ $t('privacy.rights.withdraw') }}</strong>
          — {{ $t('privacy.rights.withdrawDesc') }}
        </li>
      </ul>
      <p class="pb-2">
        <i18n-t keypath="privacy.rights.exercise" tag="span">
          <template #email>
            <a href="mailto:hi@miguel.nz" class="link">hi@miguel.nz</a>
          </template>
          <template #aepd>
            <a href="https://www.aepd.es" target="_blank" rel="noopener" class="link">
              {{ $t('privacy.rights.aepdName') }}
            </a>
          </template>
        </i18n-t>
      </p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.cookies.title') }}</h2>
      <p class="pb-2">{{ $t('privacy.cookies.text') }}</p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.security.title') }}</h2>
      <p class="pb-2">{{ $t('privacy.security.text') }}</p>

      <h2 class="f-size-ml f-light pb-1 pt-3">{{ $t('privacy.changes.title') }}</h2>
      <p class="pb-2">{{ $t('privacy.changes.text') }}</p>

      <hr class="hr-bottom mt-3" />
      <p class="pt-2 f-size-xs op-05">{{ $t('privacy.disclaimer') }}</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'public' });
</script>
