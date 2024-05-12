<template>
  <div>
    <Nav />
    <Header
      imageUrl="/images/infrared-room.png"
      :title="`${error.statusCode} Error`"
      subtitle="This Page Does Not Exist"
      headerClass="header-small"
      buttonText="Go Home"
      buttonUrl="/"
      buttonDescription="Go Home">
      <template #description> <p>I haven't created this page yet.</p> </template>
    </Header>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: "/" });

useHead({
  title: "Bath Spa - Error",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

