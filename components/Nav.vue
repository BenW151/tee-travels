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

.wordmark {
  white-space: nowrap;
  margin: 0;
  display: flex;
  align-items: center;
}

.wordmark a {
  display: flex;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-S);
  margin: 0;
  white-space: nowrap;
}

.wordmark a::after {
  bottom: 0;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: var(--spacing-3);
}

.logo img {
  height: 2rem;
  margin-right: var(--spacing-2);
}

.logo-hide {
  max-width: 0px;
  white-space: pre;
  overflow: hidden;
  transition: max-width 1s cubic-bezier(0.77, 0, 0.175, 1);
}

/* body.scrolled-past-header .logo-hide {
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
}*/

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

  .wordmark {
    margin-left: 0;
    margin-top: var(--spacing-1);
    margin-bottom: var(--spacing-1);
    z-index: -1;
  }

  .wordmark a {
    font-size: var(--font-size-L);
    line-height: normal;
  }
}
</style>
