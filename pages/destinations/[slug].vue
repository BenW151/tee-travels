<template>
  <div class="blog">
    <!-- Header Placeholder -->
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-small" />

    <article v-if="contentLoaded">
      <!-- Actual Header -->
      <Header
        :imageUrl="destinationData.headerImageUrl"
        :imageAlt="destinationData.headerImageAlt"
        :title="destinationData.title"
        :subtitle="destinationData.subtitle"
        headerClass="header-small" />

      <section class="contents">
        <LayoutGridContainer>
          <ListsPageIndex :labels="pageIndexLabels" />
        </LayoutGridContainer>
      </section>

      <section class="spending text-left" id="spending">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Spending" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Spending</template>
            <template #body>
              <p v-html="destinationData.spending"></p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            :imageUrl="destinationData.spendingImageUrl"
            :imageAlt="destinationData.spendingImageAlt"
            :overlayText="destinationData.spendingImageAlt"
            textPosition="right" />
        </LayoutGridContainer>
      </section>

      <section class="getting-around text-right" id="getting-around">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Getting Around" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Getting Around</template>
            <template #body>
              <p v-html="destinationData.gettingAround"></p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            :imageUrl="destinationData.gettingAroundImageUrl"
            :imageAlt="destinationData.gettingAroundImageAlt"
            :overlayText="destinationData.gettingAroundImageAlt"
            textPosition="left" />
        </LayoutGridContainer>
      </section>

      <section class="things-to-do text-left" id="things-to-do">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Things To Do" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Things To Do</template>
            <template #body>
              <p v-html="destinationData.thingsToDo"></p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            :imageUrl="destinationData.thingsToDoImageUrl"
            :imageAlt="destinationData.thingsToDoImageAlt"
            :overlayText="destinationData.thingsToDoImageAlt"
            textPosition="right" />
        </LayoutGridContainer>
      </section>

      <section class="where-to-stay text-right" id="where-to-stay">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Where To Stay" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Where To Stay</template>
            <template #body>
              <p v-html="destinationData.whereToStay"></p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            :imageUrl="destinationData.whereToStayImageUrl"
            :imageAlt="destinationData.whereToStayImageAlt"
            :overlayText="destinationData.whereToStayImageAlt"
            textPosition="left" />
        </LayoutGridContainer>
      </section>

      <section class="faq" id="faq">
        <LayoutGridContainer>
          <TextSectionLabel labelText="FAQ" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>FAQ</template>
            <template #body>
              <p>
                I provide a full spectrum of web development services, including
                custom website design, responsive, accessible development,
                optimised SEO, and ongoing maintenance, ensuring a seamless and
                engaging user experience across all devices.
              </p>
            </template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem title="Is Country worth visiting?" index="1">
              <p v-html="destinationData.faqWorthVisiting"></p>
            </AccordionItem>
            <AccordionItem title="Is Country cheap?" index="2">
              <p v-html="destinationData.faqCheap"></p>
            </AccordionItem>
            <AccordionItem title="Can you drink tap water?" index="3">
              <p v-html="destinationData.faqWater"></p>
            </AccordionItem>
            <AccordionItem title="Do you need a visa?" index="4">
              <p v-html="destinationData.faqVisa"></p>
            </AccordionItem>
            <AccordionItem title="Do you need insurance?" index="5">
              <p v-html="destinationData.faqInsurance"></p>
            </AccordionItem>
            <AccordionItem title="Any safety tips?" index="6">
              <p v-html="destinationData.faqSafety"></p>
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section class="blog-posts text-left" id="blog-posts">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Blog" />
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
      <BlogCountryPosts :country="country" />
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useAsyncData } from "nuxt/app";

const route = useRoute();
const country = route.params.slug;
const contentLoaded = ref(false);

const pageIndexLabels = [
  { title: "Spending", link: "spending" },
  { title: "Getting Around", link: "getting-around" },
  { title: "Things To Do", link: "things-to-do" },
  { title: "Where To Stay", link: "where-to-stay" },
  { title: "FAQ", link: "faq" },
  { title: "Blog Posts", link: "blog" },
];

onMounted(() => {
  setTimeout(() => {
    contentLoaded.value = true;
  }, 300);
});

// Fetch the destination-specific data
const { data: destinationData } = await useAsyncData(
  `destinationData-${country}`,
  async () => {
    const content = await queryContent("destinations")
      .where({ country: country })
      .findOne();

    return content;
  }
);
</script>

<style>
.blog .paragraph.medium {
  display: none;
}

.faq .paragraph-with-title:nth-of-type(1) {
  grid-column: 1 / 9;
  grid-row: 2;
}

.faq .accordion {
  grid-column: 10 / 17;
  grid-row: 2;
  /*height: 40vw;*/
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

<style>
.blog-posts .container {
  padding-bottom: 0;
}
</style>
