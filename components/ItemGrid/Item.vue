<template>
  <div v-if="isDestination" class="destination-item item-grid-item">
    <NuxtLink :to="itemUrl" class="destination-link">
      <div class="image-container">
        <img
          :src="itemImage"
          :alt="itemImageAlt"
          class="destination-image content-image" />
        <p class="destination-title">{{ itemLabel }}</p>
      </div>
    </NuxtLink>
  </div>

  <div v-else class="item-grid-item">
    <div class="item-grid-link">
      <a :href="itemUrl" class="image-container">
        <img
          :src="itemImage"
          :alt="itemImageAlt"
          class="item-grid-image content-image" />
      </a>
      <a :href="itemUrl" class="item-grid-title">{{ itemLabel }}</a>
      <p>{{ itemDescription }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemUrl: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
  itemImageAlt: {
    type: String,
    required: true,
  },
  itemLabel: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: false,
  },
  isDestination: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Common Styles */
.item-grid-link,
.destination-link {
  width: 100%;
  height: 100%;
}

.item-grid-link::after,
.destination-link::after {
  display: none;
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
  margin-bottom: 0;
}

.image-container::after {
  display: none;
}

.item-grid-item:hover .item-grid-image, .item-grid-item:hover .destination-image {
  transform: scale(1.05);
}

/* Non-Destination Specific Styles */
.item-grid-title {
  font-size: var(--font-size-S);
  font-family: var(--font-family-secondary);
  margin-right: auto;
  margin-bottom: 0;
}

.item-grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: auto;
}

.item-grid-item:nth-child(4n + 1) {
  grid-column: 1 / span 4;
}

.item-grid-item:nth-child(4n + 2) {
  grid-column: 5 / span 4;
}

.item-grid-item:nth-child(4n + 3) {
  grid-column: 9 / span 4;
}

.item-grid-item:nth-child(4n + 4) {
  grid-column: 13 / span 4;
}

/* Destination Specific Styles */
.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.6);
  margin: auto;
}

.destination-title {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: var(--font-size-M);
  font-family: var(--font-family-secondary);
  color: var(--color-white);
  margin: 0;
  text-align: center;
  pointer-events: none;
}

@media (max-width: 767px) {
  .image-container {
    height: 40vw;
  }

  .item-grid-title {
    margin-bottom: 0;
  }

  .item-grid-item:nth-child(n)
  {
    grid-column: 1 / 7;
    grid-row: auto;
  }
}
</style>
