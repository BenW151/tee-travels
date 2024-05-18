<template>
  <header ref="headerRef" :class="headerClass">
    <div
      v-if="imageUrl"
      class="background-image rellax"
      v-rellax
      data-rellax-speed="3"
      data-rellax-mobile-speed="0">
      <NuxtImg format="webp" :alt="imageAlt" :src="imageUrl" />
    </div>
    <div
      v-else
      v-rellax
      :style="{ backgroundColor: backgroundColor }"
      class="background-color rellax">
    </div>
    <LayoutGridContainer>
      <div class="hero-text item">
        <TextReveal tag="h1">{{ title }}</TextReveal>
        <TextReveal tag="h2">{{ subtitle }}</TextReveal>
      </div>
      <TextParagraph paragraphSize="medium">
        <slot name="description"></slot>
        <NuxtLink
          :to="buttonUrl"
          :aria-label="buttonDescription"
          class="item link underline-out">
          {{ buttonText }}
        </NuxtLink>
      </TextParagraph>
    </LayoutGridContainer>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps({
  imageUrl: String,
  title: String,
  subtitle: String,
  buttonText: String,
  buttonUrl: String,
  buttonDescription: String,
  headerClass: String,
  backgroundColor: String,
});

const headerRef = ref(null);

const checkScroll = () => {
  if (!headerRef.value) return;
  const header = headerRef.value;
  if (window.scrollY > header.offsetHeight) {
    document.body.classList.add("scrolled-past-header");
  } else {
    document.body.classList.remove("scrolled-past-header");
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
.header-small {
  height: 80lvh;
}
.header-medium {
  height: 100lvh;
}
.header-large {
  height: 140lvh;
}

header,
header a,
header a .lucide {
  color: var(--color-white);
}

header a.link::after {
  background-color: var(--color-white);
}

.container {
  min-height: 100%;
}

.background-image {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.background-image img {
  height: 150lvh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 60%;
  top: 0;
  bottom: 0;
  right: 0;
  filter: brightness(0.6);
}

.background-color {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.hero-text {
  grid-column: 1 / 17;
  grid-row-start: 1;
  margin-top: 5vw;
}

.hero-text h2 {
  font-size: var(--font-size-M);
  font-style: italic;
  margin-top: var(--spacing-1);
}

header .container {
  background: none;
}

header .item:nth-child(2) {
  grid-column: 10 / 16;
  grid-row-start: 2;
  margin-top: auto;
}

header .item:nth-child(3) {
  grid-column: 14 / 17;
  grid-row-start: 1;
  margin-top: auto;
}

@media (max-width: 767px) {
  .header-small {
    height: 80lvh;
  }
  .header-medium {
    height: 120lvh;
  }
  .header-large {
    height: 150lvh;
  }

  .hero-text {
    grid-column: span 6;
    grid-row-start: 1;
    margin-top: 25vh;
  }

  header .item:nth-child(2) {
    grid-column: 3 / 7;
    grid-row-start: 2;
    margin-top: auto;
  }

  header .item:nth-child(3) {
    grid-column: 5 / 7;
    grid-row-start: 2;
    margin-top: auto;
  }
}
</style>
