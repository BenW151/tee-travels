<template>
  <Header
    imageUrl="/images/cross-bath.png"
    title="Get in Touch"
    subtitle="Britain's original natural thermal spa"
    buttonText="Book Now"
    buttonUrl="/another-page"
    buttonDescription="Book Now"
    headerClass="header-medium">
    <template #description>
      <p>
        Have a Question?
      </p>
    </template>
  </Header>

  <section id="contact-form">
      <FormsContactForm />
    </section>
</template>

<script setup lang="ts">
useHead({
  title: "Bath Spa - Contact",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style>
.contact-form {
  grid-column: 3 / 15;
}

#contact-form .paragraph-with-title {
  grid-column: 3 / 12;
  grid-row: 1;
}

#contact-form .item-inner {
  margin: 0;
}
</style>

