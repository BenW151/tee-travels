<template>
  <div class="index">
    <Header
      imageUrl="/images/no-bg-image.png"
      imageAlt="View of Rakaposhi from Karimabad"
      title="Tee Travels"
      subtitle="Get Off The Beaten Track."
      headerClass="header-small">
    </Header>

    <main>
      <section class="lead-text">
        <LayoutGridContainer>
          <TextColorOnScroll tag="h3" class="item">
            Join Us on a Journey to Explore the Globe's Most Captivating
            Corners, Uncovering Unseen Beauty and Unique Experiences.
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
                After years of travelling, it became clear to me that my best
                adventures came from embracing the spirit of "why not?". I have
                always had a passion for exploring less travelled destinations
                and wanted to find a way to bring like minded spontaneous,
                adventure loving travellers together. Most importantly I wanted
                to make sure these trips were affordable for everyone. I was fed
                up of seeing overpriced trips so I have curated all these trips
                from scratch from my first hand experience of travelling to
                ensure the best value and itinerary.
              </p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/santorini.png"
            imageAlt="Santorini, Greece"
            overlayText="Santorini, <br /> Greece"
            textPosition="right" />
        </LayoutGridContainer>
      </section>

      <section class="destinations">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Trips" />
          <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
            <template #title>Destinations</template>
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

      <BlogDestinationItems />

      <section class="profile text-right">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Profile" />
          <TextParagraphWithTitle subtitleTag="h3" textPosition="right">
            <template #title>Who Am I?</template>
            <template #body>
              <p>
                Hi, I'm Tia, the founder of Why Not Adventures. Travelling has
                always been my passion and I've dedicated my life to exploring
                the world. I love adventure, being in nature, exploring off the
                beaten track and learning about local life in different
                countries. After years of experience travelling, I decided to
                create Why Not Adventures, to share my love for my favourite
                travel destinations and bring together like-minded travellers
                from around the world.
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
  title: "Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Why Not Adventures offers affordable tours to off the beaten track destinations, delivering expertly crafted itineraries and authentic adventures.",
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
  grid-column: 2 / 16;
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
