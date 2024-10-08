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

              <OtherCurrencyConversion
                :fromCurrency="destinationData.currency" />
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
                Travel planning often brings up a lot of questions, so this FAQ
                section covers common topics that apply to many destinations.
                From visa requirements and local currency to safety advice and
                cultural norms, these answers aim to help travelers prepare for
                their journey. Whether it's tips on the best time to visit,
                transportation options, or packing essentials, this guide offers
                useful information to make any trip smoother and more enjoyable.
              </p>
            </template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem
              :title="`Is ${destinationData.title} worth visiting?`"
              index="1">
              <p v-html="destinationData.faqWorthVisiting"></p>
            </AccordionItem>
            <AccordionItem
              :title="`Is ${destinationData.title} cheap?`"
              index="2">
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

      <BlogCountryPosts :country="country" labelText="Related Posts">
        <template #title>Related Posts</template>
        <template #body>
          <p>
            Explore the countries I've had the pleasure of visiting. Each
            destination has its own unique character and charm, offering a
            diverse range of experiences and stories. Click through to read
            about my adventures in these places, discover local tips, and see
            the highlights of each country I've explored. I hope my travels
            inspire your own journey to these amazing locations!
          </p>
        </template>
      </BlogCountryPosts>
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
  { title: "Blog Posts", link: "country-posts" },
];

onMounted(() => {
  setTimeout(() => {
    contentLoaded.value = true;
  }, 0);
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
.contents .container {
  padding-bottom: var(--spacing-1);
}

.page-index {
  grid-column: 1 / 17;
  margin: auto;
}

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

.country-posts-text .container {
  padding-bottom: 0;
}

@media (max-width: 767px) {
  section div.container.grid div.item,
  .end-text a {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .end-text a h2 {
    font-size: 14.5vw;
  }

  .container .image:nth-of-type(2) {
    height: 40vh;
  }

  .page-index {
    grid-column: 1 / 7;
    margin: 0;
  }
}
</style>

<style></style>
