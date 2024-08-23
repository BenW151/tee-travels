<template>
  <div class="resources">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Resources"
      subtitle="Helpful Resources."
      headerClass="header-small">
    </Header>

    <section class="resources-text text-left">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Resources" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
          <template #title>Resources</template>
          <template #body>
            <p>
              Embark on an adventure and discover some of my favourite
              destinations. Each location offers unique experiences and
              unforgettable memories. Check out our diverse range of tours and
              find your next great escape!
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <BlogCountryPosts region="resources" />
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Destinations",
  meta: [
    {
      name: "description",
      content:
        "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/",
    },
  ],
});
</script>

<style scoped></style>

<style>
.resources-text .container {
  padding-bottom: 0;
}

.text-left .paragraph-with-title {
  grid-column: 1 / 9;
  grid-row-start: 2;
}

.text-left .image {
  grid-column: 10 / 17;
  grid-row-start: 2;
  height: 40vw;
}

.text-right .paragraph-with-title {
  grid-column: 9 / 17;
  grid-row-start: 2;
}

.text-right .image {
  grid-column: 1 / 8;
  grid-row-start: 2;
  height: 40vw;
}
</style>
