<template>
  <div>
    <Header
      imageUrl="/images/travel-blog.png"
      imageAlt="Laptop with code on desk"
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
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque and Lahore Fort.
              </p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/travel-blog.png"
            imageAlt="Fairy Meadows, Pakistan"
            overlayText="Fairy Meadows, <br /> Pakistan"
            textPosition="right" />
        </LayoutGridContainer>
      </section>

      <section class="destinations">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Destinations" />
          <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
            <template #title>Destinations</template>
            <template #body>
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture.
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

      <section class="skills text-right">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Skills" />
          <TextParagraphWithTitle subtitleTag="h3" textPosition="right">
            <template #title>Who Am I?</template>
            <template #body>
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque and Lahore Fort. Venture north to the enchanting Fairy
                Meadows, a lush alpine meadow offering stunning views of Nanga
                Parbat, the world's ninth-highest mountain. Enjoy exhilarating
                hikes through the northern regions, where you can explore the
                awe-inspiring Karakoram and Himalayan mountain ranges. This trip
                promises a perfect blend of adventure, culture, and natural
                splendor, making it a once-in-a-lifetime experience.
              </p>
            </template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/tia.png"
            imageAlt="Fairy Meadows, Pakistan"
            overlayText="Tia, <br /> Founder"
            textPosition="left" />
        </LayoutGridContainer>
      </section>

      <section class="faq">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Details" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Things To Know</template>
            <template #body>
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes.
              </p>
            </template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem title="What's included?" index="1">
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque
              </p>
            </AccordionItem>
            <AccordionItem title="Do I need a visa?" index="2">
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque
              </p>
            </AccordionItem>
            <AccordionItem
              title="What airport do I need to fly in to/out of?"
              index="3">
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque
              </p>
            </AccordionItem>
            <AccordionItem title="Do I need travel insurance?" index="4">
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque
              </p>
            </AccordionItem>
            <AccordionItem title="Will the itinerary change?" index="5">
              <p>
                Embark on an unforgettable adventure to Pakistan with our
                organized tour, showcasing the country's breathtaking natural
                beauty and vibrant culture. Begin your journey in the capital
                city of Islamabad, where modern architecture meets serene
                landscapes. Next, travel to the historical city of Lahore,
                renowned for its rich heritage, bustling bazaars, and
                magnificent Mughal architecture, including the iconic Badshahi
                Mosque
              </p>
            </AccordionItem>
            <AccordionItem title="Any other questions?" index="6">
              <p>Get in touch with us through any of the below channels</p>
              <ListsLinkList
                class="contact"
                :links="[
                  {
                    url: '/contact',
                    label: 'Contact Form',
                    description: 'GitHub',
                  },
                  {
                    url: 'https://www.linkedin.com/in/benw151/',
                    label: 'Phone',
                    description: 'LinkedIn',
                  },
                  {
                    url: 'mailto:myemail@email.com',
                    label: 'Email',
                    description: 'Email',
                  },
                ]" />
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section class="end-text">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Contact" />
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
  title: "Why Not Adventures - Home",
  meta: [{ name: "description", content: "Offering affordable tours to off the beaten track destinations" }],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
if (!isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}
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
