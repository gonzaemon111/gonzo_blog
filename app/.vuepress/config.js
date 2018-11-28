// .vuepress/config.js
module.exports = {
    title: 'Gonzoemon\'sブログ',
    description: 'https://github.com/gonzaemon111',
    base: '/',
    serviceWorker: true,
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    locales: {
      '/': {
        lang: 'ja'
      }
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    markdown: {
      lineNumbers: true,
      linkify: true
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about.html' },
        { text: 'GitHub', link: 'https://github.com/rubytomato' }
      ],
      sidebarDepth: 2,
      sidebar: 'auto',
      lastUpdated: 'Last Updated'
      // sidebar: {
      //   // fallback
      //   '/': [
      //     '',        /* / */
      //     'about'    /* /about.html */
      //   ]
      // }
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@alias': 'public/img'
        }
      }
    }
}
