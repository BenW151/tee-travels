<template>
  <div class="image-strip container">
    <template v-if="isImage">
      <NuxtImg
        format="webp"
        :alt="alt"
        :src="src"
        class="item rellax"
        v-rellax
        :data-rellax-percentage="rellaxPercentage" />
    </template>
    <template v-else>
      <video
        ref="video"
        :poster="poster"
        :src="src"
        class="item destination-video"
        controls
        repeat>
        Your browser does not support the video tag.
      </video>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Media",
  },
  poster: {
    type: String,
    default: "", // Provide a default poster image URL if needed
  },
});

const videoRef = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener("click", () => {
      videoRef.value.play();
    });
  }
});

// List of image and video extensions
const imageExtensions = ["png", "jpeg", "jpg", "webp"];
const videoExtensions = ["mp4", "webm"];

// Function to determine if the src is an image
const isImage = computed(() => {
  const extension = props.src.split(".").pop().toLowerCase();
  return imageExtensions.includes(extension);
});
</script>

<style scoped>
.image-strip.container {
  max-width: 100%;
  height: 40vw;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}

.image-strip img,
.image-strip video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .image-strip.container {
    height: 80vh;
  }
}
</style>
