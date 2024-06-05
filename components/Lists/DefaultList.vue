<template>
  <ul :class="['item list', { 'list-with-bullets': bullets }]">
    <li v-if="title" class="list-title">{{ title }}</li>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  bullets: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.list-with-bullets li:not(.list-title) {
  list-style-type: " - "; 
  margin-left: var(--spacing-1);
}

.list-title {
  font-weight: bold;
}
</style>
