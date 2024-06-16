<template>
  <div>
    <Nav />
    <Header
      imageUrl="/images/pakistan/pakistan-cover.png"
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
      content: "Offering affordable tours to off the beaten track destinations",
    },
  ],
});
</script>
