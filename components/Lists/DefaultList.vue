<template>
  <ul class="item list">
    <li class="list-title">{{ title }}</li>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Default List'
  },
  items: {
    type: Array,
    default: () => []
  }
});
</script>