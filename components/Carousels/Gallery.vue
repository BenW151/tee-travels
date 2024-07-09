<template>
  <div>
    <swiper
      v-if="isMobile"
      ref="swiperRef"
      :slides-per-view="1"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        :class="['swiper-slide-custom', image.customClass]">
        <div>
          <img :src="image.src" :alt="image.alt" class="slide-image" />
          <div class="overlay-text">
            <p class="image-title">{{ image.alt }}</p>
            <p class="image-subtitle">{{ image.subDescription }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      v-else
      ref="swiperRef"
      :modules="[Navigation, Mousewheel, FreeMode]"
      :slides-per-view="4.2"
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
        <div>
          <img :src="image.src" :alt="image.alt" class="slide-image" />
          <div class="overlay-text">
            <p class="image-title">{{ image.alt }}</p>
            <p class="image-subtitle">{{ image.subDescription }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

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
};

const clearHoverDescription = () => {
  hoverDescription.value = "";
  hoverSubDescription.value = "";
};

watch(isMobile, async (newVal, oldVal) => {
  if (newVal !== oldVal && swiperRef.value) {
    await nextTick();
    swiperRef.value.swiper.destroy(true, true);
    nextTick(() => {
      swiperRef.value.swiper = new Swiper(".swiper", {
        modules: isMobile.value ? [] : [Navigation, Mousewheel, FreeMode],
        slidesPerView: isMobile.value ? 1 : 4.2,
        spaceBetween: 10,
        navigation: !isMobile.value,
        mousewheel: isMobile.value
          ? false
          : {
              forceToAxis: true,
              sensitivity: 0.1,
            },
        freeMode: !isMobile.value,
        freeModeMomentum: !isMobile.value,
      });
    });
  }
});

</script>

<style scoped>
.swiper-slide-custom {
  display: flex;
  justify-content: center;
  margin-top: auto;
  align-items: flex-end;
}

.slide-image {
  width: 22.5vw;
  height: 30vw;
  object-fit: cover;
}

.swiper-slide a::after,
.image-item a::after {
  display: none;
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

.coming-soon img {
  filter: brightness(0.4);
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
  opacity: 0;
}

.swiper-slide:hover img {
  filter: brightness(0.8);
}

.swiper-slide:hover .overlay-text {
  opacity: 1;
}

.image-title {
  font-size: var(--font-size-S);
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

  .image-title {
    font-size: var(--font-size-M);
    font-family: var(--font-family-primary);
  }

  .image-info p {
    margin: 0;
  }

  .slide-image {
    width: 100%;
    height: 65vh;
  }

  .carousel .container {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
}
</style>
