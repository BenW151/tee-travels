<template>
  <div>
    <div v-if="isMobile" class="image-list">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-item"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription"
      >
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="vertical-image" />
        </NuxtLink>
        <div class="image-info">
          <p class="image-title">{{ image.alt }}</p>
          <p class="image-subtitle">{{ image.subDescription }}</p>
        </div>
      </div>
    </div>
    <swiper
      v-else
      :modules="[SwiperNavigation, SwiperMousewheel, SwiperFreeMode]"
      :slides-per-view="3.2"
      :space-between="10"
      :navigation="true"
      :mousewheel="{
        forceToAxis: false,
        sensitivity: 0.1,
        releaseOnEdges: true
      }"
      :free-mode="true"
      :free-mode-momentum="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="swiper-slide-custom"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription"
      >
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <div class="custom-scrollbar">
      <div
        class="custom-scrollbar-progress"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
    <div v-if="hoverDescription" class="image-description">
      <p>{{ hoverDescription }}</p>
      <p>{{ hoverSubDescription }}</p>
    </div>
    <div v-else-if="!isMobile" class="image-description">
      <p>Scroll to Explore</p>
      <p>10 Items</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const hoverDescription = ref("");
const hoverSubDescription = ref("");
const progress = ref(0);
const isMobile = ref(window.innerWidth < 768);

const onSwiper = (swiper) => {
  swiper.on("progress", (progressValue) => {
    progress.value = progressValue * 100;
  });
};

const onSlideChange = (swiper) => {
  progress.value = swiper.progress * 100;
};

const updateHoverDescription = (image) => {
  hoverDescription.value = image.alt;
  hoverSubDescription.value = image.subDescription;
};

const clearHoverDescription = () => {
  hoverDescription.value = "";
  hoverSubDescription.value = "";
};
</script>

<style>
.swiper-slide-custom {
  display: flex;
  justify-content: center;
  margin-top: auto;
  align-items: flex-end;
}

.slide-image {
  width: 30vw;
  height: auto;
  max-width: 30vw;
  max-height: 30vw;
  object-fit: cover;
}

.swiper-scrollbar-drag {
  background-color: var(--color-white);
}

.swiper-slide a::after,
.image-item a::after {
  display: none;
}

.image-description {
  margin-top: 10px;
  font-size: 1.2em;
}

.image-description p:first-child {
  font-weight: bold;
  margin-bottom: 0;
}

.custom-scrollbar {
  position: relative;
  width: 20%;
  height: 1px;
  background-color: grey;
}

.custom-scrollbar-progress {
  height: 1px;
  background-color: var(--color-white);
  transition: width 0.1s ease;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  bottom: 0;
  width: 10%;
  height: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  cursor: pointer;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

@media (max-width: 767px) {
  .image-item {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .image-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vertical-image {
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .image-info .image-subtitle {
    margin-bottom: var(--spacing-5);
  }

  .custom-scrollbar {
    display: none;
  }
}
</style>
