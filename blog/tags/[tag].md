---
title: {{ $params.tag }}
---

<script setup>
import { useData } from 'vitepress'
import { data as articlesByTag } from './[tag].data.mjs'
import { computed } from 'vue'

const { params } = useData()
const tag = computed(() => params.value.tag)
const articles = computed(() => articlesByTag[tag.value] || [])

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<div class="tag-page">
  <div class="tag-header">
    <h1>
      <span class="tag-icon">🏷️</span>
      {{ tag }}
    </h1>
    <p class="article-count">{{ articles.length }} {{ articles.length === 1 ? 'article' : 'articles' }}</p>
  </div>
  
  <div class="articles-list">
    <article v-for="article in articles" :key="article.url" class="article-item">
      <h2 class="article-title">
        <a :href="article.url">{{ article.title }}</a>
      </h2>
      <time v-if="article.date" class="article-date">
        📅 {{ formatDate(article.date) }}
      </time>
      <p v-if="article.excerpt" class="article-excerpt">{{ article.excerpt }}</p>
    </article>
  </div>
  
  <div class="back-link">
    <a href="/tags">← Back to all tags</a>
  </div>
</div>

<style scoped>
.tag-page {
  max-width: 800px;
  margin: 0 auto;
}

.tag-header {
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

.tag-header h1 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.tag-icon {
  font-size: 2rem;
}

.article-count {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  margin: 0;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.article-item {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.article-item:last-child {
  border-bottom: none;
}

.article-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  line-height: 1.4;
}

.article-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.article-title a:hover {
  color: var(--vp-c-brand);
}

.article-date {
  display: block;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}

.article-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.back-link {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.back-link a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.back-link a:hover {
  opacity: 0.8;
}

@media (max-width: 640px) {
  .tag-header h1 {
    font-size: 1.75rem;
  }
  
  .article-title {
    font-size: 1.25rem;
  }
}
</style>
