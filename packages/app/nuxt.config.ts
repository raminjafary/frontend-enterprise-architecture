import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  experimental: {
    externalVue: true,
    componentIslands: 'local+remote',
    payloadExtraction: true,
    inlineRouteRules: true,
    templateRouteInjection: true,
    treeshakeClientOnly: true,
    localLayerAliases: true,
  },
  webpack: {
    extractCSS: { ignoreOrder: true },
    optimizeCSS: true,
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      runtimeChunk: true,
      mergeDuplicateChunks: true,
      removeAvailableModules: true,
      splitChunks: {
        name: true,
      },
    },
  },
  components: [
    {
      prefix: 'App',
      path: resolve('./layouts'),
    },
    {
      prefix: 'App',
      path: resolve('./components'),
    },
  ],
});
