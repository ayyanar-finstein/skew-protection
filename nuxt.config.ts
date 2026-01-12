// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-skew-protection', '@nuxtjs/robots'],
  runtimeConfig: {
    seoProKey: 'nsp_a2ac0faebc054b7f926a5bea87fedd1f'
  },
  skewProtection: {
    // Disable persistent storage
    bundlePreviousDeploymentChunks: false,
    enabled: true
  }
})