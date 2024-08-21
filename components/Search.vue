<template>
  <main>
    <input v-model="search" placeholder="Search content...">
    <pre>{{ results }}</pre>
  </main>
</template>

<script setup>
const search = ref('')
const results = ref([])

if (process.client) {
  watchEffect(async () => {
    if (search.value) {
      try {
        results.value = await searchContent(search)
      } catch (error) {
        console.error('Search error:', error)
      }
    } else {
      results.value = []
    }
  })
}
</script>