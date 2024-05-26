<template>
  <nav :class="{ scrolled: isScrolled, 'nav-hidden': isHidden }">
    <div class="nav">
      <NuxtLink
        class="nav-item text-reveal"
        to="/"
        :class="{ active: $route.path === '/' }"
        aria-label="Home Page"
        >About</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal"
        to="/portfolio"
        :class="{ active: $route.path === '/portfolio' }"
        aria-label="Portfolio Page"
        >Portfolio</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal nav-contact"
        to="/contact"
        :class="{ active: $route.path === '/contact' }"
        aria-label="Contact Page"
        >Contact</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isHidden = ref(false);
const lastScrollTop = ref(0);

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
  align-items: flex-end;
  top: 0;
  width: 100%;
  height: 4vw;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events: none;
}

nav.nav-hidden a {
  transform: translateY(-140%);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.nav {
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  margin: 0;
  margin-left: var(--spacing-3);
  margin-right: var(--spacing-3);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.nav-contact {
  margin-left: auto;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
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

@media (max-width: 767px) {
  nav {
    height: 6vh;
  }

  nav a {
    display: flex;
    font-size: var(--font-size-XS);
  }

  .nav {
    margin: 0;
  }
}
</style>
