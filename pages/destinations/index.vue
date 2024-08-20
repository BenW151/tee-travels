<template>
  <div class="destination-pages">
    <Header
      imageUrl="/images/index-background.webp"
      imageAlt="TODO alt"
      title="Destinations"
      subtitle="Explore Posts by Destination."
      headerClass="header-large">
    </Header>

    <BlogDestinationItems />
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Destinations",
  meta: [
    {
      name: "description",
      content:
        "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/",
    },
  ],
});
</script>

<style scoped></style>

<style>
.destination-pages .paragraph.medium {
  display: none;
}
</style>
