<template>
  <div>
    <section class="recent-posts">
      <LayoutGridContainer v-if="posts && posts.length">
        <div v-for="post in posts" :key="post._path" class="blog-item">
          <NuxtLink :to="post._path" class="post-link">
            <!-- Display the image -->
            <div class="image-container">
              <img
                :src="post.headerImageUrl"
                :alt="post.headerImageUrl"
                class="post-image content-image" />
            </div>
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
  font-size: var(--font-size-S);
  font-family: var(--font-family-secondary);
  margin-right: auto;
  margin-bottom: 0;
}

.post-link::after {
  display: none;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: auto;
}

.blog-item:hover .post-image {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
}

.blog-item:nth-child(4n + 1) {
  grid-column: 1 / span 4;
}

.blog-item:nth-child(4n + 2) {
  grid-column: 5 / span 4;
}

.blog-item:nth-child(4n + 3) {
  grid-column: 9 / span 4;
}

.blog-item:nth-child(4n + 4) {
  grid-column: 13 / span 4;
}

@media (max-width: 767px) {
  .image-container {
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
