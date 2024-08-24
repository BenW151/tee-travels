<template>
  <div class="index">
    <Header
      imageUrl="/images/no-bg-image.png"
      imageAlt="View of Rakaposhi from Karimabad"
      title="Tee Travels"
      headerClass="header-small">
    </Header>

    <main>
      <section class="lead-text">
        <LayoutGridContainer>
          <TextColorOnScroll tag="h3" class="item">
            Get ready to explore the world like never before with Tee Travels.
            Dive into our travel stories and uncover the essence of each
            destination through unique experiences and insider tips.
          </TextColorOnScroll>
        </LayoutGridContainer>
      </section>

      <section class="about text-left">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Start Planning Your Trip </template>
            <template #body>
              <p>
                Ready to turn your travel dreams into reality? Whether you're
                seeking thrilling adventures, serene escapes, or cultural
                immersions, we're here to help you every step of the way.
                Explore our curated guides, travel tips, and destination
                highlights to begin crafting your perfect itinerary. From
                finding the best local experiences to navigating must-see
                landmarks, Tee Travels provides all the inspiration and
                information you need to plan an unforgettable journey. Start
                your adventure today and let the world be your playground!
              </p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/denmark-cover.png"
            imageAlt="Copenhagen, Denmark"
            overlayText="Copenhagen, <br /> Denmark"
            textPosition="right" />
        </LayoutGridContainer>
      </section>

      <BlogRegions labelText="Destinations">
        <template #title>Destinations</template>
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
      </BlogRegions>

      <section class="profile text-right">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Profile" />
          <TextParagraphWithTitle subtitleTag="h3" textPosition="right">
            <template #title>Who Am I?</template>
            <template #body>
              <p>
                Hi, I'm Tia, your guide to the world's most exciting
                destinations. With a passion for travel and a love for
                discovering hidden gems, I've dedicated myself to sharing my
                journeys with you. From navigating bustling streets to relaxing
                in serene spots, my experiences offer a personal touch to each
                destination I visit. Join me as I explore new places, embrace
                local cultures, and uncover the stories that make each adventure
                unique. Let's travel the world together!
              </p>
              <a
                href="https://instagram.com/teetravels_"
                aria-label="Instagram"
                class="underline-out-icon link"
                target="_blank"
                ><LucideExternalLink />View Instagram</a
              >
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/tia-passu.webp"
            imageAlt="Passu Cones, Pakistan"
            overlayText="Passu Cones, <br /> Pakistan"
            textPosition="left" />
        </LayoutGridContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Tee Travels",
  meta: [
    {
      name: "description",
      content:
        "Tee Travels offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk",
    },
  ],
});

const { windowWidth, isMobile } = useWindowWidth();
</script>

<style scoped>
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

.destinations .paragraph-with-title {
  grid-column: 1 / 9;
  grid-row: 2;
}

.faq .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

.faq .accordion {
  grid-column: 6 / 17;
  grid-row: 2;
  /*height: 40vw;*/
}

.end-text a {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
}

.end-text a h2 {
  font-size: var(--font-size-XXL);
  margin: 0;
}

.destinations .container {
  padding-bottom: 0;
}

.carousel .container {
  padding-top: 0;
}

.lead-text .color-reveal {
  font-size: var(--font-size-M);
}

.lead-text .item,
.lead-text p {
  grid-column: 1 / 17;
}

@media (max-width: 767px) {
  .lead-text .item,
  .lead-text p {
    grid-column: 1 / 7;
    grid-row: auto;
  }

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
}
</style>
