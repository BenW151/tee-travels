<template>
  <div>
    <Nav />
    <Header
      imageUrl="/images/pakistan-cover.png"
      :title="`${error.statusCode} Error`"
      subtitle="This Page Does Not Exist"
      headerClass="header-small"
      buttonText="Go Home"
      buttonUrl="/"
      buttonDescription="Go Home">
      <template #description>
        <p>I haven't created this page yet.</p>
      </template>
    </Header>
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
