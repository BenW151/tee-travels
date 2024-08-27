<template>
  <div id="country-posts">
    <ItemGridItems labelText="Posts">
      <template #title>Blog Posts</template>
      <template #body>
        <p>
          Read about our latest adventures and insights from various countries
          around the world.
        </p>
      </template>

      <ItemGridItem
        v-for="post in countryPosts"
        :key="post._path"
        :itemUrl="post._path"
        :itemImage="post.headerImageUrl"
        :itemImageAlt="post.headerImageAlt"
        :itemLabel="post.title"
        :itemDescription="post.description"
        :isDestination="false" />
    </ItemGridItems>
  </div>
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
  labelText: {
    type: String,
    default: "",
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

</style>
