<template>
  <div>
    <Header
      imageUrl="/images/portfolio-background.png"
      title="Portfolio"
      subtitle="Previous Work"
      headerClass="header-small">
      <template #description> </template>
    </Header>

    <section id="carousel">
      <div class="container">
        <SwiperSlider />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Portfolio",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style>
#carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
}

@media (max-width: 767px) {
  #carousel .container {
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }
}
</style>
