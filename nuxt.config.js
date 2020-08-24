
export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'spa',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        { hid: 'title', name: 'title', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: 'href="https://fonts.googleapis.com/css2?family=Poppins&display=swap' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css' }
      ]
    },
    /*
    ** Global CSS
    */
    css: [
      { src: '~/assets/scss/main.scss', lang: 'scss' }
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      // Doc: https://bootstrap-vue.js.org
      'bootstrap-vue/nuxt',
    ],
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
      
      /*
      ** Run ESLint on save
      */
      extend (config, ctx) {
        if (ctx.isDev && ctx.client) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
  
          const vueLoader = config.module.rules.find(
            ({loader}) => loader === 'vue-loader')
          const { options: {loaders} } = vueLoader || { options: {} }
          if (loaders) {
            for (const loader of Object.values(loaders)) {
              changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
            }
          }
          config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
          // console.log(util.inspect(config.module.rules, { depth: 6 }))
        }
      }
    }
  }
  
  function changeLoaderOptions (loaders) {
    if (loaders) {
      for (const loader of loaders) {
        if (loader.loader === 'sass-loader') {
          Object.assign(loader.options, {
            includePaths: ['./assets'],
            // data: '@import "_imports";'
          })
        }
      }
    }
  }
  