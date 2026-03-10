import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const STORAGE_KEY = 'kicket-language'

const savedLocale = localStorage.getItem(STORAGE_KEY) || 'en'
document.documentElement.lang = savedLocale

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, de },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
}
