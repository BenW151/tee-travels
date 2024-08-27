<template>
  <div class="related-posts">
    <ItemGridItems labelText="Related Posts">
      <template #title>Related Posts</template>
      <template #body>
        <p>
          Check out these related posts for more insights and tips on similar
          topics.
        </p>
      </template>

      <ItemGridItem
        v-for="post in relatedPosts"
        :key="post._path"
        :itemUrl="post._path"
        :itemImage="post.headerImageUrl"
        :itemImageAlt="post.headerImageAlt"
        :itemLabel="post.title"
        :itemDescription="post.description"
        @click="scrollToTop" />
    </ItemGridItems>
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();
const slug = route.params.slug;

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo({ top: 0 });
  }, 300);
}

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

<style scoped></style>
