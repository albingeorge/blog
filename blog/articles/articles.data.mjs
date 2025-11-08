import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/articles/') // Exclude the index page itself
      .map(page => ({
        title: page.frontmatter.title || 'Untitled',
        url: page.url,
        tags: page.frontmatter.tags || [],
        date: page.frontmatter.date
      }))
      .sort((a, b) => {
        // Sort by date if available, otherwise by title
        if (a.date && b.date) {
          return new Date(b.date) - new Date(a.date)
        }
        return a.title.localeCompare(b.title)
      })
  }
})
