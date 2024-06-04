<template>
  <div
    class="item image image-default rellax"
    v-rellax
    :data-rellax-percentage="rellaxPercentage"
    :data-rellax-speed="rellaxSpeed">
    <NuxtImg format="webp" :alt="imageAlt" :src="imageUrl" />
  </div>
</template>

<script setup>
// Define the props the component accepts
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "Image",
  },
  rellaxPercentage: {
    type: String,
    default: "0.6", // Default value for rellax effect
  },
  rellaxSpeed: {
    type: String,
    default: "2", // Default speed for rellax effect
  },
});
</script>

<style scoped>
.image-default {
  grid-column: span 6;
  overflow: hidden;
  top: 0;
  left: 0;
  margin: 0;
}

.image-default img,
.image-default video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
