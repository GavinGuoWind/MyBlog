const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  srcDir: 'src/',
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'src\\pages\\list\\list.vue')
      },
      {
        name: 'detail',
        path: '/detail/:id',
        component: resolve(__dirname, 'src\\pages\\detail\\detail.vue')
      })
    }
  }
}
