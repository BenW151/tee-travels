<template>
  <div class="page-index">
    <ul>
      <li v-for="label in labels" :key="label.link">
        <a :href="'#' + label.link">{{ label.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  margin: 0;
}

li {
  margin: 0 var(--spacing-3);
  white-space: nowrap;
}

a {
  margin: 0;
  font-size: var(--font-size-XXS);
}

ul li:first-child {
  margin-left: 0;
}

ul li:last-child {
  margin-right: 0;
}

@media (max-width: 767px) {
  a {
    margin: 0;
    font-size: var(--font-size-XS);
  }

  li {
    margin: 0;
  }

  ul {
    width: 100%;
    justify-content: space-around
  }
}
</style>
