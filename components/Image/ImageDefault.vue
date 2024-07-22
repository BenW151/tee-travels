<template>
  <div
    class="item image image-default rellax"
    v-rellax
    :data-rellax-percentage="rellaxPercentage"
    :data-rellax-speed="computedRellaxSpeed">
    <NuxtImg :class="objectFitClass" format="webp" :alt="imageAlt" :src="imageUrl" loading="lazy"/>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

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
  objectFit: {
    type: String,
    default: "cover", // Default object-fit value
    validator: (value) => ["cover", "contain"].includes(value), // Ensure only "cover" or "contain" can be used
  }
});

const { windowWidth, isMobile } = useWindowWidth();

// Computed property for rellaxSpeed
const computedRellaxSpeed = computed(() => {
  return isMobile.value ? '0' : props.rellaxSpeed;
});

// Computed property for objectFit class
const objectFitClass = computed(() => {
  return props.objectFit === "contain" ? "object-fit-contain" : "object-fit-cover";
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

img, video {
  width: 100%;
  height: 100%;
}

img.object-fit-cover,
video.object-fit-cover {
  object-fit: cover;
}

img.object-fit-contain ,
video.object-fit-contain  {
  object-fit: contain;
}
</style>
