<template>
  <footer ref="footer" class="background-inverted">
    <div class="container grid">
      <div class="item card">
        <img alt="ALT TEXT" src="/assets/images/logo-white.svg" />
        <div class="card-text">
          <h4>Thermae Bath Spa</h4>
          <p>Britain's original natural thermal spa</p>
        </div>
      </div>

      <div class="item address">
        <a class="link" href="URL" aria-label="DESCRIPTION"
          >The Hetling Pump Room, Hot Bath St, Bath, BA1 1SJ</a
        >
      </div>

      <ul class="item list link-list contact">
        <li>
          <a class="link underline-out" href="URL" aria-label="DESCRIPTION"
            >Book</a
          >
        </li>
        <li><a href="URL" aria-label="DESCRIPTION">Contact</a></li>
        <li><a href="URL" aria-label="DESCRIPTION">Careers</a></li>
        <li><a href="URL" aria-label="DESCRIPTION">Sustainability</a></li>
        <li><a href="URL" aria-label="DESCRIPTION">Accessibility</a></li>
      </ul>

      <ul class="item list link-list socials">
        <li><a href="URL" aria-label="DESCRIPTION">Instagram</a></li>
        <li><a href="URL" aria-label="DESCRIPTION">Twitter</a></li>
        <li><a href="URL" aria-label="DESCRIPTION">Facebook</a></li>
      </ul>
    </div>

    <div class="container grid footer-end">
      <p class="item">Copyright ©2024</p>
      <a class="item" href="https://github.com/BenW151" aria-label="Home Page"
        >Designed by Ben Ward</a
      >
      <a
        class="item"
        href="privacy-policy.html"
        aria-label="Privacy Policy Page"
        >Privacy Policy</a
      >
      <a
        class="item"
        href="terms-and-conditions.html"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</a
      >
    </div>
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

<style></style>
