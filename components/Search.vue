<template>
  <div class="search">
    <input v-model="search" placeholder="Search..." />
    <ListsLinkList
      v-if="results.length > 0"
      :links="results.slice(0, 4).map(result => ({
        url: result.id,
        label: result.title,
      }))"
    />
    <p class="item" v-else>No results found.</p>
  </div>
</template>

<script setup>
import MiniSearch from "minisearch";
import { ref, watchEffect } from "vue";

const search = ref("");
const results = ref([]);

// Initialize MiniSearch
const miniSearch = new MiniSearch({
  fields: ["title", "subtitle", "description", "country", "tag"],
  storeFields: ["id", "title", "subtitle"],
  searchOptions: {
    prefix: true, // Allows searching for prefixes, e.g., 'fran' will match 'france'
    fuzzy: 0.3, // Allows for some degree of typo tolerance (0.2 = tolerate up to 20% of characters being wrong)
  },
});

if (process.client) {
  watchEffect(async () => {
    if (search.value) {
      try {
        // Fetch the search results directly using the searchContent composable
        const searchResultsRef = await searchContent(search.value);
        const searchResults = searchResultsRef.value; // Unwrap the computed reference

        // Clear MiniSearch before adding new documents to avoid duplicate IDs
        miniSearch.removeAll();

        // Check if the unwrapped data is an array
        if (Array.isArray(searchResults)) {
          // Add all documents to MiniSearch
          miniSearch.addAll(searchResults);

          // Perform search using MiniSearch and update results
          results.value = miniSearch.search(search.value);
        } else {
          console.error("Search results are not an array:", searchResults);
        }
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      results.value = [];
    }
  });
}
</script>

<style scoped>

.search {
  grid-column: 1 / 5;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--accent-primary);
  border-radius: 0;
  color: var(--foreground-primary);
  background-color: transparent;
  position: relative;
  padding-bottom: var(--spacing-1);
  width: 70%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
  margin-bottom: var(--spacing-1);
}

input:focus {
  border-bottom: 1px solid var(--foreground-primary);
}
</style>
