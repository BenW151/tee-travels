<template>
  <div class="blog">
    <!-- Header Placeholder -->
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-large" />

    <article v-if="contentLoaded">
      <!-- Actual Header -->
      <Header
        :imageUrl="destinationData.headerImageUrl"
        :imageAlt="destinationData.headerImageAlt"
        :title="destinationData.title"
        :subtitle="destinationData.subtitle"
        headerClass="header-large" />

      <!-- Pass the correct country prop to BlogCountryPosts -->
      <BlogCountryPosts :country="country" />
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useAsyncData } from "nuxt/app";

const route = useRoute();
const country = route.params.slug;
const contentLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    contentLoaded.value = true;
  }, 300);
});

// Fetch the destination-specific data
const { data: destinationData } = await useAsyncData(
  `destinationData-${country}`,
  async () => {
    const content = await queryContent("destinations")
      .where({ country: country })
      .findOne();

    return content;
  }
);
</script>

<style>
.blog .paragraph.medium {
  display: none;
}
</style>
