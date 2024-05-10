<template>
  <footer ref="footer" class="background-inverted">
    <LayoutGridContainer>
      <div class="item card">
        <NuxtImg alt="ALT TEXT" src="/images/logo-white.svg" />
        <div class="card-text">
          <h4>Thermae Bath Spa</h4>
          <p>Britain's original natural thermal spa</p>
        </div>
      </div>

      <div class="item address">
        <NuxtLink class="link" to="URL" aria-label="DESCRIPTION"
          >The Hetling Pump Room, Hot Bath St, Bath, BA1 1SJ</NuxtLink
        >
      </div>

      <ListsLinkList
        class="contact"
        :links="[
          {
            url: '/book',
            label: 'Book',
            description: 'Book a service',
            class: 'underline-out',
          },
          { url: '/contact', label: 'Contact', description: 'Contact Us' },
          { url: '/careers', label: 'Careers', description: 'View Careers' },
          {
            url: '/sustainability',
            label: 'Sustainability',
            description: 'Our Sustainability Efforts',
          },
          {
            url: '/accessibility',
            label: 'Accessibility',
            description: 'Accessibility Options',
          },
        ]" />

      <ListsLinkList
        class="socials"
        :links="[
          {
            url: 'https://instagram.com',
            label: 'Instagram',
            description: 'Instagram',
          },
          {
            url: 'https://instagram.com',
            label: 'Twitter',
            description: 'Twitter',
          },
          {
            url: 'https://instagram.com',
            label: 'Facebook',
            description: 'Facebook',
          },
        ]" />
    </LayoutGridContainer>

    <LayoutGridContainer class="footer-end">
      <p class="item">Copyright ©2024</p>
      <a class="item" href="https://github.com/BenW151" aria-label="Home Page"
        >Designed by Ben Ward</a
      >
      <NuxtLink
        class="item"
        to="privacy-policy.html"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item"
        to="terms-and-conditions.html"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
    </LayoutGridContainer>
  </footer>
</template>

<script lang="ts">
export default {
  mounted() {
    this.addScrollEffect();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const footer = this.$refs.footer as HTMLElement;
      const scrollableDistance =
        document.documentElement.scrollHeight - window.innerHeight;
      const footerHeight = footer.clientHeight;
      const revealStartPoint = scrollableDistance - footerHeight;

      let scrolled = window.scrollY;

      if (scrolled >= revealStartPoint) {
        let offset = scrolled - revealStartPoint;
        let percentage = Math.min(offset / footerHeight, 1);
        let translateY = -12 + percentage * 12;

        footer.style.transform = `translateY(${translateY}rem)`;
        document.body.style.paddingBottom = `${12 - translateY}rem`;
      } else {
        footer.style.transform = "translateY(-12rem)";
        document.body.style.paddingBottom = "0";
      }
    },
    addScrollEffect() {
      window.addEventListener("scroll", this.handleScroll);
    },
  },
};
</script>

<style scoped>
footer {
  position: relative;
  z-index: 2;
  transition: none;
  transform: translateY(-12rem);
}

footer .container {
  background-color: var(--background-secondary);
  color: var(--color-white);
  padding-bottom: var(--spacing-3);
  padding-top: var(--spacing-3);
  white-space: nowrap;
}

.footer-end .item {
  margin-right: auto;
  margin-top: var(--spacing-3);
}

.footer-end {
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: relative;
}

.footer-end::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 1px;
  top: 5px;
  left: 5%;
  background-color: var(--font-color-secondary);
}

footer .list.socials {
  grid-column: 11 / 14;
  grid-row-start: 2;
  margin-top: auto;
}

footer .list.contact {
  grid-column: 14 /17;
  grid-row-start: 2;
  margin-top: auto;
}

footer .address {
  grid-column: 1 / 3;
}

footer .card {
  grid-column: 1 / 4;
  grid-row-start: 1;
}

footer .card h4 {
  margin-bottom: var(--spacing-1);
}

.footer-end .item:nth-child(1) {
  grid-column: 1 / 3;
}

.footer-end .item:nth-child(2) {
  grid-column: 4 / 6;
}

.footer-end .item:nth-child(3) {
  grid-column: 11 / 13;
}

.footer-end .item:nth-child(4) {
  grid-column: 14 / 17;
}

@media (max-width: 767px) {
  footer .container {
    padding-bottom: 0;
  }

  footer .card {
    margin-bottom: var(--spacing-5);
    grid-column: 1 / 7;
  }

  footer .list.socials {
    grid-column: 1 / 3;
    grid-row-start: 2;
  }

  footer .list.contact {
    grid-column: 5 / 7;
    grid-row-start: 2;
  }

  footer .address {
    grid-column: 1 / 7;
    grid-row-start: 3;
  }

  .footer-end .item {
    margin-top: 0;
  }

  .footer-end .item:nth-child(1) {
    grid-column: 1 / 4;
  }

  .footer-end .item:nth-child(2) {
    grid-column: 1 / 4;
  }

  .footer-end .item:nth-child(3) {
    grid-column: 5 / 7;
    grid-row-start: 1;
  }

  .footer-end .item:nth-child(4) {
    grid-column: 5 / 7;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  footer .list.socials {
    grid-column: 10/13;
    grid-row-start: 2;
    margin-top: var(--spacing-5);
  }

  footer .list.contact {
    grid-column: 13/17;
    grid-row-start: 2;
    margin-top: var(--spacing-5);
  }

  .footer-end .item:nth-child(1) {
    grid-column: 1 / 5;
    grid-row-start: 1;
  }

  .footer-end .item:nth-child(2) {
    grid-column: 1 / 5;
    grid-row-start: 2;
  }

  .footer-end .item:nth-child(3) {
    grid-column: 13 / 17;
    grid-row-start: 1;
  }

  .footer-end .item:nth-child(4) {
    grid-column: 13 / 17;
    grid-row-start: 2;
  }
}
</style>
