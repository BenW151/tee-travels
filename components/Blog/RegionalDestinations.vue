<template>
  <div>

    <section class="destination-items-text text-left" id="destination-items-text">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Countries" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
          <template #title>Countries</template>
          <template #body>
            <p>
              Embark on an adventure and discover some of my favourite
              destinations. Each location offers unique experiences and
              unforgettable memories. Check out our diverse range of tours and
              find your next great escape!
            </p>
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
  region: {
    type: String,
    required: true,
  },
});

const { data: destinations } = await useAsyncData(`destinations-${props.region}`, async () => {
  try {
    // Fetch all destination pages from the 'destinations' folder where the region matches the prop
    const content = await queryContent("destinations").where({ region: props.region }).find();

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
.destination-items .container {
  padding-top: 0;
}

.destination-items-text .container {
  padding-bottom: 0;
}

.destination-link {
  margin-bottom: 0;
}

.destination-link::after {
  display: none;
}

.destination-image {
  width: 100%;
  height: 20vw;
  object-fit: cover;
  display: block;
  filter: brightness(0.6);
}

.image-container {
  position: relative;
  width: 100%;
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

.destination-item:nth-child(4n+1) {
  grid-column: 1 / span 4;
}

.destination-item:nth-child(4n+2) {
  grid-column: 5 / span 4;
}

.destination-item:nth-child(4n+3) {
  grid-column: 9 / span 4;
}

.destination-item:nth-child(4n+4) {
  grid-column: 13 / span 4;
}

.index .container {
  padding-top: 0;
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
