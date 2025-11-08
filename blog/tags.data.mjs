import { createContentLoader } from 'vitepress'

export default createContentLoader('articles/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(rawData) {
    const tagMap = new Map()
    
    rawData
      .filter(page => page.url !== '/articles/') // Exclude the index page
      .forEach(page => {
        const tags = page.frontmatter.tags || []
        const articleData = {
          title: page.frontmatter.title || 'Untitled',
          url: page.url,
          date: page.frontmatter.date
        }
        
        tags.forEach(tag => {
          if (!tagMap.has(tag)) {
            tagMap.set(tag, [])
          }
          tagMap.get(tag).push(articleData)
        })
      })
    
    // Convert to array and sort
    const tagsArray = Array.from(tagMap.entries()).map(([tag, articles]) => ({
      tag,
      count: articles.length,
      articles: articles.sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date) - new Date(a.date)
        }
        return a.title.localeCompare(b.title)
      })
    }))
    
    // Sort tags by count (descending) then alphabetically
    return tagsArray.sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count
      }
      return a.tag.localeCompare(b.tag)
    })
  }
})
