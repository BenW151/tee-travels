<template>
  <div class="search" ref="searchContainer">
    <input v-model="search" placeholder="Search..." />
    <ListsLinkList
      v-if="results.length > 0"
      :links="
        results.slice(0, 4).map((result) => ({
          url: result.id,
          label: result.title,
        }))
      "
      @click="handleResultClick"
    />
  </div>
</template>

<script setup>
import MiniSearch from "minisearch";
import { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";

const search = ref("");
const results = ref([]);
const searchContainer = ref(null);

// Initialize MiniSearch
const miniSearch = new MiniSearch({
  fields: ["title", "subtitle", "description", "country", "tag"],
  storeFields: ["id", "title", "subtitle"],
  searchOptions: {
    prefix: true, // Allows searching for prefixes, e.g., 'fran' will match 'france'
    fuzzy: 0.3, // Allows for some degree of typo tolerance (0.2 = tolerate up to 20% of characters being wrong)
  },
});

const handleClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    search.value = ""; // Clear the search input
    results.value = []; // Clear the search results
  }
};

const handleResultClick = (event) => {
  // Delay clearing to allow the navigation to complete
  setTimeout(() => {
    search.value = "";
    results.value = [];
  }, 100);
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
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
  border-radius: 0;
  color: var(--background-primary);
  background-color: transparent;
  position: relative;
  width: 70%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

input::placeholder {
  color: var(--background-primary);
}

.list {
  margin-top: var(--spacing-1);
}

body.scrolled-past-header input, body.scrolled-past-header input::placeholder {
  color: var(--foreground-primary);
}

</style>

<style>
.search .list a {
  color: var(--background-primary);
}

.search .list a::after {
  background-color: var(--background-primary);
}

body.scrolled-past-header .search .list a {
  color: var(--foreground-primary);
}

body.scrolled-past-header .search .list a::after {
  background-color: var(--foreground-primary);
}
</style>
