<template>
  <section class="country-posts">
    <LayoutGridContainer v-if="countryPosts && countryPosts.length">
      <div v-for="post in countryPosts" :key="post._path" class="blog-item">
        <NuxtLink :to="post._path" class="post-link">
          <!-- Display the image -->
          <div class="image-container">
            <img
              :src="post.headerImageUrl"
              :alt="post.headerImageAlt"
              class="post-image content-image" />
          </div>
          <!-- Display the title -->
          <NuxtLink :to="post._path" class="post-title">{{
            post.title
          }}</NuxtLink>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </LayoutGridContainer>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  country: {
    type: String,
    required: false, // Make this optional since region might be provided
  },
  region: {
    type: String,
    required: false, // Make this optional as well
  },
});

const filterBy = props.country || props.region; // Use the one that is provided

const { data: countryPosts } = await useAsyncData(
  `countryPosts-${filterBy}`,
  async () => {
    const content = await queryContent("blog").find();

    // Filter posts by either country or region prop and exclude 'destinations'
    const filteredContent = content.filter((post) => {
      if (props.country) {
        return (
          post.country &&
          post.country.toLowerCase() === props.country.toLowerCase() &&
          !post._path.includes("destinations") // Exclude items from the 'destinations' directory
        );
      } else if (props.region) {
        return (
          post.region &&
          post.region.toLowerCase() === props.region.toLowerCase() &&
          !post._path.includes("destinations") // Exclude items from the 'destinations' directory
        );
      }
      return false;
    });

    return filteredContent;
  }
);
</script>

<style scoped>
.country-posts .container {
  padding-top: 0;
}

.country-posts-text .container {
  padding-bottom: 0;
}

.post-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-secondary);
  margin-right: auto;
}

.post-link::after {
  display: none;
}

.post-image {
  width: 100%;
  object-fit: cover;
  display: block;
  margin: auto;
}

.blog-item:hover .post-image {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 30vw;
  overflow: hidden;
}

.country-posts h3 {
  grid-column: 1 / 17;
  grid-row: 1;
}

.blog-item:nth-child(2n + 1) {
  grid-column: 1 / 9;
  grid-row: auto;
}

.blog-item:nth-child(2n) {
  grid-column: 9 / 17;
  grid-row: auto;
}

.country-posts h3 {
  grid-column: 1 / 17;
  grid-row: 1;
  text-transform: capitalize;
}

@media (max-width: 767px) {
  .image-container {
    height: 60vw;
  }

  .post-title {
    margin-bottom: 0;
  }

  .blog-item:nth-child(2n + 1) {
    grid-column: 1 / 7;
  }

  .blog-item:nth-child(2n) {
    grid-column: 1 / 7;
  }
}
</style>
