<template>
  <header>
    <div
      class="background-image rellax"
      v-rellax
      data-rellax-speed="3"
      data-rellax-mobile-speed="0">
      <img :alt="title" :src="imageUrl" />
    </div>
    <LayoutGridContainer>
      <div class="hero-text item">
        <TextReveal tag="h1">{{ title }}</TextReveal>
        <TextReveal tag="h2">{{ subtitle }}</TextReveal>
      </div>
      <div class="item paragraph">
        <slot name="description"></slot>
        <a
          :href="buttonUrl"
          :aria-label="buttonDescription"
          class="item link underline-out">
          {{ buttonText }}
        </a>
      </div>
    </LayoutGridContainer>
  </header>
</template>


<style scoped>
header {
  height: 180lvh;
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

.hero-text {
  grid-column: 1 / 17;
  grid-row-start: 1;
  margin-top: 10vw;
}

.hero-text .text-reveal,
.hero-text .line-container {
  justify-content: center;
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

body.scrolled-past-header .logo-hide {
  max-width: 9em;
  transition: max-width 1s cubic-bezier(0.77, 0, 0.175, 1);
}

body.scrolled-past-header nav .logo img {
  filter: invert(100%);
  transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
}

body.scrolled-past-header nav a {
  color: var(--color-black);
}

body.scrolled-past-header nav a::after {
  background-color: var(--color-black);
}

body.scrolled-past-header .burger-menu::before {
  filter: invert(100%);
}

@media (max-width: 767px) {
  header {
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

<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  subtitle: String,
  buttonText: String,
  buttonUrl: String,
  buttonDescription: String
});
</script>

<script>
export default {
  mounted() {
    this.checkScroll(); // To initialize the class based on initial scroll position
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      const header = this.$el; // Vue reference to the header element
      if (window.scrollY > header.offsetHeight) {
        document.body.classList.add("scrolled-past-header");
      } else {
        document.body.classList.remove("scrolled-past-header");
      }
    },
  },
};
</script>
