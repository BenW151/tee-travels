<template>
  <div>
    <Header
      imageUrl="/images/pakistan/pakistan-cover.webp"
      imageAlt="View of Rakaposhi from Karimabad"
      title="Tee Travels"
      subtitle="Get Off The Beaten Track"
      headerClass="header-small">
    </Header>

    <main>
      <section class="about text-left">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title
              >Why Choose<br />
              Why Not?</template
            >
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
            imageUrl="/images/pakistan/pakistan-attabad-lake.webp"
            imageAlt="Attabad Lake, Pakistan"
            overlayText="Attabad Lake, <br /> Pakistan"
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

      <section class="carousel">
        <div class="container">
          <CarouselsDestinations />
        </div>
      </section>

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

      <section class="faq">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Information" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Things To Know</template>
            <template #body>
              <p>
                Have questions? We've got answers! Check out our FAQ section for
                quick and helpful information about our tours, booking process,
                and more. If you can't find what you're looking for, feel free
                to reach out to us directly.
              </p>
            </template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem
              title="Are the tours suitable for all ages?"
              index="1">
              <p>
                Our tours are designed to accommodate a wide range of ages.
                However, all trips are for individuals 18 and over, and some
                activities may have specific age ranges. Please check the
                specific tour details for more information.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Do I need to organize anything myself?"
              index="2">
              <p>
                Most of the planning is taken care of for you. We handle
                accommodations, meals, and activities. You may need to organize
                your travel to the starting point of the tour and any personal
                items you wish to bring.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Can I join a tour as a solo traveler?"
              index="3">
              <p>
                Absolutely! Many of our guests travel solo and find our tours to
                be a great way to meet new people and make lasting friendships.
              </p>
            </AccordionItem>
            <AccordionItem
              title="What is the group size for the tours?"
              index="4">
              <p>
                Group sizes vary by tour, but we aim to keep them small to
                ensure a more personalized experience. Typically, group sizes
                range from 10 to 16 people.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Can you cater for dietary requirements?"
              index="5">
              <p>
                Yes! I am vegan myself and am aware of how difficult it can be
                finding food which fits your dietary needs. We will absolutely
                strive to ensure that any requirements are met.
              </p>
            </AccordionItem>
            <AccordionItem
              title="Can I do any of your trips independently?"
              index="6">
              <p>
                Absolutely! Yes, you can embark on our trips independently. We
                offer bespoke tours using our trusted guides. Simply get in
                touch via the
                <NuxtLink
                  to="/contact"
                  class="underline-out"
                  aria-label="Contact Page"
                  >contact page</NuxtLink
                >.
              </p>
            </AccordionItem>
            <AccordionItem title="Any other questions?" index="7">
              <p>
                Get in touch with us via the
                <NuxtLink
                  to="/contact"
                  class="underline-out"
                  aria-label="Contact Page"
                  >contact page</NuxtLink
                >.
              </p>
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section class="end-text">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Trips" />
          <NuxtLink
            class="item underline-out"
            to="/destinations"
            aria-label="destinations Page"
            ><TextReveal tag="h2">Destinations</TextReveal></NuxtLink
          >
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

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
/*if (process.env.NODE_ENV === 'development' && !isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}*/
</script>

<style scoped>
.text-left .paragraph-with-title {
  grid-column: 3 / 11;
  grid-row-start: 1;
}

.text-left .image {
  grid-column: 9 / 16;
  grid-row-start: 1;
  height: 40vw;
}

.text-right .paragraph-with-title {
  grid-column: 9 / 16;
  grid-row-start: 1;
}

.text-right .image {
  grid-column: 3 / 11;
  grid-row-start: 1;
  height: 40vw;
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
}
</style>
