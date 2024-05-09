<template>
  <div class="image-strip container">
    <img
      :alt="alt"
      :src="src"
      class="item rellax"
      v-rellax
      :data-rellax-percentage="rellaxPercentage" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: {
    type: String,
    default: "Image",
  },
  rellaxPercentage: {
    type: String,
    default: "0.5",
  },
});
</script>

<style scoped>
.image-strip.container {
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
  height: 80vh;
  overflow: hidden;
}

.image-strip img {
  position: absolute;
  height: 120vh;
  width: 100%;
  bottom: -40%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .image-strip {
    display: none;
  }
}
</style>
