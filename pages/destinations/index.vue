<template>
  <div>
    <Header
      imageUrl="/images/pakistan/pakistan-passu-cones.webp"
      imageAlt="Passu Cones"
      title="Destinations"
      subtitle="Where Will You Go?"
      headerClass="header-small">
    </Header>

    <section class="carousel">
      <div class="container">
        <CarouselsDestinations />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Destinations | Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Discover Your Next Adventure: Unique Destinations and Authentic Experiences",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/destinations",
    },
  ],
});

const { windowWidth, isMobile } = useWindowWidth();

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
/*if (process.env.NODE_ENV === 'development' && !isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}*/
</script>

<style>
@media (max-width: 767px) {
}
</style>
