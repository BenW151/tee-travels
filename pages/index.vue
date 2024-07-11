<template>
  <div>
    <Header
      imageUrl="/images/pakistan/pakistan-cover.webp"
      imageAlt="TODO REPLACE ONCE IMAGE FINALISED"
      title="Why Not Adventures"
      subtitle="Get Off The Beaten Track"
      headerClass="header-small">
    </Header>

    <main>
      <section class="about text-left">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Why Choose Why Not?</template>
            <template #body>
              <p>
                At Why Not Adventures, we embrace the spirit of "why not?" - the
                attitude of seizing opportunities and diving into new
                experiences headfirst. We believe that life is too short for
                hesitation and that the best memories are made when you take a
                leap of faith. Our tours are crafted for those who seek
                adventure, exploration, and the thrill of discovering the
                unknown. With a focus on small group sizes, personalized
                service, and unique activities, we ensure that every journey is
                as bold and unforgettable as you are. Choose Why Not Adventures
                and say yes to a world of possibilities. Why not take the trip
                of a lifetime?
              </p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/pakistan/pakistan-cover.webp"
            imageAlt="Fairy Meadows, Pakistan"
            overlayText="Fairy Meadows, <br /> Pakistan"
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
                Embark on an adventure and discover the world's most captivating
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
                Hi, I'm Tia, the founder of Why Not Adventures. Traveling has
                always been my passion, and I've dedicated my life to exploring
                the world and uncovering its hidden gems. With years of
                experience in the travel industry, I created Why Not Adventures
                to share my love for adventure and inspire others to embrace the
                spirit of "why not" in their own journeys. Whether it's hiking
                through lush forests, exploring vibrant cultures, or simply
                soaking in breathtaking landscapes, I believe in making every
                trip a memorable and transformative experience. Join me on this
                incredible journey and let's discover the world together!
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
            imageUrl="/images/tia.webp"
            imageAlt="Marsur Rock, Pakistan"
            overlayText="Marsur Rock, <br /> Pakistan"
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
              title="Can I do any of your trips independently?"
              index="5">
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
            <AccordionItem title="Any other questions?" index="6">
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
