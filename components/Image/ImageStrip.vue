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
        @click="videoClicked"
        :poster="poster"
        :src="src"
        preload="metadata"
        class="item destination-video"
        v-bind="controlsHidden ? {} : { controls: true }">
        Your browser does not support the video tag.
      </video>
      <div :class="{ 'text-wrapper': true, hidden: overlayHidden }">
        <h4 v-if="!isMobile">Click to Play Showreel</h4>
        <h4 v-if="isMobile">Tap to Play Showreel</h4>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

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
    default: "",
  },
});

const { windowWidth, isMobile } = useWindowWidth();
const videoRef = ref(null);
const overlayHidden = ref(false);
const controlsHidden = ref(true);
const videoClicked = () => {
  overlayHidden.value = true;
  controlsHidden.value = false;
};

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
  height: 55vw;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}

.image-strip img,
.image-strip video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-strip video:hover {
  cursor: pointer;
}

.text-wrapper {
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 15vh;
  left: 0;
  text-align: left;
  margin-left: var(--spacing-3);
  pointer-events: none;
}

.text-wrapper h4 {
  color: var(--background-primary);
}

.text-wrapper.hidden {
  opacity: 0;
}

@media (max-width: 767px) {
  .image-strip.container {
    height: 177.78vw;
  }

  .text-wrapper {
    bottom: 3vh;
  }
}
</style>
