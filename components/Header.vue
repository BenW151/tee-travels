<template>
  <header ref="headerRef" :class="headerClass" id="header">
    <div
      v-if="imageUrl"
      class="background-image rellax"
      v-rellax
      data-rellax-speed="3">
      <NuxtImg format="webp" :alt="imageAlt" :src="imageUrl" />
    </div>
    <div
      v-else
      v-rellax
      :style="{ backgroundColor: backgroundColor }"
      class="background-color rellax"></div>
    <LayoutGridContainer>
      <div class="hero-text item">
        <TextReveal tag="h1">{{ title }}</TextReveal>
        <TextReveal tag="h2">{{ subtitle }}</TextReveal>
      </div>
      <TextParagraph paragraphSize="medium">
        <slot name="description"></slot>
        <NuxtLink
          v-if="buttonUrl"
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
  imageAlt: String,
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
  height: 100lvh;
}
.header-medium {
  height: 120lvh;
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
  height: 120lvh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  top: 0;
  bottom: 0;
  right: 0;
  filter: brightness(0.5);
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
  margin-top: 40vh;
}

.hero-text h2 {
  font-size: var(--font-size-M);
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
    height: 110lvh;
  }
  .header-large {
    height: 130lvh;
  }

  .background-image img {
    height: 110lvh;
    object-position: 65% 50%;
  }

  .hero-text {
    grid-column: span 6;
    grid-row-start: 1;
    margin-top: 30vh;
  }

  header .item:nth-child(2) {
    grid-column: 1 / 7;
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
