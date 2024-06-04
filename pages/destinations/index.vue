<template>
  <div>
    <Header
      imageUrl="/images/travel-blog.png"
      imageAlt="Laptop with code on desk"
      title="Destinations"
      subtitle="Previous Work"
      headerClass="header-small">
    </Header>

    <section class="carousel">
      <div class="container">
        <SwiperSlider :images="imageData" />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Portfolio",
  meta: [{ name: "description", content: "My amazing site." }],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
if (!isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}

const imageData = [
  {
    src: "/images/node-one-office.png",
    alt: "Node One",
    subDescription: "IT Services",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Tee Travels",
    subDescription: "Tour Provider",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/node-one-office.png",
    alt: "Node Three",
    subDescription: "Mobile Development",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Node Four",
    subDescription: "Cloud Services",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/node-one-office.png",
    alt: "Node Five",
    subDescription: "Consulting",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Node Six",
    subDescription: "Support",
    link: "/destinations/pakistan",
  },
];
</script>

<style>
.carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 7.5vh;
}

@media (max-width: 767px) {
  .carousel .container {
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }
}
</style>
