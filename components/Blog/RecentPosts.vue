<template>
  <div>
    <section class="recent-posts">
      <LayoutGridContainer v-if="posts && posts.length">
        <div v-for="post in posts.slice(0, 6)" :key="post._path" class="blog-item">
          <NuxtLink :to="post._path" class="post-link">
            <!-- Display the image -->
            <img
              :src="post.headerImageUrl"
              :alt="post.headerImageUrl"
              class="post-image content-image" />
            <!-- Display the title -->
            <NuxtLink :to="post._path" class="post-title">{{
              post.title
            }}</NuxtLink>
            <p>{{ post.description }}</p>
          </NuxtLink>
        </div>
        <!-- <p v-else>No posts found or failed to load posts.</p>-->
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", async () => {
  try {
    const content = await queryContent("blog").find();

    // Filter out destination pages
    const filteredContent = content.filter(
      (post) => !post._path.includes("destinations")
    );

    // Sort posts by date field in the front matter, newest first
    const sortedContent = filteredContent.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    return sortedContent;
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
});
</script>

<style scoped>
.post-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
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
