<template>
  <div :class="['item', 'paragraph', paragraphSize]">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  paragraphSize: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});
</script>

<style>
.paragraph.small {
  grid-column: span 4;
}

.paragraph.small p {
  font-size: var(--font-size-XXS);
}

.paragraph.medium {
  grid-column: span 5;
}

.paragraph.medium p {
  font-size: var(--font-size-XS);
}

.paragraph.large {
  grid-column: span 8;
}

.paragraph.large p {
  font-size: var(--font-size-S);
}

@media (max-width: 767px) {
  .paragraph.large {
    grid-column: span 6;
  }

  .paragraph.medium p {
    font-size: var(--font-size-M);
  }
}
</style>
