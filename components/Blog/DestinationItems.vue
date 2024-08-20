<template>
  <div>
    <section class="destination-items">
      <LayoutGridContainer v-if="destinations && destinations.length">
        <div
          v-for="destination in destinations"
          :key="destination._path"
          class="destination-item">
          <NuxtLink
            :to="`/destinations/${destination.country}`"
            class="destination-link">
            <!-- Display the image -->
            <img
              :src="destination.headerImageUrl"
              :alt="destination.headerImageAlt"
              class="destination-image content-image" />
            <!-- Display the title -->
            <NuxtLink
              :to="`/destinations/${destination.country}`"
              class="destination-title"
              >{{ destination.title }}</NuxtLink
            >
            <p>{{ destination.description }}</p>
          </NuxtLink>
        </div>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
const { data: destinations } = await useAsyncData("destinations", async () => {
  try {
    // Fetch all destination pages from the 'destinations' folder
    const content = await queryContent("destinations").find(); // Update path to 'destinations'

    // Sort destinations by title or any other field if needed
    const sortedContent = content.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    return sortedContent;
  } catch (err) {
    console.error("Error fetching destinations:", err);
    return [];
  }
});
</script>

<style scoped>
.destination-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
  margin-right: auto;
}

.destination-link::after {
  display: none;
}

.destination-image {
  width: 100%;
  height: 30vw;
  object-fit: cover;
}

.destination-item:nth-child(2n + 1) {
  grid-column: 1 / 9;
  grid-row: auto;
}

.destination-item:nth-child(2n) {
  grid-column: 9 / 17;
  grid-row: auto;
}

@media (max-width: 767px) {
  .destination-image {
    height: 60vw;
  }

  .destination-title {
    margin-bottom: 0;
  }

  .destination-item:nth-child(2n + 1) {
    grid-column: 1 / 7;
  }

  .destination-item:nth-child(2n) {
    grid-column: 1 / 7;
  }
}
</style>
