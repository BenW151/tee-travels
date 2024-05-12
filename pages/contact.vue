<template>
  <div>
    <Header
      imageUrl="/images/cross-bath.png"
      title="Get in Touch"
      subtitle="Have a question? Let us know"
      headerClass="header-medium">
      <template #description>
        <!--
                buttonText="Book Now"
                buttonUrl="#contact-form"
                buttonDescription="Book Now"
          <p>Have a Question?</p>-->
      </template>
    </Header>

    <section id="contact-form">
      <FormsContactForm />
    </section>
  </div>
</template>

<script setup>
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
