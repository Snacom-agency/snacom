import './styles/main.scss'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createI18n, type Locale } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import { en } from '../locales/en'
import { ar } from '../locales/ar'

const i18n = createI18n({
    legacy: false,
    locale: '',
    messages: {
        en:en,
        ar:ar
    },
  })

  


const app = createApp(App)

app.use(router)
app.use(i18n)

app.use(PrimeVue,{ripple:true})

app.mount('#app')



//   export const availableLocales = Object.keys(localesMap)
  
//   const loadedLanguages: string[] = []
  
  export function setI18nLanguage(lang: Locale) {
    i18n.global.locale.value = lang as any
    if (typeof document !== 'undefined')
      {document.querySelector('html')?.setAttribute('lang', lang)
    if(lang.includes('ar') )
        document.querySelector('html')?.setAttribute('dir', 'rtl')
    if(lang.includes('en') )
        document.querySelector('html')?.setAttribute('dir', 'ltr')

      }

      localStorage.setItem("lang", lang);

    return lang
  }
  
  export async function loadLanguageAsync(lang: string): Promise<Locale> {
    // If the same language
    if (i18n.global.locale.value === lang)
      return setI18nLanguage(lang)
  
    // If the language was already loaded
    // if (loadedLanguages.includes(lang))
    //   return setI18nLanguage(lang)

    // i18n.global.setLocaleMessage(lang, messages)
    // loadedLanguages.push(lang)
    return setI18nLanguage(lang)
  }

loadLanguageAsync(localStorage.getItem('lang')??'en')
