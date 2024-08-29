<template>
  <div id="country-posts">
    <ItemGridItems labelText="Posts">
      <template #title>Blog Posts</template>
      <template #body>
        <p>
          Here, you'll find a collection of my latest travel adventures,
          insights, and personal stories from the road. Each post is a
          reflection of my experiences and discoveries, offering tips,
          recommendations, and a glimpse into the places I've explored. Dive in
          and join me as I share the highs and lows of my travels, and
          hopefully, inspire your own adventures along the way.
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

<style scoped></style>
