<template>
  <div class="contact">
    <Header
      imageUrl="/images/travel-blog.png"
      imageAlt="Laptop with code on desk"
      title="Contact"
      subtitle="Have a question? Let me know"
      headerClass="header-medium">
      <template #description>
        <ListsLinkList
          class="contact"
          :links="[
            {
              url: 'https://www.linkedin.com/in/benw151/',
              label: 'LinkedIn',
              description: 'LinkedIn',
            },
            {
              url: 'https://github.com/BenW151/',
              label: 'GitHub',
              description: 'GitHub',
            },
            {
              url: 'mailto:myemail@email.com',
              label: 'Email',
              description: 'Email',
            },
          ]" />
      </template>
    </Header>

    <section id="contact-form">
      <FormsContactForm />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Contact",
  meta: [{ name: "description", content: "My amazing site." }],
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
  grid-column: 3 / 12;
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
