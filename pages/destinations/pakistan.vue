<template>
  <div class="destination">
    <Header
      imageUrl="/images/pakistan-cover.png"
      imageAlt="Modern office"
      title="Pakistan"
      subtitle="Hiking in the Hunza Valley + Skardu"
      description="£950 | 7 Nights"
      headerClass="header-small"
      :pageIndexLabels="[
        { title: 'Overview', link: 'overview' },
        { title: 'Included', link: 'included' },
        { title: 'Itinerary', link: 'itinerary-detailed' },
        { title: 'FAQ', link: 'faq' },
        { title: 'Book', link: 'book' },
      ]">
    </Header>

    <section class="overview" id="overview">
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
            { id: 1, text: 'Islamabad' },
            { id: 2, text: 'Lahore' },
            { id: 3, text: 'Fairy Meadows' },
            { id: 4, text: 'Nanga Parbat' },
          ]" />

        <ListsDefaultList
          title="Upcoming Dates"
          :items="[
            { id: 1, text: '2nd May - 9th May 2024' },
            { id: 2, text: '12th June - 21st June 2024' },
          ]" />
        <ImageWithTextOverlay
          imageUrl="/images/travel-blog.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section class="itinerary-brief" id="itinerary-brief">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Itinerary" />
        <ListsItinerary
          :days="[
            {
              id: 1,
              shortSummary: 'Arrival in Islamabad',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 2,
              shortSummary: 'Islamabad to jaglot',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 3,
              shortSummary: 'jaglot to Fairy Meadows ',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 4,
              shortSummary: 'Beyal Camp and Nanga Parbat',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 5,
              shortSummary: 'Fairy Meadows to skardu',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 6,
              shortSummary: 'Overnight stay in skardu',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 7,
              shortSummary: 'Egalnest',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 8,
              shortSummary: 'Egalnest ',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 9,
              shortSummary: 'Rakaposhi hapakun',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 10,
              shortSummary: 'Treak to Basecamp and gulkin',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 11,
              shortSummary: 'Gulkin and attabd lake',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              id: 12,
              shortSummary: 'straight to Islamabad',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          ]" />
        <ImageDefault
          imageUrl="/images/pakistan-map.png"
          imageAlt="Itinerary Map"
          class="itinerary-map"
          rellaxPercentage="0"
          rellaxSpeed="-5" />
      </LayoutGridContainer>
    </section>

    <section id="showreel">
      <ImageStrip
        src="/videos/montenegro-reel.mp4"
        poster="/images/pakistan-cover.png"
        alt="Montenegro Showreel" />
    </section>

    <section class="text-left included" id="included">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Included" />
        <ImageWithTextOverlay
          imageUrl="/images/travel-blog.png"
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

    <ItineraryDay
      dayId="day1"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 1 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 1</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day2"
      imageUrl="/images/travel-blog.png"
      imageAlt="Skardu, Pakistan"
      overlayText="Skardu, <br /> Pakistan"
      textPosition="left"
      title="Day 2 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 2</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day3"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 3 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 3</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day4"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 4 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day5"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 5 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day6"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 6 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day7"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 7 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day8"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 8 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day9"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 9 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day10"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 10 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day11"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 11 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day12"
      imageUrl="/images/travel-blog.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 12 | XYZ hike">
      <template #body>
        <p>
          Embark on an unforgettable adventure to Pakistan with our organized
          tour, showcasing the country's breathtaking natural beauty and vibrant
          culture. Begin your journey in the capital city of Islamabad, where
          modern architecture meets serene landscapes.
        </p>
        <p>
          Next, travel to the historical city of Lahore, renowned for its rich
          heritage, bustling bazaars, and magnificent Mughal architecture,
          including the iconic Badshahi Mosque.
        </p>
        <a href="https://example.com">Learn more about Day 4</a>
      </template>
    </ItineraryDay>

    <section class="faq" id="faq">
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
            <ListsLinkList
              class="contact"
              title="Get in touch"
              :links="[
                {
                  url: '/contact',
                  label: 'Contact Form',
                  description: 'Contact Page',
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

    <section class="end-text" id="book">
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
        <TextSectionLabel labelText="Testimonials" />
        <TextCard
          name="Tia Thomas"
          position="Trip Leader"
          quote="Embark on an unforgettable adventure to Pakistan with our
              organized tour, showcasing the country's breathtaking natural
              beauty and vibrant culture. Begin your journey in the capital city
              of Islamabad, where modern architecture meets serene landscapes.
              Next, travel to the historical city of Lahore, renowned for its
              rich heritage, bustling bazaars, and magnificent Mughal
              architecture, including the iconic Badshahi Mosque."
          imgSrc="/images/person.png" />
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Why Not Adventures - Pakistan",
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
  height: auto;
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
  grid-column: 6 / 12;
}

.end-text a {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
}

.end-text a h2 {
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

  .overview .image {
    height: 80vw;
  }

  .destination .card {
    grid-column: 1 / 7;
  }

  .end-text a {
    grid-column: 1 / 7;
  }

  .end-text a h2 {
    font-size: 19vw;
  }
}
</style>
