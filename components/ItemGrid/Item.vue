<template>
  <div class="item-grid-item">
    <a :href="itemUrl" class="item-grid-link">
      <div class="image-container">
        <img :src="itemImage" :alt="itemImageAlt" class="item-grid-image content-image" />
      </div>
      <a :href="itemUrl" class="item-grid-title">{{ itemLabel }}</a>
      <p>{{ itemDescription }}</p>
    </a>
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
    required: true,
  },
})
</script>

<style scoped>
.item-grid-title {
  font-size: var(--font-size-S);
  font-family: var(--font-family-secondary);
  margin-right: auto;
  margin-bottom: 0;
}

.item-grid-link {
  width: 100%;
  height: 100%;
}

.item-grid-link::after {
  display: none;
}

.item-grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: auto;
}

.item-grid-item:hover .item-grid-image {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
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
</style>