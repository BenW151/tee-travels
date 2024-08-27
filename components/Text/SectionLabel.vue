<template>
  <p class="item accent section-label">
    <svg width="100" height="1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="1" fill="black" />
    </svg>
    {{ labelText }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  labelText: {
    type: String,
    default: "Default Label", // Default text if none is provided
  },
});
</script>

<style scoped>
.section-label {
  font-size: var(--font-size-XXS);
  font-family: var(--font-family-secondary);
  font-weight: 400;
  grid-column: 1 / 7;
  grid-row: 1;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: pre;
  margin-bottom: 0;
}

.lucide, .svg {
  margin-right: 5px;
}

@media (max-width: 767px) {
  .section-label {
    margin: 0;
    grid-column: 1 / 4;
    grid-row-start: 1;
  }
}
</style>
