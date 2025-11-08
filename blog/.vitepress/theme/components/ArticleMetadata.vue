<template>
  <div v-if="tags.length || date" class="article-metadata">
    <div v-if="date" class="article-date">
      <span class="icon">📅</span>
      <time :datetime="date">{{ formatDate(date) }}</time>
    </div>
    <div v-if="tags.length" class="article-tags">
      <span class="icon">🏷️</span>
      <span v-for="tag in tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const tags = computed(() => frontmatter.value.tags || [])
const date = computed(() => frontmatter.value.date)

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.article-metadata {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
}

.article-date,
.article-tags {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.tag:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}
</style>
