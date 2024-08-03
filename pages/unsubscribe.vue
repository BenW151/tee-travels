<template>
  <div>
    <Header
      imageUrl="/images/pakistan/pakistan-cover.webp"
      imageAlt="View of Rakaposhi from Karimabad"
      title="Unsubscribe"
      subtitle="Enter Your Email Below"
      headerClass="header-small">
    </Header>

    <div class="unsubscribe">
      <section id="unsubscribe">
        <LayoutGridContainer>
          <FormsNewsletterUnsubscribe />
        </LayoutGridContainer>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Unsubscribe | Why Not Adventures",
  meta: [
    {
      name: "description",
      content: "Unsubscribe From Our Mailing List.",
    },
    {
      hid: "robots",
      name: "robots",
      content: "noindex",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/unsubscribe",
    },
  ],
});
</script>

<style scoped>
#unsubscribe .item.newsletter {
  grid-column: 6 / 12;
  grid-row: 1;
}

@media (max-width: 767px) {
  #unsubscribe .item.newsletter {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-top: 6vh;
  }
}
</style>
