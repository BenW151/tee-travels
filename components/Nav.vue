<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="logo">
      <NuxtImg format="webp" alt="ALT TEXT" src="/images/logo-white.svg" />
      <div class="wordmark">
        <NuxtLink class="logo-hide" to="/" aria-label="Home Page"
          >Ben Ward</NuxtLink
        >
      </div>
    </div>

    <div class="burger-menu" @click="toggleMenu"></div>

    <div class="nav">
      <NuxtLink
        class="nav-item text-reveal"
        to="/"
        :class="{ active: $route.path === '/' }"
        aria-label="Home Page"
        @click="toggleMenu"
        >About</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal"
        to="/portfolio"
        :class="{ active: $route.path === '/portfolio' }"
        aria-label="Portfolio Page"
        @click="toggleMenu"
        >Portfolio</NuxtLink
      >
      <NuxtLink
        class="nav-item text-reveal"
        to="/contact"
        :class="{ active: $route.path === '/contact' }"
        aria-label="Contact Page"
        @click="toggleMenu"
        >Contact</NuxtLink
      >
      <ListsLinkList
        class="contact"
        :links="[
          { url: '/contact', label: 'Instagram', description: 'Instagram' },
          { url: '/contact', label: 'Twitter', description: 'Twitter' },
          { url: '/contact', label: 'Facebook', description: 'Facebook' },
        ]" />

      <TextCard logoColor="black" />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const nav = ref(null);

function handleScroll() {
  if (nav.value) {
    isScrolled.value = window.scrollY > 0;
  }
}

onMounted(() => {
  nav.value = document.querySelector("nav");
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function toggleMenu() {
  if (window.innerWidth < 768) {
    const navElement = nav.value.querySelector(".nav");
    const burger = nav.value.querySelector(".burger-menu");
    navElement.classList.toggle("nav-open");
    burger.classList.toggle("active");
  }
}
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
}

nav.scrolled {
  backdrop-filter: blur(8px);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.nav {
  display: flex;
  margin: 0;
  align-items: center;
  margin-left: auto;
  margin-right: var(--spacing-3);
  justify-content: space-between;
}

.nav-item.active::after {
    transform: scaleX(1);
  }

nav a {
  font-size: var(--font-size-XXS);
  margin: 0 var(--spacing-4);
  color: var(--color-white);
}

nav a::after {
  background-color: var(--color-white);
}

nav .card {
  display: none;
}

nav .contact {
  display: none;
}

nav.scrolled {
  backdrop-filter: blur(8px);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
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

  .nav {
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100lvh;
    padding-top: 15vh;
    padding-bottom: 3vh;
    justify-content: flex-start;
    background: var(--background-primary);
    z-index: -1;
    transform: translateY(-100lvh);
    transition: transform 0.5s ease-out;
  }

  .nav-item {
    font-size: var(--font-size-XL);
    font-weight: 500;
    font-family: var(--font-family-primary);
    color: var(--color-black);
    transition: transform 0.5s ease-in-out;
    display: flex;
    margin: 0;
    margin-right: auto;
    margin-left: var(--spacing-4);
    align-items: center;
  }

  .nav-item.active::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--font-color-primary);
  }

  .nav-open .nav-item.active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 1s;
  }

  .nav.nav-open {
    transform: translateY(0);
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  nav .card {
    margin-top: auto;
    margin-bottom: var(--spacing-3);
    display: flex;
  }

  nav .card h4 {
    margin-bottom: 0;
  }

  nav .contact {
    display: flex;
    margin-top: auto;
    margin-left: 50vw;
  }

  nav .contact a {
    color: var(--color-black);
    font-size: var(--font-size-XS);
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

  .burger-menu {
    margin: auto;
    margin-top: var(--spacing-1);
    margin-bottom: var(--spacing-1);
    margin-right: var(--spacing-3);
    align-items: center;
    padding: 12px;
    color: var(--accent-primary);
  }

  .burger-menu::before,
  .burger-menu::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
    transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease-in-out;
  }

  .burger-menu::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f2f3f4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-align-justify'%3E%3Cline x1='3' x2='21' y1='6' y2='6'/%3E%3Cline x1='3' x2='21' y1='12' y2='12'/%3E%3Cline x1='3' x2='21' y1='18' y2='18'/%3E%3C/svg%3E");
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .burger-menu::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f2f3f4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-x'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
    opacity: 0;
    filter: invert(100%);
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .burger-menu.active::before {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(-90deg);
  }

  .burger-menu.active::after {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
</style>
