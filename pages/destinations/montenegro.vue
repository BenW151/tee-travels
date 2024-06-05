<template>
  <div class="destination">
    <Header
      imageUrl="/images/montenegro-cover.png"
      imageAlt="Modern office"
      title="Montenegro"
      subtitle="£650 | 5 Nights"
      headerClass="header-small">
    </Header>

    <section class="overview">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Overview" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Explore the Hidden Gems of Pakistan</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque and Lahore
              Fort. Venture north to the enchanting Fairy Meadows, a lush alpine
              meadow offering stunning views of Nanga Parbat, the world's
              ninth-highest mountain. Enjoy exhilarating hikes through the
              northern regions, where you can explore the awe-inspiring
              Karakoram and Himalayan mountain ranges. This trip promises a
              perfect blend of adventure, culture, and natural splendor, making
              it a once-in-a-lifetime experience.
            </p>
            <a
              class="link underline-out-icon"
              href="https://buy.stripe.com/5kAeVW6eQ7gp6Wc9AA"
              aria-label="Book trip"
              target="_blank"
              ><h4><LucideExternalLink />Book Trip</h4></a
            >
          </template>
        </TextParagraphWithTitle>
        <ListsDefaultList
          title="Key Activities"
          :items="[
            { id: 1, text: 'Hiking' },
            { id: 2, text: 'Cooking Class' },
            { id: 3, text: 'School Visit' },
            { id: 4, text: 'Horse Ride' },
          ]" />
        <ListsDefaultList
          title="Regions Visited"
          :items="[
            { id: 1, text: 'Kotor' },
            { id: 2, text: 'Tivat' },
            { id: 3, text: 'Perast' },
            { id: 4, text: 'Durmitor National Park' },
          ]" />

        <ListsDefaultList
          title="Upcoming Dates"
          :items="[
            { id: 1, text: '2nd May - 9th May 2024' },
            { id: 2, text: '12th June - 21st June 2024' },
          ]" />
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section class="itinerary-brief">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Itinerary" />
        <ListsItinerary
          :days="[
            {
              id: 1,
              shortSummary: 'XYZ hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 2,
              shortSummary: 'ABC village tour',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 3,
              shortSummary: 'Beach day',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 4,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 5,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 6,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 7,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          ]" />
        <ImageDefault
          imageUrl="/images/pakistan-map.svg"
          imageAlt="Itinerary Map"
          class="itinerary-map"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="text-left included">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Included" />
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>What's Included</template>
          <template #body>
            <ListsDefaultList
              bullets
              :items="[
                { id: 1, text: '8 Nights Accommodation' },
                { id: 2, text: 'Breakfast, Lunch and Dinner Each Day' },
                { id: 3, text: 'All Activities Mentioned' },
                { id: 4, text: 'Transfers Between Stops' },
                { id: 5, text: 'Breakfast, Lunch and Dinner Each Day' },
                { id: 6, text: 'All Activities Mentioned' },
                { id: 7, text: 'Transfers Between Stops' },
              ]" />
            <ListsDefaultList
              bullets
              title="Optional Extras"
              :items="[
                { id: 1, text: 'Private Room' },
                { id: 2, text: 'Airport Transfer' },
                { id: 3, text: 'Boat Tour' },
              ]" />
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-left" id="day1">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Detailed Itinerary" />
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>Day 1 | XYZ hike</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-right" id="day2">
      <LayoutGridContainer>
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="left" />
        <TextParagraphWithTitle subtitleTag="h4" textPosition="right">
          <template #title>Day 2 | XYZ hike</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-left" id="day3">
      <LayoutGridContainer>
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>Day 3 | XYZ hike</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-right" id="day4">
      <LayoutGridContainer>
        <ImageWithTextOverlay
          imageUrl="/images/montenegro-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="left" />
        <TextParagraphWithTitle subtitleTag="h4" textPosition="right">
          <template #title>Day 4 | XYZ hike</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="faq">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Information" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>FAQ</template>
          <template #body>
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </template>
        </TextParagraphWithTitle>
        <Accordion>
          <AccordionItem title="What's included?" index="1">
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </AccordionItem>
          <AccordionItem title="Do I need a visa?" index="2">
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </AccordionItem>
          <AccordionItem
            title="What airport do I need to fly in to/out of?"
            index="3">
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </AccordionItem>
          <AccordionItem title="Do I need travel insurance?" index="4">
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
            </p>
          </AccordionItem>
          <AccordionItem title="Will the itinerary change?" index="5">
            <p>
              Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque
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

    <section class="book">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Get Involved" />
        <a
          class="item underline-out"
          href="https://buy.stripe.com/5kAeVW6eQ7gp6Wc9AA"
          aria-label="Book Now"
          target="_blank"
          ><TextReveal tag="h2">Book Trip</TextReveal></a
        >
      </LayoutGridContainer>
    </section>

    <section class="end">
      <LayoutGridContainer>
        <TextCard
          name="Why Not Adventures"
          position="Managing Director"
          quote="Working with this team has been a game-changer for our business. The web development service provided was top-notch, with a keen attention to detail and a clear focus on our objectives. Our new website is not only visually stunning but also highly functional and user-friendly. The continuous support we receive ensures our site remains up-to-date and continues to perform excellently."
          imgSrc="/images/person.png" />
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Why Not Adventures - Montenegro",
  meta: [
    {
      name: "description",
      content: "Offering affordable tours to off the beaten track destinations",
    },
  ],
});
</script>

<style>
.container.grid {
  overflow: visible;
}

.overview .paragraph-with-title {
  grid-column: 3 / 11;
}

.overview .paragraph-with-title .item-inner {
  margin: 0;
}

.overview .image {
  grid-column: 12 / 17;
  grid-row: 1 / 3;
}

.overview .list {
  margin-top: 2vw;
}

.overview .list:nth-child(3) {
  grid-column: 3 / 6;
  grid-row-start: 2;
}

.overview .list:nth-child(4) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

.overview .list:nth-child(5) {
  grid-column: 9 / 11;
  grid-row-start: 2;
}

.itinerary {
  grid-column: 9 / 16;
}

.itinerary-brief .image {
  grid-column: 3 / 8;
  grid-row-start: 1;
}

.itinerary-map.image-default img {
  object-fit: contain;
}

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

.included .image {
  height: 65vw;
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

.destination .card {
  grid-column: 11 / 17;
}

.end a {
  grid-column: 11 / 17;
}

.book a {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
}

.book a h2 {
  font-size: 13vw;
  margin: 0;
}

a h4 {
  margin: 0;
}

@media (max-width: 767px) {
  section div.container.grid div.item {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .overview .item.list {
    grid-column: span 2;
    grid-row: auto;
  }

  .destination .card {
    grid-column: 1 / 7;
  }

  .book a {
    grid-column: 1 / 7;
  }

  .book a h2 {
    font-size: 19vw;
  }
}
</style>
