<template>
  <section class="country-posts">
    <LayoutGridContainer v-if="countryPosts && countryPosts.length">
      <div v-for="post in countryPosts" :key="post._path" class="blog-item">
        <NuxtLink :to="post._path" class="post-link">
          <!-- Display the image -->
          <img
            :src="post.headerImageUrl"
            :alt="post.headerImageAlt"
            class="post-image content-image" />
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
    required: true,
  },
});

const { data: countryPosts } = await useAsyncData(
  `countryPosts-${props.country}`,
  async () => {
    const content = await queryContent("blog").find();

    // Filter posts by the country prop and exclude 'destinations'
    const filteredContent = content.filter(
      (post) =>
        post.country &&
        post.country.toLowerCase() === props.country.toLowerCase() &&
        !post._path.includes('destinations') // Exclude items from the 'destinations' directory
    );

    return filteredContent;
  }
);
</script>

<style scoped>
.post-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
  margin-right: auto;
}

.post-link::after {
  display: none;
}

.post-image {
  width: 100%;
  height: 30vw;
  object-fit: cover;
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
  .post-image {
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
