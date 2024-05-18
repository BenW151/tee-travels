<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer-end">
      <p class="item">Copyright ©2024</p>
      <NuxtLink class="item" href="/contact" aria-label="Contact Page"
        >Contact</NuxtLink
      >
      <NuxtLink
        class="item"
        to="/privacy-policy"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item"
        to="/terms-and-conditions"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
    </LayoutGridContainer>
  </footer>
</template>

<script>

</script>

<style scoped>
footer {
  position: relative;
  z-index: 2;
  transition: none;
}

footer .container {
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
  background-color: var(--font-color-primary);
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
