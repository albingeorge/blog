import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My blog",
  description: "Things I do",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: false
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles' },
      { text: 'Tags', link: '/tags' },
      { text: 'About me', link: '/about-me' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/albingeorge' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/albingeorgee' },
      { icon: 'twitter', link: 'https://x.com/albingeorgee' }
    ]
  }
})
