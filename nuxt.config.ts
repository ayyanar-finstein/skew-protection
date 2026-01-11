// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-skew-protection', '@nuxtjs/robots'],
  // runtimeConfig: {
  //   seoProKey: 'nsp_d9f8926354a942b9970896b48e49f736'
  // },
  skewProtection: {
    // Disable persistent storage
    bundlePreviousDeploymentChunks: true,
    enabled: true
  }
})