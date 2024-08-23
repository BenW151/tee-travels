<template>
  <div>
    <section
      class="destination-items-text text-left"
      id="destination-items-text">
      <LayoutGridContainer>
        <TextSectionLabel :labelText="labelText" />
        <TextParagraphWithTitle subtitle-tag="h3" text-position="left">
          <template #title>
            <slot name="title"></slot>
          </template>
          <template #body>
            <slot name="body"></slot>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="destination-items">
      <LayoutGridContainer v-if="destinations && destinations.length">
        <div
          v-for="destination in destinations"
          :key="destination._path"
          class="destination-item">
          <NuxtLink
            :to="`/destinations/${destination.country}`"
            class="destination-link">
            <!-- Container for image and title -->
            <div class="image-container">
              <!-- Display the image -->
              <img
                :src="destination.headerImageUrl"
                :alt="destination.headerImageAlt"
                class="destination-image content-image" />
              <!-- Display the title -->
              <NuxtLink
                :to="`/destinations/${destination.country}`"
                class="destination-title">
                {{ destination.title }}
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>

const props = defineProps({
  labelText: {
    type: String,
    default: '',
  },
});

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

.destination-items-text .container {
  padding-bottom: 0;
}

.destination-items .container {
  padding-top: 0;
}

.destination-link {
  margin-bottom: 0;
  width: 100%;
  height: 100%;
}

.destination-link::after {
  display: none;
}

.destination-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  display: block;
  filter: brightness(0.6);
}

.destination-item:hover .destination-image {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
}

.destination-title {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: var(--font-size-M);
  font-family: var(--font-family-secondary);
  color: var(--color-white);
  margin: 0;
  pointer-events: none;
}

.destination-item:nth-child(4n + 1) {
  grid-column: 1 / span 4;
}

.destination-item:nth-child(4n + 2) {
  grid-column: 5 / span 4;
}

.destination-item:nth-child(4n + 3) {
  grid-column: 9 / span 4;
}

.destination-item:nth-child(4n + 4) {
  grid-column: 13 / span 4;
}

.index .container {
  padding-top: 0;
}

@media (max-width: 767px) {
  .image-container {
    height: 80vw;
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
