<template>
  <div class="destination">
    <Header
      imageUrl="/images/pakistan/pakistan-cover.png"
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
          imageUrl="/images/pakistan/pakistan-cover.png"
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
                'Arrive in Islamabad, check into your hotel, and explore nearby attractions if time permits.',
            },
            {
              id: 2,
              shortSummary: 'Islamabad to Jaglot',
              detailSummary:
                'Drive from Islamabad to Jaglot, enjoying scenic views of lush valleys and rivers along the way.',
            },
            {
              id: 3,
              shortSummary: 'Jaglot to Fairy Meadows',
              detailSummary:
                'Travel from Jaglot to Fairy Meadows, with a stop for lunch and a rugged jeep ride to your destination.',
            },
            {
              id: 4,
              shortSummary: 'Beyal Camp and Nanga Parbat',
              detailSummary:
                'Hike to Beyal Camp for breathtaking views of Nanga Parbat and explore the pristine natural beauty.',
            },
            {
              id: 5,
              shortSummary: 'Fairy Meadows to Skardu',
              detailSummary:
                'Depart from Fairy Meadows and drive to Skardu Valley, checking into your hotel upon arrival.',
            },
            {
              id: 6,
              shortSummary: 'Masoor Rock Hike',
              detailSummary:
                'Hike to Masoor Rock for panoramic views and explore the Sarfaranga Desert with a camel ride or stroll.',
            },
            {
              id: 7,
              shortSummary: 'Eagle’s Nest',
              detailSummary:
                'Drive to Eagle’s Nest for stunning mountain views, a yak BBQ, and a local drink called moonshine.',
            },
            {
              id: 8,
              shortSummary: 'Rakaposhi Hapakun',
              detailSummary:
                'Go shopping in Karimabad, then drive to Rakaposhi Minapin and hike to Hapakun for beautiful mountain views.',
            },
            {
              id: 9,
              shortSummary: 'Trek to Basecamp and Gulkin',
              detailSummary:
                'Trek to Rakaposhi base camp for stunning views, then drive to Gulkin and experience local hospitality.',
            },
            {
              id: 10,
              shortSummary: 'Gulkin and Attabad Lake',
              detailSummary:
                'Hike for a view of Attabad Lake, cross the Passu Bridge, and visit Passu Cones mountains.',
            },
            {
              id: 11,
              shortSummary: 'Return to Islamabad',
              detailSummary:
                'Drive back to Islamabad, a 16-hour journey, and prepare for your departure flight the next morning.',
            },
          ]" />

        <ImageDefault
          imageUrl="/images/pakistan/pakistan-map.png"
          imageAlt="Itinerary Map"
          class="itinerary-map"
          rellaxPercentage="0"
          rellaxSpeed="-3" />
      </LayoutGridContainer>
    </section>

    <section id="showreel">
      <ImageStrip
        src="/videos/montenegro-reel.mp4"
        poster="/images/pakistan/pakistan-cover.png"
        alt="Montenegro Showreel" />
    </section>

    <section class="text-left included" id="included">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Included" />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-cover.png"
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
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <ItineraryDay
      dayId="day1"
      imageUrl="/images/pakistan/pakistan-islamabad-mosque.png"
      imageAlt="Faisal Mosque, Islamabad"
      overlayText="Faisal Mosque, <br /> Islamabad"
      textPosition="right"
      title="Day 1 | Arrival in Islamabad">
      <template #body>
        <p>
          Arrive in Islamabad and check into your hotel. Spend the day resting
          and acclimatizing to the local time zone. Islamabad, the capital city
          of Pakistan, offers a blend of modern and traditional culture.
        </p>
        <p>
          If time permits, explore some nearby attractions such as Faisal
          Mosque, one of the largest mosques in the world, or Lok Virsa Museum,
          which showcases Pakistan's rich cultural heritage.
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day2"
      imageUrl="/images/pakistan/pakistan-cover.png"
      imageAlt="Skardu, Pakistan"
      overlayText="Skardu, <br /> Pakistan"
      textPosition="left"
      title="Day 2 | Islamabad to Jaglot">
      <template #body>
        <p>
          Depart from Islamabad early in the morning and drive to Jaglot. Enjoy
          scenic views along the way, including lush valleys and rivers, as you
          travel through the picturesque landscape of northern Pakistan.
        </p>
        <p>
          Arrive in Jaglot and check into your hotel. Spend the evening
          exploring the town and relaxing by the river. Jaglot serves as a
          gateway to some of the most stunning regions of Gilgit-Baltistan.
        </p>
        <p>Accommodation in Jaglot.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day3"
      imageUrl="/images/pakistan/pakistan-nanga-parbat.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="right"
      title="Day 3 | Jaglot to Fairy Meadows">
      <template #body>
        <p>
          Depart from Jaglot and drive towards Raikot. Stop in Raikot for lunch
          and to stretch your legs, enjoying the local cuisine and hospitality.
        </p>
        <p>
          Continue the journey to Raikot Bridge, where you'll transfer to local
          jeeps for the rugged ride to Fairy Meadows, a stunningly beautiful
          grassland at the base of Nanga Parbat.
        </p>
        <p>
          Arrive in Fairy Meadows and check into your accommodation. Enjoy the
          evening at leisure, soaking in the stunning views of Nanga Parbat, the
          world's ninth highest mountain.
        </p>
        <p>Accommodation in Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day4"
      imageUrl="/images/pakistan/pakistan-nanga-parbat-camp.png"
      imageAlt="Fairy Meadows, Pakistan"
      overlayText="Fairy Meadows, <br /> Pakistan"
      textPosition="left"
      title="Day 4 | Beyal Camp and Nanga Parbat Viewpoint">
      <template #body>
        <p>
          Wake up early and hike to Beyal Camp for breathtaking views of Nanga
          Parbat. This hike offers stunning panoramic views and a chance to
          experience the pristine natural beauty of the region.
        </p>
        <p>
          Spend the day exploring the area around Beyal Camp, enjoying the
          tranquility and the stunning mountain vistas. Capture some memorable
          photographs of the landscape and wildlife.
        </p>
        <p>
          Return to Fairy Meadows in the evening and relax, sharing stories
          around a campfire.
        </p>
        <p>Accommodation in Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day5"
      imageUrl="/images/pakistan/pakistan-skardu.png"
      imageAlt="Skardu, Pakistan"
      overlayText="Skardu, <br /> Pakistan"
      textPosition="right"
      title="Day 5 | Fairy Meadows to Skardu">
      <template #body>
        <p>
          Depart from Fairy Meadows and drive to Skardu Valley, a journey that
          takes you through some of the most dramatic and breathtaking
          landscapes in Pakistan.
        </p>
        <p>
          Arrive in Skardu and check into your hotel. Skardu is known for its
          stunning natural beauty, including turquoise lakes and towering peaks.
          Take some time to relax and enjoy the serene environment.
        </p>
        <p>Accommodation in Skardu.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day6"
      imageUrl="/images/pakistan/pakistan-sarfaranga-desert.png"
      imageAlt="Sarfaranga Desert, Pakistan"
      overlayText="Sarfaranga Desert, <br /> Pakistan"
      textPosition="left"
      title="Day 6 | Masoor Rock Hike and Sarfaranga Desert Exploration">
      <template #body>
        <p>
          After breakfast, embark on a hike to Masoor Rock, known for its unique
          geological formations and panoramic views. The ascent provides a
          rewarding experience with breathtaking vistas from the top.
        </p>
        <p>
          Descend back to the base and return to Skardu for lunch. In the
          afternoon, drive to Sarfaranga Desert, an otherworldly landscape known
          for its white sands and stunning contrasts against the surrounding
          mountains.
        </p>
        <p>Return to Skardu in the evening and relax.</p>
        <p>Accommodation in Skardu.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day7"
      imageUrl="/images/pakistan/pakistan-eagles-nest.png"
      imageAlt="Eagle’s Nest, Pakistan"
      overlayText="Eagle’s Nest, <br /> Pakistan"
      textPosition="right"
      title="Day 7 | Eagle’s Nest">
      <template #body>
        <p>
          Drive back from Skardu straight to Eagle’s Nest, where you’ll stay in
          a hotel. Eagle’s Nest offers panoramic views of seven mountains, each
          towering above 6,500 meters, providing a breathtaking backdrop.
        </p>
        <p>
          At Eagle’s Nest, enjoy a yak BBQ and a local drink called moonshine,
          experiencing the unique flavors and traditions of the region.
        </p>
        <p>Accommodation in Eagle’s Nest.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day8"
      imageUrl="/images/pakistan/pakistan-rakaposhi.png"
      imageAlt="Rakaposhi, Pakistan"
      overlayText="Rakaposhi, <br /> Pakistan"
      textPosition="left"
      title="Day 8 | Rakaposhi Hapakun">
      <template #body>
        <p>
          Have breakfast and go to Karimabad for some shopping, famous for its
          gemstones and handicrafts. Take your time to explore the local markets
          and find unique souvenirs.
        </p>
        <p>
          Depart from Karimabad after shopping and drive to Rakaposhi Minapin.
          Hike to Hapakun for stunning views of Rakaposhi, one of the most
          beautiful and accessible peaks in the Karakoram Range.
        </p>
        <p>
          Enjoy stargazing from the tents at night, a magical experience under
          the clear mountain skies.
        </p>
        <p>Accommodation in Hapakun.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day9"
      imageUrl="/images/pakistan/pakistan-rakaposhi-2.png"
      imageAlt="Gulkin, Pakistan"
      overlayText="Gulkin, <br /> Pakistan"
      textPosition="right"
      title="Day 9 | Trek to Basecamp and Gulkin">
      <template #body>
        <p>
          Trek to the base camp of Rakaposhi for stunning views of two massive
          mountains and their glaciers. The trek is challenging but offers
          unparalleled beauty and adventure.
        </p>
        <p>
          Trek down from the base camp and drive to Gulkin. Experience the
          hospitality of a local family in Gulkin village and learn about their
          way of life, participating in traditional meals and cultural
          activities.
        </p>
        <p>Accommodation with a local family in Gulkin.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day10"
      imageUrl="/images/pakistan/pakistan-attabad-lake.png"
      imageAlt="Attabad Lake, Pakistan"
      overlayText="Attabad Lake, <br /> Pakistan"
      textPosition="left"
      title="Day 10 | Gulkin and Attabad Lake">
      <template #body>
        <p>
          Go on the Baskochi hike for a stunning view of the famous Attabad
          Lake, a beautiful turquoise lake formed after a landslide in 2010. The
          hike offers incredible views and photo opportunities.
        </p>
        <p>
          Visit the Passu Bridge to cross the river, a thrilling experience many
          say is the most dangerous walking bridge in the world. While safe, it
          offers an exciting adventure for thrill-seekers.
        </p>
        <p>
          Visit the Passu Cones mountains and take an iconic picture with the
          group on top of the bus, capturing the unique landscape and memories.
        </p>
        <p>Accommodation in Gulkin.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day11"
      imageUrl="/images/pakistan/pakistan-lahore.png"
      imageAlt="Islamabad, Pakistan"
      overlayText="Islamabad, <br /> Pakistan"
      textPosition="right"
      title="Day 11 | Return to Islamabad">
      <template #body>
        <p>
          Depart from Gulkin early in the morning and drive back to Islamabad,
          which is a 16-hour journey. Enjoy the scenic drive through the
          mountainous terrain and reflect on your adventures.
        </p>
        <p>
          Arrive in Islamabad and stay overnight, ready for your departure
          flight in the morning. Say goodbye to Pakistan and cherish the
          memories of your unforgettable journey.
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <section class="faq" id="faq">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Information" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>FAQ</template>
          <template #body>
            <p>
              Have questions? We've got answers! Check out our FAQ section for
              quick and helpful information about our tours, booking process,
              and more. If you can't find what you're looking for, feel free to
              reach out to us directly.
            </p>
          </template>
        </TextParagraphWithTitle>
        <Accordion>
          <AccordionItem title="What's included?" index="1">
            <p>
              Our tour includes accommodation, transportation within Pakistan,
              guided tours, and most meals. You'll also enjoy unique experiences
              such as hikes, local cultural activities, and visits to key
              attractions.
            </p>
          </AccordionItem>
          <AccordionItem title="Do I need a visa?" index="2">
            <p>
              Yes, most travelers will need a visa to enter Pakistan. It's
              essential to check the specific visa requirements for your
              nationality and apply in advance. Ensure your passport is valid
              for at least six months beyond your planned departure date.
            </p>
          </AccordionItem>
          <AccordionItem
            title="What airport do I need to fly in to/out of?"
            index="3">
            <p>
              You will fly into and out of Islamabad International Airport
              (ISB). This airport serves as the main gateway for our tour,
              providing convenient access to all starting and ending points of
              our itinerary.
            </p>
          </AccordionItem>
          <AccordionItem title="Do I need travel insurance?" index="4">
            <p>
              Yes, travel insurance is mandatory for our tour. It should cover
              medical expenses, trip cancellations, and any unforeseen events.
              We recommend purchasing comprehensive travel insurance to ensure a
              safe and worry-free journey.
            </p>
          </AccordionItem>
          <AccordionItem title="Will the itinerary change?" index="5">
            <p>
              While we strive to stick to the planned itinerary, there may be
              occasions where changes are necessary due to weather conditions,
              road closures, or other unforeseen circumstances. We will do our
              best to keep you informed and provide suitable alternatives.
            </p>
          </AccordionItem>
          <AccordionItem title="Any other questions?" index="6">
            <ListsLinkList
              class="contact"
              title="Get in touch"
              :links="[
                {
                  url: '/contact',
                  label: 'Fill out the contact form',
                  description: 'Contact Page',
                },
                {
                  url: 'mailto:myemail@email.com',
                  label: 'Email us',
                  description: 'Email',
                },
                {
                  url: 'https://instagram.com/whynotadventures_',
                  label: 'Message us on Instagram',
                  description: 'Instagram',
                },
                {
                  url: 'https://instagram.com/whynotadventures_',
                  label: 'Message us on WhatsApp',
                  description: 'WhatsApp',
                },
              ]" />
          </AccordionItem>
        </Accordion>
      </LayoutGridContainer>
    </section>

    <section class="text-left guide" id="guide">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Guide" />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-guide.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Meet Your Local Guide</template>
          <template #body>
            <p class="bold">Name: Ahmed Khan</p>
            <p class="bold">From: Hunza Valley, Pakistan</p>
            <p>
              Born and raised in the picturesque Hunza Valley, Ahmed has a
              profound connection to the rugged beauty of the Pakistani
              mountains. With over a decade of experience as a professional
              mountain guide, Ahmed's extensive knowledge of the region's
              trails, history, and culture makes him an invaluable companion for
              your adventure. His passion for the great outdoors is matched only
              by his dedication to ensuring every traveler experiences the
              awe-inspiring landscapes safely and memorably. Fluent in English,
              Urdu, and the local Burushaski language, Ahmed's friendly and
              approachable demeanor makes him a favorite among tourists. When
              he's not guiding expeditions, Ahmed enjoys photography, capturing
              the stunning vistas of his homeland, and sharing stories of his
              adventures over a warm cup of chai.
            </p>
          </template>
        </TextParagraphWithTitle>
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
          quote="Pakistan is a land of stunning contrasts and hidden treasures. From the bustling streets of Lahore, rich with history and culture, to the serene, breathtaking landscapes of the northern regions, this tour offers an unforgettable experience. Every corner of Pakistan tells a story, and I’ve personally curated this trip to ensure you get the most authentic and enriching experience possible. Join us on this adventure, and discover the warmth and hospitality of Pakistan’s people, the vibrant markets, and the awe-inspiring natural beauty. It’s a journey you’ll cherish forever!"
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
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/destinations/pakistan",
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
  height: 50vw;
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

.guide .image {
  height: 50vw;
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
