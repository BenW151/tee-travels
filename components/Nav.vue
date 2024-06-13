<template>
  <nav :class="{ scrolled: isScrolled,}">
    <div class="nav">
      <div class="wordmark">
        <NuxtLink :class="{ 'logo-hide': true, open: isMenuOpen }" to="/" aria-label="Home Page"
          >Why Not Adventures</NuxtLink
        >
      </div>
      <div class="burger-menu" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </div>
      <div :class="{ 'nav-items': true, open: isMenuOpen }">
        <NuxtLink
          class="nav-item"
          to="/"
          :class="{ active: $route.path === '/' }"
          aria-label="Home Page"
          @click="toggleMenu"
          >About</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/destinations"
          :class="{ active: $route.path === '/destinations' }"
          aria-label="Destinations Page"
          @click="toggleMenu"
          >Destinations</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/contact"
          :class="{ active: $route.path === '/contact' }"
          aria-label="Contact Page"
          @click="toggleMenu"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isHidden = ref(false);
const lastScrollTop = ref(0);
const isMenuOpen = ref(false);
const isMobile = computed(() => window.innerWidth < 768);

function handleScroll() {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop.value) {
    // Scrolling down
    isHidden.value = true;
  } else {
    // Scrolling up
    isHidden.value = false;
  }

  isScrolled.value = scrollTop > 0;
  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

function toggleMenu() {
  if (isMobile.value) {
    isMenuOpen.value = !isMenuOpen.value;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 3vw;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
}

.nav {
  display: flex;
  width: 100%;
  margin: 0;
  margin-left: var(--spacing-5);
  margin-right: var(--spacing-5);
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}

.nav-items {
  display: flex;
  flex-direction: row;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav-items .nav-item:last-child {
  margin-right: 0;
}

nav a {
  font-size: var(--font-size-XXS);
  margin: 0 var(--spacing-3);
  color: var(--color-white);
  pointer-events: all;
}

nav a::after {
  background-color: var(--color-white);
}

.nav .wordmark {
  margin-right: auto;
}

.nav .wordmark a {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-XS);
  margin-left: 0;
}

body.scrolled-past-header nav a {
  color: var(--color-black);
}

body.scrolled-past-header nav a::after {
  background-color: var(--color-black);
}

@media (max-width: 767px) {
  nav {
    height: 6vh;
    z-index: 100000;
  }

  .nav {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-primary);
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: translateY(-100%);
  }

  .nav-items.open {
    transform: translateY(0);
  }

  .nav-items a {
    margin-bottom: var(--spacing-1);
    color: var(--color-black);
    font-size: var(--font-size-XL);
    font-family: var(--font-family-primary);
  }

  .nav-items a::after {
    background-color: var(--color-black);
  }

  .nav .wordmark a {
    z-index: 1000;
  }

  .nav .wordmark a.open {
    color: var(--color-black);
  }

  .burger-menu {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: var(--font-size-S);
    height: var(--font-size-S);
    z-index: 10;
    pointer-events: all;
  }

  .burger-menu span {
    width: 100%;
    height: 1px;
    background: var(--color-white);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .burger-menu span.open, body.scrolled-past-header .burger-menu span {
    background: var(--color-black);
  }

  .burger-menu span.open:nth-child(1) {
    transform: translateX(100%);
    opacity: 0;
  }

  .burger-menu span.open:nth-child(2) {
    opacity: 1;
  }

  .burger-menu span.open:nth-child(3) {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
