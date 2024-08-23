<template>
  <div class="destination-pages">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Destinations"
      subtitle="Explore Posts by Destination."
      headerClass="header-small">
    </Header>

    <BlogRegions labelText="Regions">
      <template #title>Regions</template>
      <template #body>
        <p>
          Explore the countries I've had the pleasure of visiting. Each
          destination has its own unique character and charm, offering a diverse
          range of experiences and stories. Click through to read about my
          adventures in these places, discover local tips, and see the
          highlights of each country I've explored. I hope my travels inspire
          your own journey to these amazing locations!
        </p>
      </template>
    </BlogRegions>

    <BlogDestinationItems labelText="Countries">
      <template #title>Countries</template>
      <template #body>
        <p>
          Explore the countries I've had the pleasure of visiting. Each
          destination has its own unique character and charm, offering a diverse
          range of experiences and stories. Click through to read about my
          adventures in these places, discover local tips, and see the
          highlights of each country I've explored. I hope my travels inspire
          your own journey to these amazing locations!
        </p>
      </template>
    </BlogDestinationItems>
  </div>
</template>

<script setup>
useHead({
  title: "Tee Travels | Destinations",
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
