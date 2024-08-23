<template>
  <div class="blog-pages">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="Laptop with code on desk"
      title="Recent Posts"
      subtitle="Recent Blog Posts."
      headerClass="header-small">
    </Header>

    <BlogRecentPosts />
  </div>
</template>

<script setup>
useHead({
  title: "Tee Travels | Blog",
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
.post-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-secondary);
  margin-right: auto;
}

.post-link::after {
  display: none;
}

.post-image {
  width: 100%;
  height: 30vw;
  object-fit: cover;
}

.blog-item:nth-child(2n + 1) {
  grid-column: 1 / 9;
  grid-row: auto;
}

.blog-item:nth-child(2n) {
  grid-column: 9 / 17;
  grid-row: auto;
}

@media (max-width: 767px) {
  .post-image {
    height: 60vw;
  }

  .post-title {
    margin-bottom: 0;
  }

  .blog-item:nth-child(2n + 1) {
    grid-column: 1 / 7;
  }

  .blog-item:nth-child(2n) {
    grid-column: 1 / 7;
  }
}
</style>

<style>
.blog-pages .paragraph.medium {
  display: none;
}
</style>
