import plugin_gridsome_plugin_tailwindcss_6 from "/Users/osbendc/Desktop/Github/vinushut-vue/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_pwa_7 from "/Users/osbendc/Desktop/Github/vinushut-vue/node_modules/gridsome-plugin-pwa/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_10 from "/Users/osbendc/Desktop/Github/vinushut-vue/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_11 from "/Users/osbendc/Desktop/Github/vinushut-vue/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_6,
    options: {"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]}}
  },
  {
    run: plugin_gridsome_plugin_pwa_7,
    options: {"title":"Gridsome Shopify Starter","serviceWorkerPath":"/service-worker.js","manifestPath":"/manifest.json","statusBarStyle":"default","themeColor":"#000000","icon":"./src/favicon.png","msTileColor":"#000000"}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_10,
    options: {"id":""}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_11,
    options: {"pathPrefix":"","siteUrl":"vinushot.myshopify.com","flexsearch":{"profile":"match"},"collections":[{"typeName":"ShopifyProduct","indexName":"Product","fields":["title","handle","description"]},{"typeName":"ShopifyCollection","indexName":"Collection","fields":["title","handle","description"]}],"searchFields":["title","handle","tags"],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true}
  }
]
