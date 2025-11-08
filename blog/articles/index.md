---
title: Articles
---

# Articles

<script setup>
import { data as articles } from './articles.data.mjs'
</script>

<div v-for="article in articles" :key="article.url" style="margin-bottom: 2rem;">
  <h2>
    <a :href="article.url">{{ article.title }}</a>
  </h2>
  <div v-if="article.tags && article.tags.length" style="margin-top: 0.5rem;">
    <a 
      v-for="tag in article.tags" 
      :key="tag" 
      :href="`/tags/${tag}`"
      style="display: inline-block; background: var(--vp-c-bg-soft); padding: 0.2rem 0.6rem; margin-right: 0.5rem; border-radius: 4px; font-size: 0.875rem; text-decoration: none; color: var(--vp-c-text-2); transition: all 0.2s;"
      @mouseover="$event.target.style.background = 'var(--vp-c-brand-soft)'; $event.target.style.color = 'var(--vp-c-brand)'"
      @mouseout="$event.target.style.background = 'var(--vp-c-bg-soft)'; $event.target.style.color = 'var(--vp-c-text-2)'"
    >
      {{ tag }}
    </a>
  </div>
</div>
