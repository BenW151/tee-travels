<template>
  <div class="blog">
    <!-- Placeholder Header (visible when content is loading) -->
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-large"
    />
    
    <!-- Blog Content -->
    <ContentDoc v-slot="{ doc }">
      <article v-if="contentLoaded">
        <!-- Actual Header -->
        <Header
          :imageUrl="doc.headerImageUrl"
          :imageAlt="doc.headerImageAlt"
          :title="doc.title"
          :subtitle="doc.subtitle"
          headerClass="header-large"
        />

        <section class="contents">
          <LayoutGridContainer>
            <ListsPageIndex :labels="pageIndexLabels" />
          </LayoutGridContainer>
        </section>

        <section class="what-to-do" id="what-to-do">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whatToDoTitle }}</h3>
              <div v-html="doc.whatToDoText"></div>
            </div>
          </LayoutGridContainer>
        </section>

        <section class="where-to-stay" id="where-to-stay">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whereToStayTitle }}</h3>
              <div v-html="doc.whereToStayText"></div>
            </div>
          </LayoutGridContainer>
        </section>

        <section class="what-to-see" id="what-to-see">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whatToSeeTitle }}</h3>
              <div v-html="doc.whatToSeeText"></div>
            </div>
          </LayoutGridContainer>
        </section>

        <BlogRelatedPosts />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const contentLoaded = ref(false);

const pageIndexLabels = [
  { title: "What To Do", link: "what-to-do" },
  { title: "Where To Stay", link: "where-to-stay" },
  { title: "What To See", link: "what-to-see" },
];

onMounted(() => {
  setTimeout(() => {
    contentLoaded.value = true;
  }, 200); 
});
</script>


<style scoped>
.blog-text {
  grid-column: 5 / 13;
}

@media (max-width: 767px) {
  .blog-text {
    grid-column: 1 / 7;
  }

}
</style>

<style>
.blog .paragraph.medium {
  display: none;
}
</style>
