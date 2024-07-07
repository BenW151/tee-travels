<template>
  <ul class="item list link-list">
    <li v-if="title" class="list-title">{{ title }}</li>
    <li v-for="link in links" :key="link.url">
      <NuxtLink
        v-if="isInternalLink(link.url)"
        :to="link.url"
        :class="['link', link.class, { 'underline-out-icon': link.icon }]"
        :aria-label="link.description">
        <component :is="getIconComponent(link.icon)" v-if="link.icon" />
        {{ link.label }}
      </NuxtLink>
      <a
        v-else
        :href="link.url"
        :class="['link', link.class, { 'underline-out-icon': link.icon }]"
        :aria-label="link.description"
        target="_blank"
        rel="noopener noreferrer">
        <component :is="getIconComponent(link.icon)" v-if="link.icon" />
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import * as LucideIcons from 'lucide-vue-next';

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
    validator: (links) => links.every((link) => link.url && link.label),
  },
  title: {
    type: String,
    default: ''
  },
});

// Function to check if a link is internal
const isInternalLink = (url) => {
  return !url.startsWith("http");
};

// Function to get the Lucide icon component
const getIconComponent = (iconName) => {
  return iconName ? LucideIcons[`Lucide${iconName}`] : null;
};
</script>


<style scoped>
.link-list a {
  margin-bottom: 0;
}

.list-title {
  font-weight: bold;
}
</style>
