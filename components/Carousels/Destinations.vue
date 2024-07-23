<template>
  <div>
    <div v-if="isMobile" class="image-list">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['image-item', image.customClass]"
        @mouseover="updateHoverDescription(image)"
        @mouseleave="clearHoverDescription">
        <NuxtLink :href="image.link">
          <img :src="image.src" :alt="image.alt" class="vertical-image" />
        </NuxtLink>
        <div class="overlay-text">
          <p class="image-title">{{ image.alt }}</p>
          <p class="image-subtitle">{{ image.subDescription }}</p>
          <p class="image-nights-price">{{ image.nightsPrice }}</p>
        </div>
      </div>
    </div>
    <swiper
      v-else
      ref="swiperRef"
      :modules="[Navigation, Mousewheel, FreeMode]"
      :slides-per-view="2.2"
      :space-between="10"
      :navigation="true"
      :mousewheel="{
        forceToAxis: true,
        sensitivity: 0.1,
      }"
      :free-mode="true"
      :free-mode-momentum="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        :class="['swiper-slide-custom', image.customClass]">
        <NuxtLink :href="image.link" class="slide-link">
          <img :src="image.src" :alt="image.alt" class="slide-image" />
          <div class="overlay-text">
            <p class="image-title">{{ image.alt }}</p>
            <p class="image-subtitle">{{ image.subDescription }}</p>
            <p class="image-nights-price">{{ image.nightsPrice }}</p>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const hoverDescription = ref("");
const hoverSubDescription = ref("");
const hoverNightsPrice = ref("");
const progress = ref(0);
const swiperRef = ref(null);

const { windowWidth, isMobile } = useWindowWidth();

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
  hoverNightsPrice.value = image.nightsPrice;
};

const clearHoverDescription = () => {
  hoverDescription.value = "";
  hoverSubDescription.value = "";
  hoverNightsPrice.value = "";
};

const images = [
  {
    src: "/images/pakistan/pakistan-cover.webp",
    alt: "Pakistan",
    subDescription: "Hiking in the Hunza Valley",
    nightsPrice: "10 Nights | £985",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/montenegro-hiking/montenegro-hiking-cover.webp",
    alt: "Montenegro",
    subDescription: "Hiking in Durmitor + The Accursed Mountains",
    nightsPrice: "Coming Soon",
    link: "/destinations",
    customClass: "coming-soon",
  },
  {
    src: "/images/montenegro-kotor/montenegro-kotor-cover.webp",
    alt: "Montenegro",
    subDescription: "Bay of Kotor + Budva",
    nightsPrice: "Coming Soon",
    link: "/destinations",
    customClass: "coming-soon",
  },
];

watch(isMobile, async (newVal, oldVal) => {
  if (newVal !== oldVal && swiperRef.value && swiperRef.value.swiper) {
    await nextTick();
    swiperRef.value.swiper.destroy(true, true);
    nextTick(() => {
      swiperRef.value.swiper = new Swiper(".swiper", {
        modules: [Navigation, Mousewheel, FreeMode],
        slidesPerView: 2.2,
        spaceBetween: 10,
        navigation: true,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.1,
        },
        freeMode: true,
        freeModeMomentum: true,
      });
    });
  }
});
</script>

<style>
.swiper-slide-custom {
  display: flex;
  justify-content: center;
  margin-top: auto;
  align-items: flex-end;
}

.slide-image {
  width: 43.5vw;
  height: 30vw;
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
  margin-top: 0.5vw;
  height: 5vw;
}

.image-description p:first-child {
  font-size: var(--font-size-S);
  font-family: var(--font-family-primary);
}

.image-description p {
  margin-bottom: 0;
}

.custom-scrollbar {
  position: relative;
  width: 20%;
  height: 1px;
  background-color: var(--color-grey);
}

.custom-scrollbar-progress {
  height: 1px;
  background-color: var(--color-black);
  transition: width 0.1s ease;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 5%;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  z-index: 1000;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.5));
}

.swiper-button-next {
  right: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmYzZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0Ij48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+");
}

.swiper-button-prev {
  left: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmYzZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWxlZnQiPjxwYXRoIGQ9Im0xNSAxOC02LTYgNi02Ii8+PC9zdmc+");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
}

.coming-soon {
  pointer-events: none;
}

.coming-soon img {
  filter: brightness(0.3);
}

.coming-soon .image-nights-price {
  font-weight: bold;
}

.overlay-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-4);
  color: var(--color-white);
  text-align: left;
}

.image-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
}

.overlay-text p {
  margin: 0;
  margin-bottom: 2px;
}

@media (max-width: 767px) {
  .image-item {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: var(--spacing-4);
  }

  .image-item a {
    margin-bottom: 0;
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

  .image-info .image-nights-price {
    margin-bottom: var(--spacing-5);
  }

  .custom-scrollbar {
    display: none;
  }

  .image-title {
    font-size: var(--font-size-M);
    font-family: var(--font-family-primary);
  }

  .image-info p {
    margin: 0;
  }

  .carousel .container {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
}
</style>
