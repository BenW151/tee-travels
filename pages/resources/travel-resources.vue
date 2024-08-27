<template>
  <div class="resources">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Resources"
      subtitle="Helpful Resources."
      headerClass="header-small">
    </Header>

    <ItemGridItems labelText="Hiking">
      <template #title>Accomodation</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://booking.com"
        itemImage="/images/booking-com-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Booking.com"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
      <ItemGridItem
        itemUrl="https://hostelworld.com"
        itemImage="/images/booking-com-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Hostel World"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
    </ItemGridItems>
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
.resources-text .container {
  padding-bottom: 0;
}

.text-left .paragraph-with-title {
  grid-column: 1 / 9;
  grid-row-start: 2;
}

.text-left .image {
  grid-column: 10 / 17;
  grid-row-start: 2;
  height: 40vw;
}

.text-right .paragraph-with-title {
  grid-column: 9 / 17;
  grid-row-start: 2;
}

.text-right .image {
  grid-column: 1 / 8;
  grid-row-start: 2;
  height: 40vw;
}
</style>
