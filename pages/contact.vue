<template>
  <div class="contact">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="Attabad Lake"
      title="Contact"
      subtitle="Have a question? Let us know"
      headerClass="header-small">
    </Header>

    <section id="contact-form">
      <FormsContactForm />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Contact | Tee Travels",
  meta: [
    {
      name: "description",
      content: "Get in Touch: We're Here to Help Plan Your Next Adventure.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/contact",
    },
  ],
});
</script>

<style>
.contact header .item.paragraph:nth-child(2) {
  grid-column: 15 / 16;
}
</style>
