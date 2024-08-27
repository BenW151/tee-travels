<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="nav">
      <div class="logo-container">
        <NuxtLink
          to="/"
          aria-label="Home Page"
          @click="toggleMenuIfOpen"
          class="wordmark">
          Tee Travels
          <!--<NuxtImg
            src="/branding/why-not-adventures-logo-rectangle-no-bg.svg"
            alt="Tee Travels Logo"
            class="nav-logo"
            :class="{ open: isMenuOpen }"
        />--></NuxtLink
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
          to="/resources"
          :class="{ active: $route.path === '/resources' }"
          aria-label="Resources Page"
          @click="toggleMenu"
          >Resources</NuxtLink
        >
        <NuxtLink
          v-if="isMobile"
          class="nav-item"
          to="/destinations"
          :class="{ active: $route.path === '/destinations' }"
          aria-label="Destinations Page"
          @click="toggleMenu"
          >Destinations</NuxtLink
        >
        <ButtonsDropdown
          v-if="!isMobile"
          :listLinks="[
            {
              url: '/destinations',
              label: 'Everywhere',
              description: 'Everywhere',
            },
            {
              url: '/destinations/europe',
              label: 'Europe',
              description: 'Europe',
            },
            {
              url: '/destinations/asia',
              label: 'Asia',
              description: 'Asia',
            },
            {
              url: '/destinations/north-america',
              label: 'North America',
              description: 'North America',
            },
            {
              url: '/destinations/central-america',
              label: 'Central America',
              description: 'Central America',
            },
            {
              url: '/destinations/south-america',
              label: 'South America',
              description: 'South America',
            },
            {
              url: '/destinations/middle-east',
              label: 'Middle East',
              description: 'Middle East',
            },
            {
              url: '/destinations/africa',
              label: 'Africa',
              description: 'Africa',
            },
            {
              url: '/destinations/oceania',
              label: 'Oceania',
              description: 'Oceania',
            },
          ]">
          <template #button>Destinations <LucidePlus /></template>
        </ButtonsDropdown>
        <NuxtLink
          class="nav-item contact"
          to="/contact"
          :class="{ active: $route.path === '/contact' }"
          aria-label="Contact Page"
          @click="toggleMenu"
          >Contact</NuxtLink
        >
        <Search v-if="isMobile" @toggle-menu="toggleMenu" />
      </div>
      <Search v-if="!isMobile" />
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isHidden = ref(false);
const lastScrollTop = ref(0);
const isMenuOpen = ref(false);

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

const { windowWidth, isMobile } = useWindowWidth();

function toggleMenu() {
  if (isMobile.value) {
    isMenuOpen.value = !isMenuOpen.value;
  }
}

function toggleMenuIfOpen() {
  if (isMobile.value && isMenuOpen.value) {
    toggleMenu();
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
  /* height: 5vw;*/
  height: fit-content;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  background: rgba(189, 191, 215, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); /* For Safari */
}

.nav {
  display: flex;
  width: 100%;
  margin: 0;
  margin-left: var(--spacing-5);
  margin-right: var(--spacing-5);
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  align-items: start;
  justify-content: flex-end;
}

.nav-items {
  margin-top: var(--spacing-1);
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/*.contact {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); 
  border: 1px solid var(--background-primary);
  border-radius: 5vw;
  padding: var(--spacing-1) var(--spacing-3);
  margin-left: auto;
  margin-right: 0;
}

.contact:hover {
  background: var(--color-lilac);
  color: var(--background-primary);
  border: 1px solid var(--background-primary);
}

.contact::after {
  display: none;
}*/

a {
  margin: 0 var(--spacing-3);
  color: var(--background-primary);
  pointer-events: all;
  height: fit-content;
}

a::after {
  background-color: var(--background-primary);
}

.logo-container {
  margin-right: auto;
}

.wordmark {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-S);
  margin-bottom: 0.5vw;
  margin-top: 0.5vw;
  margin-left: 0;
  margin-right: 0;
}

body.scrolled-past-header a {
  color: var(--foreground-primary);
}

body.scrolled-past-header a::after {
  background-color: var(--foreground-primary);
}

/*.nav-logo {
  filter: invert(100%);
  height: 5vw;
}

body.scrolled-past-header .nav-logo {
  filter: invert(0%);
}*/

.dropdown {
  margin: 0 var(--spacing-3);
}

.search {
  margin-left: auto;
  margin-top: var(--spacing-1);
  margin-bottom: 2px;
}

@media (max-width: 767px) {
  nav {
    height: 6vh;
    z-index: 100000;
  }

  .nav {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
    align-items: center;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 110vh;
    background-color: var(--background-primary);
    justify-content: start;
    padding-top: 30vh;
    align-items: start;
    transition: transform 0.3s ease-in-out;
    transform: translateY(-110%);
    padding-left: var(--spacing-2);
    padding-right: var(--spacing-2);
  }

  .nav-item {
    margin-left: 0;
    margin-right: 0;
  }

  .nav-items.open {
    transform: translateY(-5%);
  }

  a {
    margin-bottom: var(--spacing-1);
    color: var(--foreground-primary);
    font-size: var(--font-size-XL);
    font-family: var(--font-family-secondary);
  }

  a::after {
    background-color: var(--foreground-primary);
  }

  .wordmark {
    margin: 0;
    color: var(--background-primary);
  }

  .nav-logo {
    height: 10vw;
    z-index: 1000;
  }

  /*.nav-logo.open {
    filter: invert(0);
  }*/

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
    background: var(--background-primary);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .burger-menu span.open,
  body.scrolled-past-header .burger-menu span {
    background: var(--foreground-primary);
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

  .search {
    margin-top: 0;
  }
}
</style>
