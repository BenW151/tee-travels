<template>
  <footer ref="footer">
    <LayoutGridContainer>
      <div :class="{ 'nav-items': true, open: isMenuOpen }">
        <NuxtLink
          class="nav-item"
          to="/"
          :class="{ active: $route.path === '/' }"
          aria-label="Home Page"
          >About</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/destinations"
          :class="{ active: $route.path === '/destinations' }"
          aria-label="Destinations Page"
          >Destinations</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/contact"
          :class="{ active: $route.path === '/contact' }"
          aria-label="Contact Page"
          >Contact</NuxtLink
        >
      </div>
      <ListsLinkList
        class="socials"
        :links="[
          {
            url: 'https://www.instagram.com/whynotadventures_/',
            label: 'Instagram',
            description: 'Instagram',
            icon: 'ExternalLink',
          },
          {
            url: 'https://facebook.com/whynotadventures_/',
            label: 'Facebook',
            description: 'Facebook',
            icon: 'ExternalLink',
          },
        ]" />
      <FormsNewsletter />
      <div class="legal">
        <!--<div class="images">
          <ImageDefault
            imageUrl="/images/abta.webp"
            imageAlt="Celestial Relaxation Room"
            class="abta"
            objectFit="contain"
            rellaxPercentage="0"
            rellaxSpeed="0" />
        </div>-->
        <p>Why Not Adventures Ltd are a UK registered company – No. 15826857</p>
      </div>
      <NuxtImg
        src="/branding/why-not-adventures-logo-rectangle-no-bg.svg"
        alt="Why Not Adventures Logo"
        class="footer-logo" />
    </LayoutGridContainer>

    <LayoutGridContainer class="footer-end">
      <p class="item copyright">Copyright ©2024</p>
      <NuxtLink
        class="item privacy-policy"
        :class="{ active: $route.path === '/privacy-policy' }"
        to="/privacy-policy"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item terms"
        :class="{ active: $route.path === '/terms-and-conditions' }"
        to="/terms-and-conditions"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
      <button
        class="item back-to-top"
        @click="scrollToTop"
        aria-label="Back to Top">
        Back to Top
      </button>
      <!--<p class="credit">
        Site by
        <a class="link underline-out" href="https://benward.io">Ben Ward</a>
      </p>-->
    </LayoutGridContainer>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
footer {
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer .container {
  padding-bottom: var(--spacing-3);
  padding-top: var(--spacing-3);
  white-space: nowrap;
}

footer .nav-items {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}

footer .nav-items .nav-item {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
}

footer .socials {
  grid-column: 6 / 10;
  grid-row-start: 1;
  margin-top: auto;
}

.newsletter {
  grid-column: 11 / 15;
  grid-row: 1 / 2;
  margin-top: auto;
}

.legal {
  grid-column: 6 / 10;
  grid-row-start: 2;
  white-space: normal;
  margin-top: auto;
}

.legal p {
  opacity: var(--opacity);
}

.images {
  display: inline-flex;
}

.abta {
  display: none;
  height: 5vw;
  margin: var(--spacing-3);
  margin-left: 0;
  margin-top: 0;
}

.footer-logo {
  grid-column: 11 /15;
  height: 5vw;
  margin: 0;
}

.footer-end .item {
  margin-right: auto;
}

.copyright {
  grid-column: 1 / 3;
  grid-row: 1;
}

.terms {
  grid-column: 6 / 8;
  grid-row: 1;
}

.privacy-policy {
  grid-column: 11 / 13;
  grid-row: 1;
}

.back-to-top,
.credit {
  grid-column: 15 / 17;
  grid-row: 1;
}

.item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.back-to-top:hover {
  cursor: pointer;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 767px) {
  footer {
    height: 30vh;
    justify-content: space-between;
  }

  .footer {
    align-items: start;
    margin: 0;
    text-align: center;
  }

  .footer .item {
    font-size: var(--font-size-XS);
    margin: 0 var(--spacing-3);
  }

  .newsletter,
  .legal,
  footer .socials,
  footer .nav-items, footer .footer-logo {
    grid-column: 1 / 7;
    grid-row-start: auto;
    grid-row: auto;
  }

  .footer-logo {
    width: 100%;
    height: auto;
  }

  .abta {
    height: 10vh;
    margin-top: var(--spacing-3);
  }

  .copyright {
    grid-column: 5 / 7;
    grid-row: 1;
  }

  .terms {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .privacy-policy {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .back-to-top,
  .credit {
    grid-column: 5 / 7;
    grid-row: 2;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>

<style>
footer .socials a {
  font-size: var(--font-size-S);
  font-family: var(--font-family-primary);
}

footer .socials a::after {
  display: none;
}
</style>
