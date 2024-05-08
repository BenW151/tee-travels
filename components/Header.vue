<template>
  <header>
    <div
      class="background-image rellax"
      v-rellax
      data-rellax-speed="3"
      data-rellax-mobile-speed="0">
      <img alt="ALT TEXT" src="/assets/images/pool-night.png" />
    </div>
    <div class="container grid index-hero">
      <div class="hero-text item">
        <TextReveal tag="h1">Thermae Bath Spa </TextReveal>
        <TextReveal tag="h2">Britain's original natural thermal spa</TextReveal>
      </div>
      <div class="item paragraph">
        <p class="body">
          Discover relaxation and rejuvenation at the only naturally warm,
          mineral-rich waters in Britain. Immerse yourself in our luxurious spa
          facilities, including the iconic rooftop pool with stunning views of
          the historic city of Bath. Experience a blend of ancient tradition and
          modern spa therapy as you unwind in the soothing waters and indulge in
          a range of therapeutic treatments designed to refresh both body and
          mind. Whether you seek a moment of solitude or a shared experience,
          Thermae Bath Spa offers a timeless escape to enhance your wellbeing.
        </p>
        <a
          href="URL"
          aria-label="DESCRIPTION"
          class="item link underline-out-icon">
          <LucideSend />
          Book Now
        </a>
      </div>
    </div>
  </header>
</template>

<style>
body.scrolled-past-header .logo-hide {
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
  }
</style>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Header Image'
    },
    title: {
      type: String,
      default: 'Default Title'
    },
    subtitle: {
      type: String,
      default: 'Default Subtitle'
    },
    description: {
      type: String,
      default: 'Default Description'
    },
    bookUrl: {
      type: String,
      default: '#'
    },
    rellaxSpeed: {
      type: String,
      default: '3'
    },
    rellaxMobileSpeed: {
      type: String,
      default: '0'
    }
  },
  mounted() {
    this.checkScroll(); // To initialize the class based on initial scroll position
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      const header = this.$el; // Vue reference to the header element
      if (window.scrollY > header.offsetHeight) {
        document.body.classList.add("scrolled-past-header");
      } else {
        document.body.classList.remove("scrolled-past-header");
      }
    },
  },
};
</script>
