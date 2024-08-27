<template>
  <div class="resources">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Resources"
      subtitle="Helpful Resources."
      headerClass="header-small">
    </Header>

    <section class="contents">
      <LayoutGridContainer>
        <ListsPageIndex :labels="pageIndexLabels" />
      </LayoutGridContainer>
    </section>

    <ItemGridItems labelText="Accommodation" id="hotels">
      <template #title>Hotels + Hostels</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://booking.com"
        itemImage="/images/bookingcom-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Booking.com"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
      <ItemGridItem
        itemUrl="https://hostelworld.com"
        itemImage="/images/hostelworld-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Hostel World"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
    </ItemGridItems>

    <ItemGridItems labelText="Accommodation" id="free-accommodation">
      <template #title>Free Accommodation</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://trustedhousesitters.com"
        itemImage="/images/ths-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Trusted House Sitters"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
      <ItemGridItem
        itemUrl="https://couchsurfing.com"
        itemImage="/images/couchsurfing-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Couchsurfing"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
    </ItemGridItems>

    <ItemGridItems labelText="Flights" id="flights">
      <template #title>Flights</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://skyscanner.com"
        itemImage="/images/skyscanner-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="SkyScanner"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
      <ItemGridItem
        itemUrl="https://googleflights.com"
        itemImage="/images/googleflights-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Google Flights"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
    </ItemGridItems>

    <ItemGridItems labelText="Hiking" id="hiking">
      <template #title>Hiking</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://alltrails.com"
        itemImage="/images/alltrails-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="AllTrails"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
      <ItemGridItem
        itemUrl="https://mapsme.com"
        itemImage="/images/mapsme-logo.png"
        itemImageAlt="Image 1 description"
        itemLabel="Maps.me"
        itemDescription="Here are some of my favourite resources to help you make the most of
          your travels. From must-have gear to essential tips and tricks, I've
          gathered everything you need to prepare for your adventures." />
    </ItemGridItems>
  </div>
</template>

<script setup>
const pageIndexLabels = [
  { title: "Hotels + Hostels", link: "hotels" },
  { title: "Free Accommodation", link: "free-accommodation" },
  { title: "Flights", link: "flights" },
  { title: "Hiking", link: "hiking" },
];

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
.contents .container {
  padding-bottom: var(--spacing-1);
}

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
