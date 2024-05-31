<template>
  <nav :class="{ scrolled: isScrolled, 'nav-hidden': isHidden }">
    <div class="nav">
      <div class="wordmark">
        <NuxtLink class="logo-hide" to="/" aria-label="Home Page"
          >Why Not<span class="question">?</span><span class="adventures"> Adventures</span></NuxtLink
        >
      </div>
      <NuxtLink
        class="nav-item text-reveal"
        to="/"
        :class="{ active: $route.path === '/' }"
        aria-label="Home Page"
        >About</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal"
        to="/destinations"
        :class="{ active: $route.path === '/destinations' }"
        aria-label="Destinations Page"
        >Destinations</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal"
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
  align-items: center;
  top: 0;
  width: 100%;
  height: 3vw;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
}

/*
nav.nav-hidden a {
  transform: translateY(-140%);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
*/

.nav {
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  margin: 0;
  margin-left: var(--spacing-3);
  margin-right: var(--spacing-3);
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
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

.nav .wordmark {
  margin-right: auto;
}

.nav .wordmark a {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-XS);
  align-items: center;
  display: flex;
}

span {
  white-space: pre;
}

.question {
  max-width: 0;
  width: 0;
  overflow: hidden;
  display: inline-block;
}

.adventures {
  max-width: fit-content;
  width: fit-content;
  overflow: hidden;
  display: inline-block;
}

body.scrolled-past-header .question {
  max-width: fit-content;
  width: fit-content;
}

body.scrolled-past-header .adventures {
  max-width: 0;
  width: 0;
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
