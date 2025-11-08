import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  paths() {
    const articlesDir = path.resolve(__dirname, '../articles')
    const files = fs.readdirSync(articlesDir)
    const tagsSet = new Set()
    
    files
      .filter(file => file.endsWith('.md') && file !== 'index.md')
      .forEach(file => {
        const filePath = path.join(articlesDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(content)
        const tags = data.tags || []
        tags.forEach(tag => tagsSet.add(tag))
      })
    
    return Array.from(tagsSet).map(tag => ({
      params: { tag }
    }))
  }
}
