---
title: Tags
---

# Tags

<script setup>
import { data as tags } from './tags.data.mjs'
</script>

<div class="tags-container">
  <div class="tags-grid">
    <a 
      v-for="tagData in tags" 
      :key="tagData.tag" 
      :href="`/tags/${tagData.tag}`"
      class="tag-card"
    >
      <span class="tag-icon">🏷️</span>
      <span class="tag-name">{{ tagData.tag }}</span>
      <span class="tag-count">{{ tagData.count }}</span>
    </a>
  </div>
</div>

<style scoped>
.tags-container {
  max-width: 1000px;
  margin: 2rem auto;
}

.tags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.tag-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag-card:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.tag-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.tag-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
  text-align: center;
}

.tag-count {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.tag-card:hover .tag-name {
  color: var(--vp-c-brand);
}

@media (max-width: 640px) {
  .tags-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .tag-card {
    padding: 1.5rem 1rem;
  }
}
</style>
