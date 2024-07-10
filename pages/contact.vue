<template>
  <div class="contact">
    <Header
      imageUrl="/images/kyrgyzstan-cover.webp"
      imageAlt="Laptop with code on desk"
      title="Contact"
      subtitle="Have a question? Let us know."
      headerClass="header-small"
      :pageIndexLabels="[
        { title: 'Email', link: 'mailto:contact@whynotadventures.co.uk' },
        { title: 'Whatsapp', link: 'https://wa.me/447000000000' },
        { title: 'Instagram', link: 'https://instagram.com/whynotadventures_' },
        { title: 'Facebook', link: 'https://facebook.com/whynotadventures_' },
      ]">
    </Header>

    <section id="contact-form">
      <FormsContactForm />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Contact | Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Get in Touch: We're Here to Help Plan Your Next Adventure.",
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

.contact-form {
  grid-column: 3 / 15;
}

#contact-form .paragraph-with-title {
  grid-column: 3 / 11;
  grid-row: 1;
}

#contact-form .item-inner {
  margin: 0;
}

@media (max-width: 767px) {
  #contact-form .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .contact header .item.paragraph:nth-child(2) {
    grid-column: 6 / 7;
  }
}
</style>
