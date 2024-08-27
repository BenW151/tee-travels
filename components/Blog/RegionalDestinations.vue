<template>
  <div>
    <ItemGridItems labelText="Explore Destinations">
      <template #title>Countries</template>
      <template #body>
        <p>
          Explore some of the most breathtaking destinations around the world,
          perfect for your next adventure.
        </p>
      </template>

      <ItemGridItem
        v-for="destination in destinations"
        :key="destination._path"
        :itemUrl="`/destinations/${destination.country}`"
        :itemImage="destination.headerImageUrl"
        :itemImageAlt="destination.headerImageAlt"
        :itemLabel="destination.title"
        :isDestination="true" />
    </ItemGridItems>
  </div>
</template>

<script setup>
const props = defineProps({
  region: {
    type: String,
    required: true,
  },
  labelText: {
    type: String,
    default: "",
  },
});

const { data: destinations } = await useAsyncData(
  `destinations-${props.region}`,
  async () => {
    try {
      // Fetch all destination pages from the 'destinations' folder where the region matches the prop
      const content = await queryContent("destinations")
        .where({ region: props.region })
        .find();

      // Sort destinations by title or any other field if needed
      const sortedContent = content.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      return sortedContent;
    } catch (err) {
      console.error("Error fetching destinations:", err);
      return [];
    }
  }
);
</script>

<style scoped>

</style>
