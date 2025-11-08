import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(rawData) {
    // Group articles by tag
    const tagMap = new Map()
    
    rawData
      .filter(page => page.url !== '/articles/')
      .forEach(page => {
        const tags = page.frontmatter.tags || []
        const articleData = {
          title: page.frontmatter.title || 'Untitled',
          url: page.url,
          date: page.frontmatter.date,
          excerpt: page.frontmatter.description || ''
        }
        
        tags.forEach(tag => {
          if (!tagMap.has(tag)) {
            tagMap.set(tag, [])
          }
          tagMap.get(tag).push(articleData)
        })
      })
    
    // Convert to object for easier lookup
    const result = {}
    tagMap.forEach((articles, tag) => {
      result[tag] = articles.sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date) - new Date(a.date)
        }
        return a.title.localeCompare(b.title)
      })
    })
    
    return result
  }
})
