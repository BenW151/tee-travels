<template>
  <div>
    <Nav />
    <Header
      imageUrl="/images/pakistan/pakistan-cover.webp"
      imageAlt="TODO REPLACE ONCE IMAGE FINALISED"
      :title="`${error.statusCode} Error`"
      subtitle="Destination Unknown"
      headerClass="header-small">
    </Header>
    <Footer />
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useHead({
  title: "Why Not Adventures - Error",
  meta: [
    {
      name: "description",
      content:
        "Why Not Adventures offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
    },
    {
      hid: "robots",
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>
