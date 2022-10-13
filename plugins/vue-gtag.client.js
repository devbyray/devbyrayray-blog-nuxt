import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: nuxtApp?.options?.publicRuntimeConfig?.GOOGLE_ANALYTICS_ID ?? ''
    },
    appName: 'DevByRayRay Blog',
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});