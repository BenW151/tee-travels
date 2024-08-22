<template>
  <div class="destination-pages">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Oceania"
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
    <BlogCountryPosts country="oceania" />
    <BlogRegionalDestinations region="oceania" />
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
</style>
