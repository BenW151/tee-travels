<template>
  <div class="destination">
    <Header
      imageUrl="/images/pakistan/pakistan-cover.png"
      imageAlt="Modern office"
      title="Pakistan"
      subtitle="Hiking in the Hunza Valley"
      description="£985 | 10 Nights"
      headerClass="header-small"
      :pageIndexLabels="[
        { title: 'Overview', link: 'overview' },
        { title: 'Itinerary', link: 'itinerary-detailed' },
        { title: 'Inclusions', link: 'included' },
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
              of Islamabad, exploring the iconic Faisal Mosque and local
              attractions. Travel north to Jaglot and then to the enchanting
              Fairy Meadows, where you will enjoy stunning views of Nanga
              Parbat, the world's ninth-highest mountain. Experience
              exhilarating off-road jeep rides, hike to serene mountain huts,
              and camp under the stars. Continue to Karimabad, visiting the
              historic Baltit Fort and exploring the vibrant local markets. Trek
              to Rakaposhi base camp, enjoy scenic boat trips on Attabad Lake,
              and hike to the Passu Cones viewpoint. This trip promises a
              perfect blend of adventure, culture, and natural splendor, making
              it a once-in-a-lifetime experience.
            </p>
            <!--<a
              class="link underline-out-icon"
              href="https://book.stripe.com/bIYdU90Dlcw7aeQeUU"
              aria-label="Book trip"
              target="_blank"
              ><h4><LucideExternalLink />Book Trip</h4></a
            >-->
          </template>
        </TextParagraphWithTitle>
        <ListsDefaultList
          title="Key Activities"
          :items="[
            { id: 1, text: 'Hiking' },
            { id: 2, text: 'Boat Trip' },
            { id: 3, text: 'Homestay' },
            { id: 4, text: 'Cooking Class' },
          ]" />
        <ListsDefaultList
          title="Regions Visited"
          :items="[
            { id: 1, text: 'Islamabad' },
            { id: 2, text: 'Hunza Valley' },
            { id: 3, text: 'Fairy Meadows' },
            { id: 4, text: 'Rakaposhi' },
          ]" />

        <ListsDefaultList
          title="Upcoming Dates"
          :items="[{ id: 1, text: '2nd May - 9th May 2025' }]" />
        <FormsPakistanPresale />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-cover.png"
          imageAlt="Fairy Meadows, Pakistan"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section id="showreel">
      <ImageStrip
        src="/videos/pakistan-showreel.mp4"
        poster="/images/pakistan/pakistan-rakaposhi.png"
        alt="Montenegro Showreel" />
    </section>

    <ItineraryDay
      dayId="day1"
      imageUrl="/images/pakistan/pakistan-islamabad-mosque.png"
      imageAlt="Faisal Mosque, Islamabad"
      overlayText="Faisal Mosque, <br /> Islamabad"
      textPosition="right"
      title="Day 1 | Arrival in Islamabad and Faisal Mosque">
      <template #body>
        <p>
          Arrive in Islamabad and check into your accommodation. After settling
          in, go for lunch at a local restaurant to get a taste of the regional
          cuisine. Spend the afternoon exploring Faisal Mosque, one of the
          largest and most iconic mosques in the world, known for its stunning
          architecture and serene ambiance. In the evening, enjoy dinner at
          another local eatery, soaking in the atmosphere of the capital city.
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day2"
      imageUrl="/images/pakistan/pakistan-karakoram-highway.png"
      imageAlt="Karakoram Highway, Hunza"
      overlayText="Karakoram Highway, <br /> Hunza"
      textPosition="left"
      title="Day 2 | Journey to Jaglot">
      <template #body>
        <p>
          Depart from Islamabad early in the morning and begin your drive
          towards the north. Along the way, enjoy scenic views of lush valleys
          and rivers, capturing the picturesque landscape of northern Pakistan.
          Stop for lunch at a charming spot en route. Arrive in Jaglot in the
          late afternoon, check into your hotel, and spend the evening exploring
          the town or relaxing by the river. End the day with a delicious
          dinner, experiencing the local cuisine.
        </p>
        <p>Accommodation in Jaglot.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day3"
      imageUrl="/images/pakistan/pakistan-fairy-meadows-road.png"
      imageAlt="Fairy Meadows, Diamer"
      overlayText="Fairy Meadows Road, <br /> Diamer"
      textPosition="right"
      title="Day 3 | Off-Road Adventure to Fairy Meadows">
      <template #body>
        <p>
          In the morning, embark on an off-road adventure in jeeps towards Fairy
          Meadows. The rugged journey offers spectacular views and a sense of
          adventure. Upon arrival at Fairy Meadows, hike through the stunning
          grasslands to reach your campsite. Spend the evening around a
          campfire, sharing stories and enjoying a hearty dinner with
          breathtaking views of Nanga Parbat in the background.
        </p>
        <p>Accommodation in Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day4"
      imageUrl="/images/pakistan/pakistan-nanga-parbat.png"
      imageAlt="Fairy Meadows, Diamer"
      overlayText="Fairy Meadows, <br /> Diamer"
      textPosition="left"
      title="Day 4 | Hike to Nanga Parbat Base Camp">
      <template #body>
        <p>
          Wake up early and embark on a hike to the base camp of Nanga Parbat,
          stopping at mountain huts along the way for food and tea. The hike
          provides stunning panoramic views and a chance to experience the
          pristine natural beauty of the region. Spend the day exploring the
          area, enjoying the tranquility and the stunning mountain vistas.
          Return to Fairy Meadows in the evening, where you can relax and have
          dinner.
        </p>
        <p>Accommodation in Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day5"
      imageUrl="/images/pakistan/pakistan-karimabad.png"
      imageAlt="Karimabad, Pakistan"
      overlayText="Karimabad, <br /> Pakistan"
      textPosition="right"
      title="Day 5 | Fairy Meadows to Karimabad">
      <template #body>
        <p>
          Depart from Fairy Meadows in the morning, taking jeeps back down to
          the main road. From there, drive to Karimabad, stopping for lunch
          along the way. Arrive in Karimabad and check into Moose Chalet, a
          charming accommodation offering beautiful views of the surrounding
          landscape. In the evening, go for dinner at a local woman-run
          restaurant, experiencing the unique flavors and traditions of the
          region.
        </p>
        <p>Accommodation in Karimabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day6"
      imageUrl="/images/pakistan/pakistan-rakaposhi-hakapun.png"
      imageAlt="Rakaposhi Hakapun, Minapin"
      overlayText="Rakaposhi Hakapun, <br /> Minapin"
      textPosition="left"
      title="Day 6 | Karimabad and Hike to Rakaposhi Hapakun">
      <template #body>
        <p>
          Spend the morning exploring Karimabad, shopping in local markets for
          gemstones and handicrafts. Visit the historic Baltit Fort to learn
          about the region's rich history and cultural heritage. Enjoy lunch in
          Karimabad before driving to the town of Minapin, the starting point
          for your hike to Rakaposhi Hapakun. The hike offers stunning views of
          Rakaposhi and the surrounding landscape. Arrive at Hakapun, where
          you'll spend the night under the stars.
        </p>
        <p>Accommodation in Hakapun.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day7"
      imageUrl="/images/pakistan/pakistan-rakaposhi-basecamp.png"
      imageAlt="Rakpaoshi, Minapin"
      overlayText="Rakaposhi, <br /> Minapin"
      textPosition="right"
      title="Day 7 | Rakaposhi Base Camp and Eagle’s Nest">
      <template #body>
        <p>
          Begin the day with a hike to the Rakaposhi base camp, where you can
          enjoy noodles and tea while taking in the breathtaking views. Explore
          the glacier and hike up to a viewpoint for more stunning vistas. After
          lunch, descend back to Minapin and drive up to Eagle's Nest for a
          sunset viewpoint. Enjoy a BBQ and campfire in the evening, surrounded
          by panoramic views of the towering mountains.
        </p>
        <p>Accommodation at Eagle's Nest.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day8"
      imageUrl="/images/pakistan/pakistan-attabad-lake.png"
      imageAlt="Attabad Lake, Pakistan"
      overlayText="Attabad Lake, <br /> Pakistan"
      textPosition="left"
      title="Day 8 | Attabad Lake and Baskochi Meadow">
      <template #body>
        <p>
          Drive to Attabad Lake for lunch, followed by a scenic boat trip on the
          turquoise waters. In the afternoon, hike at Baskochi Meadow, enjoying
          the beautiful natural surroundings. Head to your homestay for the
          night. Later, take a sunset hike up to Passu Cones and Black Glacier
          viewpoint, capturing stunning photographs and enjoying the peaceful
          ambiance.
        </p>
        <p>Accommodation at a Gulkin homestay.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day9"
      imageUrl="/images/pakistan/pakistan-passu-cones.png"
      imageAlt="Passu Cones, Passu"
      overlayText="Passu Cones, <br /> Passu"
      textPosition="right"
      title="Day 9 | Passu Cones and Borith Lake">
      <template #body>
        <p>
          Spend the morning at Borith Lake, where you can swim, kayak, or enjoy
          a pedalo ride. Afterward, hike to Gulkin Glacier, experiencing the
          natural beauty and rugged terrain. Visit the Passu Bridge for a
          thrilling adventure and take in the views of the Passu Cones. Return
          to your homestay in the evening, where you can participate in a
          cooking session, making traditional paratha.
        </p>
        <p>Accommodation at a Gulkin homestay.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day10"
      imageUrl="/images/pakistan/pakistan-karakoram-highway-2.png"
      imageAlt="Karakoram Highway, Hunza"
      overlayText="Karakoram Highway, <br /> Hunza"
      textPosition="left"
      title="Day 10 | Return to Islamabad">
      <template #body>
        <p>
          Depart from your homestay early in the morning and drive back to
          Islamabad, which is a 16-hour journey. Along the way, stop at the
          Three Mountains Junction View Point for a scenic break, as well as
          various spots for food and rest. Reflect on your adventures during the
          scenic drive through the mountainous terrain.
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day11"
      imageUrl="/images/pakistan/pakistan-plane.png"
      imageAlt="Islamabad, Pakistan"
      overlayText="Islamabad, <br /> Pakistan"
      textPosition="right"
      title="Day 11 | Farewell and Departure">
      <template #body>
        <p>
          Enjoy a farewell breakfast in Islamabad before preparing for your
          departure flight. Reflect on the unforgettable experiences and
          memories made during your journey through Pakistan.
        </p>
        <p>Departure from Islamabad.</p>
      </template>
    </ItineraryDay>

    <section class="gallery">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Gallery" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="left">
          <template #title>Gallery</template>
          <template #body>
            <p>
              Check out our gallery to see some amazing shots of Pakistan. Each
              photo shows a piece of the country's beauty and culture. Have a
              browse and get inspired for your next adventure.
            </p>
            <p v-if="isMobile">
              Swipe right for more. Tap an image for details.
            </p>
            <p v-else>
              Scroll right for more. Hover over an image for details.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="carousel">
      <div class="container">
        <CarouselsGallery
          :images="[
            {
              src: '/images/pakistan/pakistan-attabad-lake.png',
              alt: 'Attabad Lake',
              subDescription: 'Beautiful view of Attabad Lake',
            },
            {
              src: '/images/pakistan/pakistan-cover.png',
              alt: 'Pakistan Cover',
              subDescription: 'Cover photo of Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-cover-old.png',
              alt: 'Old Pakistan Cover',
              subDescription: 'Old cover photo of Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-eagles-nest.png',
              alt: 'Eagles Nest',
              subDescription: 'Eagles Nest in Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-fairy-meadows-road.png',
              alt: 'Fairy Meadows Road',
              subDescription: 'Road to Fairy Meadows',
            },
            {
              src: '/images/pakistan/pakistan-guide.png',
              alt: 'Pakistan Guide',
              subDescription: 'Guide to Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-islamabad-mosque.png',
              alt: 'Islamabad Mosque',
              subDescription: 'Faisal Mosque in Islamabad',
            },
            {
              src: '/images/pakistan/pakistan-karakoram-highway.png',
              alt: 'Karakoram Highway',
              subDescription: 'Scenic view of Karakoram Highway',
            },
            {
              src: '/images/pakistan/pakistan-karakoram-highway-2.png',
              alt: 'Karakoram Highway 2',
              subDescription: 'Another view of Karakoram Highway',
            },
            {
              src: '/images/pakistan/pakistan-karimabad.png',
              alt: 'Karimabad',
              subDescription: 'Karimabad in Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-nanga-parbat.png',
              alt: 'Nanga Parbat',
              subDescription: 'View of Nanga Parbat',
            },
            {
              src: '/images/pakistan/pakistan-passu-cones.png',
              alt: 'Passu Cones',
              subDescription: 'Famous Passu Cones',
            },
            {
              src: '/images/pakistan/pakistan-plane.png',
              alt: 'Pakistan Plane',
              subDescription: 'Plane flying over Pakistan',
            },
            {
              src: '/images/pakistan/pakistan-rakaposhi.png',
              alt: 'Rakaposhi',
              subDescription: 'View of Rakaposhi',
            },
            {
              src: '/images/pakistan/pakistan-rakaposhi-2.png',
              alt: 'Rakaposhi 2',
              subDescription: 'Another view of Rakaposhi',
            },
            {
              src: '/images/pakistan/pakistan-rakaposhi-basecamp.png',
              alt: 'Rakaposhi Basecamp',
              subDescription: 'Basecamp of Rakaposhi',
            },
            {
              src: '/images/pakistan/pakistan-rakaposhi-hakapun.png',
              alt: 'Rakaposhi Hakapun',
              subDescription: 'Hakapun near Rakaposhi',
            },
          ]" />
      </div>
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
                { id: 1, text: '10 nights accommodation' },
                { id: 2, text: 'Breakfast, lunch and dinner each day' },
                { id: 3, text: 'Drinking water, hot drinks at breakfast' },
                { id: 4, text: 'Transfers Between Stops' },
                { id: 5, text: 'Airport pickup and drop off' },
                { id: 6, text: 'All Activities Mentioned' },
                { id: 7, text: 'Local tour guide' },
              ]" />
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

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
            <ListsDefaultList
              bullets
              :items="[
                { id: 1, text: '10 nights accommodation' },
                { id: 2, text: 'Breakfast, lunch and dinner each day' },
                { id: 3, text: 'Drinking water, hot drinks at breakfast' },
                { id: 4, text: 'Transfers Between Stops' },
                { id: 5, text: 'Airport pickup and drop off' },
                { id: 6, text: 'All Activities Mentioned' },
                { id: 7, text: 'Local tour guide' },
              ]" />
          </AccordionItem>
          <AccordionItem title="What's not included?" index="2">
            <p>
              Our tour includes accommodation, transportation within Pakistan,
              guided tours, and most meals. You'll also enjoy unique experiences
              such as hikes, local cultural activities, and visits to key
              attractions.
            </p>
            <ListsDefaultList
              bullets
              :items="[
                { id: 1, text: 'Flights' },
                { id: 2, text: 'Visa' },
                {
                  id: 3,
                  text: 'Any additional nights accommodation - We can organise this for you however',
                },
                { id: 4, text: 'Additional food and drinks' },
                { id: 5, text: 'Souvenirs' },
                { id: 6, text: 'Tips - at your discretion' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Do I need a visa?" index="3">
            <p>
              Yes, most travelers will need a visa to enter Pakistan. It's
              essential to check the specific visa requirements for your
              nationality and apply in advance. Ensure your passport is valid
              for at least six months beyond your planned departure date.
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
          <AccordionItem
            title="What airport do I need to fly in and out of?"
            index="5">
            <p>
              You will fly into and out of Islamabad International Airport
              (ISB). This airport serves as the main gateway for our tour,
              providing convenient access to all starting and ending points of
              our itinerary.
            </p>
          </AccordionItem>
          <AccordionItem title="Will the itinerary change?" index="6">
            <p>
              While we strive to stick to the planned itinerary, there may be
              occasions where changes are necessary due to weather conditions,
              road closures, or other unforeseen circumstances. We will do our
              best to keep you informed and provide suitable alternatives.
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

    <section class="text-left guide" id="guide">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Guide" />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-guide.png"
          imageAlt="Fairy Meadows, Diamer"
          overlayText="Fairy Meadows, <br /> Diamer"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Meet Your Local Guide</template>
          <template #body>
            <p class="bold name">Name: Aziz</p>
            <p class="bold">From: Karimabad, Hunza Valley, Pakistan</p>
            <p>
              Born and raised in the picturesque Hunza Valley, Aziz has a
              profound connection to the rugged beauty of the Pakistani
              mountains. With over a decade of experience as a professional
              mountain guide, Aziz's extensive knowledge of the region's trails,
              history, and culture makes him an invaluable companion for your
              adventure. His passion for the great outdoors is matched only by
              his dedication to ensuring every traveler experiences the
              awe-inspiring landscapes safely and memorably. Fluent in English,
              Urdu, and the local Burushaski language, Aziz's friendly and
              approachable demeanor makes him a favorite among tourists. When
              he's not guiding expeditions, Aziz enjoys playing the Rubab, and
              sharing stories of his adventures over a warm cup of chai.
            </p>
            <a
              href="https://instagram.com/azizkhan45050"
              aria-label="Instagram"
              class="underline-out-icon link"
              target="_blank"
              ><LucideExternalLink />View Instagram</a
            >
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="text-right leader" id="leader">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Leader" />
        <ImageWithTextOverlay
          imageUrl="/images/tia.png"
          imageAlt="Marsur Rock, Skardu"
          overlayText="Marsur Rock, <br /> Skardu"
          textPosition="left" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="right">
          <template #title>Meet Your Trip Leader</template>
          <template #body>
            <p class="bold name">Name: Tia</p>
            <p class="bold">From: Bristol, United Kingdom</p>
            <p>
              Born and raised in the picturesque Hunza Valley, Aziz has a
              profound connection to the rugged beauty of the Pakistani
              mountains. With over a decade of experience as a professional
              mountain guide, Aziz's extensive knowledge of the region's trails,
              history, and culture makes him an invaluable companion for your
              adventure. His passion for the great outdoors is matched only by
              his dedication to ensuring every traveler experiences the
              awe-inspiring landscapes safely and memorably.
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
      </LayoutGridContainer>
    </section>

    <section class="end-text" id="book">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Get Involved" />
        <FormsPakistanPresale />
        <!--<a
          class="item underline-out"
          href="https://book.stripe.com/bIYdU90Dlcw7aeQeUU"
          aria-label="Book Now"
          target="_blank"
          ><TextReveal tag="h2">Book Trip</TextReveal></a
        >-->
        <div class="item private-trip">
          <h5>
            Interested in visiting Pakistan on <br v-if="!isMobile" />
            a solo or private group trip?
          </h5>
          <p>
            Get in touch with us via the
            <NuxtLink
              to="/contact"
              class="underline-out"
              aria-label="Contact Page"
              >contact page</NuxtLink
            >.
          </p>
        </div>
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

import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const { windowWidth, isMobile } = useWindowWidth();

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
  grid-row: 1 / 4;
}

.pakistan-presale {
  grid-column: 3 / 11;
  grid-row-start: 3;
}

/*.overview .list {
  margin-top: 2vw;
}*/

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
  align-self: center;
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

.leader .image {
  height: 45vw;
}

.name {
  margin-bottom: 0;
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

.end-text .pakistan-presale {
  grid-column: 6 / 17;
  grid-row-start: 1;
}

.end-text .pakistan-presale h4 {
  font-size: 7vw;
}

.end-text .pakistan-presale input {
  width: 45%;
}

.private-trip {
  grid-column: 6 / 17;
  grid-row-start: 2;
  margin-top: var(--spacing-4);
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

  .end-text .pakistan-presale input {
    width: 70vw;
  }
}
</style>

<style scoped>
.gallery .container {
  padding-bottom: 0;
}

.carousel .container {
  padding-top: 0;
}
</style>
