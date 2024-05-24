<template>
  <div>
    <swiper
      :modules="[
        SwiperNavigation,
        SwiperMousewheel,
        SwiperAutoplay,
        SwiperFreeMode,
      ]"
      :slides-per-view="3"
      :space-between="10"
      :navigation="true"
      :mousewheel="true"
      :free-mode="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="swiper-slide-custom"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription">
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <div class="custom-scrollbar">
      <div
        class="custom-scrollbar-progress"
        :style="{ width: `${progress}%` }"></div>
    </div>
    <div v-if="hoverDescription" class="image-description">
      <p>{{ hoverDescription }}</p>
      <p>{{ hoverSubDescription }}</p>
    </div>
    <div v-else class="image-description">
      <p>Scroll to Explore</p>
      <p>10 Items</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const images = [
  {
    src: "/images/node-one-office.png",
    alt: "Node One",
    subDescription: "IT Services",
    link: "/page1",
  },
  {
    src: "/images/node-one-header.png",
    alt: "Node Two",
    subDescription: "Web Development",
    link: "/page2",
  },
  {
    src: "/images/node-one-header.png",
    alt: "Node Three",
    subDescription: "Mobile Development",
    link: "/page3",
  },
  {
    src: "/images/node-one-header.png",
    alt: "Node Four",
    subDescription: "Cloud Services",
    link: "/page4",
  },
  {
    src: "/images/node-one-header.png",
    alt: "Node Five",
    subDescription: "Consulting",
    link: "/page5",
  },
  {
    src: "/images/node-one-header.png",
    alt: "Node Six",
    subDescription: "Support",
    link: "/page6",
  },
];

const hoverDescription = ref("");
const hoverSubDescription = ref("");
const progress = ref(0);

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
  align-items: center;
}

.slide-image {
  width: 50vw;
  height: auto;
  max-width: 28vw; 
  max-height: 50vw; 
  object-fit: cover;
}

.swiper-scrollbar-drag {
  background-color: var(--color-white);
}

.swiper-slide a::after {
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
  background-color: var(--color-white); /* Customize the color as needed */
  transition: width 0.3s;
}

/*
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
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

*/
</style>
