<template>
  <div class="destination-pages">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Europe"
      subtitle="Explore Posts by Destination."
      headerClass="header-small">
    </Header>

    <section class="country-posts-text text-left" id="country-posts">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Related Posts" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
          <template #title>Blog Posts</template>
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
    <BlogCountryPosts region="europe" />

    <BlogRegionalDestinations region="europe" />
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

<style scoped>
.country-posts-text .container {
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

@media (max-width: 767px) {
  section div.container.grid div.item,
  .end-text a {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .container .image:nth-of-type(2) {
    height: 40vh;
  }
}
</style>