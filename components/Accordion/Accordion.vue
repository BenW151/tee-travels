<template>
  <div class="item accordion">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

const activeIndex = ref(null);

provide("activeIndex", activeIndex);
provide("setActiveIndex", (index) => {
  activeIndex.value = index;
});
</script>

<style>
.accordion {
  grid-column: span 8;
}

@media (max-width: 767px) {
  .accordion {
    grid-column: span 6;
  }
}
</style>
