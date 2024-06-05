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
        <CarouselsDestinations />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Why Not Adventures - Destinations",
  meta: [
    {
      name: "description",
      content: "Offering affordable tours to off the beaten track destinations",
    },
  ],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
if (!isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}
</script>

<style>
@media (max-width: 767px) {
}
</style>
