<template>
  <div>
    <section class="related-posts">
      <LayoutGridContainer v-if="relatedPosts && relatedPosts.length">
        <h3>Related Posts</h3>
        <div v-for="post in relatedPosts" :key="post._path" class="blog-item">
          <NuxtLink :to="post._path" class="post-link">
            <!-- Display the image -->
            <img
              :src="post.headerImageUrl"
              :alt="post.headerImageAlt"
              class="post-image content-image" />
            <!-- Display the title -->
            <NuxtLink :to="post._path" class="post-title">{{
              post.title
            }}</NuxtLink>
            <p>{{ post.description }}</p>
          </NuxtLink>
        </div>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();
const slug = route.params.slug;

const { data: currentPost } = await useAsyncData("currentPost", async () => {
  const post = await queryContent("blog")
    .where({ _path: `/blog/${slug}` })
    .findOne();
  return post;
});

const { data: relatedPosts } = await useAsyncData("relatedPosts", async () => {
  if (!currentPost.value || !currentPost.value.tag) return [];

  const content = await queryContent("blog").find();

  // Filter posts by the current post's tag
  const filteredContent = content.filter(
    (post) =>
      post.tag &&
      post.tag === currentPost.value.tag &&
      post._path !== currentPost.value._path
  );

  // Return the top 4 posts with the matched tag
  return filteredContent.slice(0, 4);
});
</script>

<style scoped>
.blog-text {
  grid-column: 5 / 13;
}

.related-posts h3 {
  grid-column: 5 / 16;
  grid-row: 1;
}

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
  height: 20vw;
  object-fit: cover;
}

.blog-item:nth-child(2) {
  grid-column: 1 / 5;
  grid-row: 2;
}

.blog-item:nth-child(3) {
  grid-column: 5 / 9;
  grid-row: 2;
}

.blog-item:nth-child(4) {
  grid-column: 9 / 13;
  grid-row: 2;
}

.blog-item:nth-child(5) {
  grid-column: 13 / 17;
  grid-row: 2;
}

@media (max-width: 767px) {
  .blog-item:nth-child(n),
  .related-posts h3 {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .post-image {
    height: auto;
  }
}
</style>
