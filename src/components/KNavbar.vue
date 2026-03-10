<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { locale } = useI18n()
</script>

<template>
  <nav class="navbar navbar-dark" :aria-label="$t('nav.mainNavigation')">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="/assets/img/kicket-logo-nav.png"
          height="28"
          :alt="$t('nav.home')"
        />
      </a>
      <div class="lang-switcher" role="group" aria-label="Language">
        <button
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <button
          class="lang-btn"
          :class="{ active: locale === 'de' }"
          @click="setLocale('de')"
        >
          DE
        </button>
      </div>
    </div>
  </nav>
</template>
