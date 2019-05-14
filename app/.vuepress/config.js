// .vuepress/config.js
module.exports = {
    title: 'Gonzoemon\'sブログ',
    description: 'https://github.com/gonzaemon111',
    base: '/',
    serviceWorker: true,
    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'icon', href: '/img/favicon.ico' }]
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
      linkify: true,
      anchor: { permalink: false },
      config: (md) => {
        md.options.linkfy = true
      },
      // options for markdown-it-toc
      toc: { includeLevel: [1, 2] },
      extendMarkdown: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-xxx'))
      }
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about.html' },
        { text: 'GitHub', link: 'https://github.com/gonzaemon111' }
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
