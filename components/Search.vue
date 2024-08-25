<template>
  <div class="search" ref="searchContainer">
    <div class="search-input-wrapper">
      <LucideSearch class="search-icon" />
      <input v-model="search" placeholder="Search..." spellcheck="false" />
    </div>
    <ListsLinkList
      v-if="filteredResults.length > 0"
      :links="
        filteredResults.slice(0, 4).map((result) => ({
          url: result.id,
          label: result.title,
        }))
      "
      @click="handleResultClick" />
  </div>
</template>

<script setup>
import MiniSearch from "minisearch";
import { ref, watchEffect, onMounted, onBeforeUnmount, defineEmits, computed } from "vue";
import { useRoute } from "vue-router";

const emit = defineEmits(["toggle-menu"]); // Declare the event

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

// Get current route's slug
const route = useRoute();
const getLastSegment = (path) => path.split('/').filter(Boolean).pop(); // Utility to get last segment

const currentPageSlug = computed(() => getLastSegment(route.path));

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
    emit("toggle-menu"); // Emit the event to the parent component
  }, 100);
  setTimeout(() => {
    window.scrollTo({ top: 0 });
  }, 300);
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);

  // Watch the search value and perform the search
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
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const filteredResults = computed(() => {
  return results.value.filter(result => {
    const resultSlug = getLastSegment(result.id);
    return resultSlug !== currentPageSlug.value;
  });
});
</script>

<style scoped>
.search {
  grid-column: 1 / 5;
  width: 10vw;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: -2vw;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.search input {
  width: 100%;
}

input {
  border: none;
  outline: none;
  border-radius: 0;
  color: var(--background-primary);
  background-color: transparent;
  position: relative;
  width: 100%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

input::placeholder {
  color: var(--background-primary);
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

.list {
  margin-top: var(--spacing-1);
  margin-bottom: 0;
}

body.scrolled-past-header input,
body.scrolled-past-header input::placeholder {
  color: var(--foreground-primary);
}

@media (max-width: 767px) {
  input,
  input::placeholder {
    color: var(--foreground-primary);
    margin-bottom: var(--spacing-1);
    color: var(--foreground-primary);
    font-size: var(--font-size-XL);
    font-family: var(--font-family-secondary);
    width: fit-content;
  }

  .search {
    margin: auto;
    width: fit-content;
    margin-top: 0;
  }

  .lucide {
    display: none;
  }
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

@media (max-width: 767px) {
  .search .list a {
    color: var(--foreground-primary);
    font-size: var(--font-size-S);
  }

  .search .list {
    width: fit-content;
  }
}
</style>
