<template>
  <ul class="item list link-list">
    <li v-for="link in links" :key="link.url">
      <NuxtLink
        :class="['link', link.class]"
        :to="link.url"
        :aria-label="link.description">
        {{ link.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
    validator: (links) => links.every((link) => link.url && link.label),
  },
});
</script>

<style scoped>
.link-list a {
  margin-bottom: 0;
}
</style>
