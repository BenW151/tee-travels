<template>
  <p class="item accent section-label"><LucideAsterisk /> {{ labelText }}</p>
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
  font-family: var(--font-family-primary);
  font-weight: 300;
  grid-column: 1 / 2;
  height: fit-content;
  display: flex;
  flex-direction: row;
}

.lucide {
  margin-right: 3px;
  stroke-width: 1px;
}

@media (max-width: 767px) {
  .section-label {
    margin: 0;
    grid-column: 1;
    grid-row-start: 1;
  }
}
</style>