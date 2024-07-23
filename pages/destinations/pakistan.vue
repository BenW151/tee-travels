<template>
  <div class="destination">
    <Header
      imageUrl="/images/pakistan/pakistan-cover.webp"
      imageAlt="View of Rakaposhi from Karimabad"
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
          <template #title>About the Trip</template>
          <template #body>
            <p>
              Get ready for an unforgettable adventure in my favourite country
              Pakistan with this all inclusive organized tour, where we will
              dive into the country's insane natural beauty and lively culture.
              Start off in Islamabad, the capital city, where you'll check out
              the famous Faisal Mosque and get a taste for local cuisines. Then,
              head north on the most beautiful drive to Jaglot before setting
              off the next day to Fairy Meadows, where we hike to the
              breathtaking Nanga Parbat base camp, the world's ninth-highest
              mountain.
            </p>

            <p>
              Next, we'll make our way to Karimabad, home to the historic Baltit
              Fort and bustling local markets. From there, trek to Rakaposhi
              base camp where you will see the impressive glacier and camp under
              the stars. Take a scenic boat trip on Attabad Lake, hike up to
              Basckochi Meadows, Passu Cones viewpoint, Passu glacier and brave
              the Passu bridge!
            </p>

            <p>
              Finish off this trip staying with a local family who I met on my
              travels in Pakistan, we will have cooking lessons and hear stories
              from this beautiful family about their life in the mountains of
              Pakistan.
            </p>

            <p>
              This trip is packed with adventure, culture, and jaw-dropping
              landscapes, making it a once-in-a-lifetime experience you won't
              want to miss!
            </p>
            <!--<a
              class="link underline-out-icon"
              href="https://book.stripe.com/"
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
          :items="[{ id: 1, text: '16th - 26th May 2025' }]" />
        <FormsPakistanPresale />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-nanga-parbat.webp"
          imageAlt="Nanga Parbat, Diamer"
          overlayText="Nanga Parbat, <br /> Diamer"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section id="showreel">
      <ImageStrip
        v-if="isMobile"
        src="/videos/pakistan-showreel-mobile.mp4"
        poster="/images/pakistan/pakistan-passu-cones.webp"
        alt="Pakistan Showreel" />
      <ImageStrip
        v-else
        src="/videos/pakistan-showreel.mp4"
        poster="/images/pakistan/pakistan-passu-cones.webp"
        alt="Pakistan Showreel" />
    </section>

    <ItineraryDay
      dayId="day1"
      imageUrl="/images/pakistan/pakistan-islamabad-mosque.webp"
      imageAlt="Faisal Mosque, Islamabad"
      overlayText="Faisal Mosque, <br /> Islamabad"
      textPosition="right"
      title="Day 1 | Arrival in Islamabad and Faisal Mosque">
      <template #body>
        <p>
          Arrive in Islamabad and check into your accommodation. After settling
          in, go for lunch at a local restaurant to get a taste of the regional
          cuisine. Spend the afternoon exploring Faisal Mosque, one of the
          largest and most iconic mosques in the world. In the evening, we will
          have a welcome party back at our accommodation!
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day2"
      imageUrl="/images/pakistan/pakistan-karakoram-highway.webp"
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
          the town. End the day with a delicious dinner, experiencing the local
          cuisine.
        </p>
        <p>Accommodation in Jaglot.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day3"
      imageUrl="/images/pakistan/pakistan-fairy-meadows-cabin.webp"
      imageAlt="Fairy Meadows, Diamer"
      overlayText="Fairy Meadows Road, <br /> Diamer"
      textPosition="right"
      title="Day 3 | Off-Road Adventure to Fairy Meadows">
      <template #body>
        <p>
          In the morning, embark on an off-road adventure in jeeps towards Fairy
          Meadows. It's such an adventure and has the most incredible mountain
          views. Upon arrival at Fairy Meadows, hike towards our accommodation
          for the night, beginning to see Nanga Parbat in the distance as we
          ascend. Spend the evening around a campfire, sharing stories and
          enjoying a hearty dinner with breathtaking views of Nanga Parbat in
          the background.
        </p>
        <p>Accommodation in cabins at Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day4"
      imageUrl="/images/pakistan/pakistan-nanga-parbat.webp"
      imageAlt="Nanga Parbat, Diamer"
      overlayText="Nanga Parbat, <br /> Diamer"
      textPosition="left"
      title="Day 4 | Hike to Nanga Parbat Base Camp">
      <template #body>
        <p>
          Wake up early and embark on a hike to the base camp of Nanga Parbat,
          stopping at mountain huts along the way for freshly cooked food and
          tea. This hike offers multiple amazing viewpoints of Nanga Parbat and
          at the base camp we almost reach 4000m. Return to Fairy Meadows in the
          evening, where you can relax and have dinner.
        </p>
        <p>Accommodation in cabins at Fairy Meadows.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day5"
      imageUrl="/images/pakistan/pakistan-altit-fort.webp"
      imageAlt="Karimabad, Hunza"
      overlayText="Karimabad, <br /> Hunza"
      textPosition="right"
      title="Day 5 | Fairy Meadows to Karimabad">
      <template #body>
        <p>
          Depart from Fairy Meadows in the morning, taking jeeps back down to
          the main road. From there, drive to Karimabad, stopping for lunch
          along the way. Arrive in Karimabad and check into Moose Chalet, this
          is the most beautiful place I have ever stayed, it looks directly onto
          Rakaposhi and has fresh cherries you can pick from the garden. In the
          evening, go for dinner at a local woman-run restaurant, trying foods
          local to this region.
        </p>
        <p>Accommodation in Karimabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day6"
      imageUrl="/images/pakistan/pakistan-rakaposhi-hakapun.webp"
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
          for your hike to Rakaposhi Hapakun campsite. The hike offers stunning
          views of Rakaposhi and the surrounding mountains and glaciers. Arrive
          at Hakapun camp, where you'll spend the night under the stars.
        </p>
        <p>Accommodation in tents at Hakapun camp.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day7"
      imageUrl="/images/pakistan/pakistan-rakaposhi-basecamp.webp"
      imageAlt="Rakaposhi, Minapin"
      overlayText="Rakaposhi, <br /> Minapin"
      textPosition="right"
      title="Day 7 | Rakaposhi Base Camp and Eagle’s Nest">
      <template #body>
        <p>
          Begin the day with a hike to the Rakaposhi base camp, where you can
          enjoy food and tea while taking in the breathtaking views. Explore the
          glacier and hike up to an even higher viewpoint for the most insane
          360 view of multiple peaks over 7000m. After lunch, descend back to
          Minapin and drive up to Eagle's Nest for a sunset viewpoint. Enjoy a
          BBQ with local Yak meat (vegan option available!) and campfire in the
          evening, drinking local spirit moonshine to celebrate, surrounded by
          panoramic views of the towering mountains as the sunsets.
        </p>
        <p>Accommodation in hotel at Eagle's Nest.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day8"
      imageUrl="/images/pakistan/pakistan-attabad-lake.webp"
      imageAlt="Attabad Lake, Gojal"
      overlayText="Attabad Lake, <br /> Gojal"
      textPosition="left"
      title="Day 8 | Attabad Lake and Baskochi Meadow">
      <template #body>
        <p>
          Drive to Attabad Lake for lunch, where we will have a scenic boat trip
          on the turquoise waters. In the afternoon, hike at Baskochi Meadow,
          for the best viewpoint down onto the bright blue lake. A short walk
          through gorgeous meadows and we will arrive at our homestay for the
          night where you will meet your local host family. Later, take a sunset
          hike up to Passu Cones and Black Glacier viewpoint.
        </p>
        <p>Accommodation at a Gulkin homestay.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day9"
      imageUrl="/images/pakistan/pakistan-passu-cones-2.webp"
      imageAlt="Passu Cones, Passu"
      overlayText="Passu Cones, <br /> Passu"
      textPosition="right"
      title="Day 9 | Passu Cones and Borith Lake">
      <template #body>
        <p>
          Spend the morning at Borith Lake, where you can swim, kayak, or enjoy
          a pedalo ride. Afterward, hike to the impressive Gulkin Glacier. Brave
          crossing the Passu Bridge and get your iconic photo at Passu Cones.
          Return to your homestay in the evening, where you can participate in a
          cooking session, making traditional paratha.
        </p>
        <p>Accommodation at a Gulkin homestay.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day10"
      imageUrl="/images/pakistan/pakistan-karakoram-highway-2.webp"
      imageAlt="Karakoram Highway, Hunza"
      overlayText="Karakoram Highway, <br /> Hunza"
      textPosition="left"
      title="Day 10 | Return to Islamabad">
      <template #body>
        <p>
          Depart from your homestay early in the morning and drive back to
          Islamabad. Along the way, stop at the Three Mountains Junction View
          Point where you can see the three tallest mountain ranges in the
          world. Reflect on your adventures during the scenic drive through the
          mountainous terrain before having our final group dinner.
        </p>
        <p>Accommodation in Islamabad.</p>
      </template>
    </ItineraryDay>

    <ItineraryDay
      dayId="day11"
      imageUrl="/images/pakistan/pakistan-plane.webp"
      imageAlt="Islamabad"
      overlayText="Islamabad"
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

    <section class="gallery" v-if="!isMobile">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Highlights" />
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

    <section class="carousel" v-if="!isMobile">
      <div class="container">
        <CarouselsGallery
          :images="[
            {
              src: '/images/pakistan/gallery/attabad-lake-boat-2.webp',
              alt: 'Attabad Lake Boat',
              subDescription: 'Boat trip on attabad lake',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-roadside.webp',
              alt: 'Rakaposhi Roadside',
              subDescription: 'Beautiful roadside view of Rakaposhi',
            },
            {
              src: '/images/pakistan/gallery/fairy-meadows-cabins.webp',
              alt: 'Fairy Meadows Accommodation',
              subDescription: 'Cabins at Fairy Meadows',
            },
            {
              src: '/images/pakistan/gallery/chips-in-mountain-hut.webp',
              alt: 'Mountain hut en route to Nanga Parbat Basecamp',
              subDescription: 'Enjoying homemade chips in a cozy mountain hut',
            },
            {
              src: '/images/pakistan/gallery/naltar-goat.webp',
              alt: 'Cute goat en route to Rakaposhi Base Camp',
              subDescription: 'So many cute animals in the mountains',
            },
            {
              src: '/images/pakistan/gallery/playing-music.webp',
              alt: 'Playing Music at a local restaurant',
              subDescription: 'Our local guide playing traditional music',
            },
            {
              src: '/images/pakistan/gallery/shispare-mountain.webp',
              alt: 'Shispare Mountain',
              subDescription: 'View on hike down from Rakaposhi',
            },
            {
              src: '/images/pakistan/gallery/woman-run-restaurant.webp',
              alt: 'Woman Run Restaurant',
              subDescription:
                'My favourite restaurant in Karimabad run by a local woman',
            },
            {
              src: '/images/pakistan/gallery/diran-peak.webp',
              alt: 'Diran Peak',
              subDescription:
                'Viewpoint of Diran Peak (7266m)from Rakaposhi hike',
            },
            {
              src: '/images/pakistan/gallery/hakapun-tea.webp',
              alt: 'Tea at Hakapun',
              subDescription: 'Enjoying fresh tea at HakapunCamp',
            },
            {
              src: '/images/pakistan/gallery/hand-weaving-shop.webp',
              alt: 'Hand Weaving Shop',
              subDescription: 'A shop showcasing traditional crafts',
            },
            {
              src: '/images/pakistan/gallery/karimabad-view.webp',
              alt: 'Karimabad View',
              subDescription:
                'Panoramic view of Rakaposhi from our accomodation',
            },
            {
              src: '/images/pakistan/gallery/homestay-host-stara.webp',
              alt: 'Homestay Host',
              subDescription: 'Out friendly homestay host Sitara',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-glacier-view.webp',
              alt: 'Rakaposhi Glacier View',
              subDescription: 'View of Rakaposhi Glacier',
            },
            {
              src: '/images/pakistan/gallery/borith-lake.webp',
              alt: 'Borith Lake looking onto Shispare Peak (7611m)',
              subDescription: 'A beautiful lake to swim and kayak',
            },
            {
              src: '/images/pakistan/gallery/fairy-meadows-goat.webp',
              alt: 'Fairy Meadows reflection point',
              subDescription:
                'So many cute goats,horses and donkeys at fairy meadows',
            },
            {
              src: '/images/pakistan/gallery/karimabad-dusk.webp',
              alt: 'Karimabad Dusk',
              subDescription: 'Rakaposhi glowing at night',
            },
            {
              src: '/images/pakistan/gallery/hussaini-bridge.webp',
              alt: 'Hussaini Bridge',
              subDescription: 'Crossing the Hussaini Suspension Bridge',
            },
            {
              src: '/images/pakistan/gallery/attabad-lake-pass-cones-view.webp',
              alt: 'Attabad Lake Passu Cones View',
              subDescription: 'View of Passu Cones from Attabad Lake',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-basecamp.webp',
              alt: 'Rakaposhi Basecamp',
              subDescription: 'Basecamp at Rakaposhi',
            },
            {
              src: '/images/pakistan/gallery/eagles-nest-viewpoint.webp',
              alt: 'Eagles Nest Viewpoint',
              subDescription: 'Sunset 360 viewpoint over the mountains',
            },
            {
              src: '/images/pakistan/gallery/fairy-meadows-jeeps.webp',
              alt: 'Fairy Meadows Jeeps',
              subDescription: 'Off road jeeps to fairy meadows',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-view.webp',
              alt: 'Rakaposhi View',
              subDescription: 'Highest viewpoint, extra hike from basecamp',
            },
            {
              src: '/images/pakistan/gallery/fairy-meadows-jeep.webp',
              alt: 'Fairy Meadows Jeep',
              subDescription: 'Jeep ride to Fairy Meadows',
            },
            {
              src: '/images/pakistan/gallery/gulkin-homestay.webp',
              alt: 'Walk to homestay',
              subDescription: 'Viewpoint from Gulkin village',
            },
            {
              src: '/images/pakistan/gallery/attabad-lake-topview.webp',
              alt: 'Baskochi Hike Viewpoint',
              subDescription: 'View of Attabad Lake from Baskochi Meadow',
            },
            {
              src: '/images/pakistan/gallery/borith-lake-pedalo.webp',
              alt: 'Borith Lake Pedalo',
              subDescription: 'Going for a Pedalo on Borith Lake',
            },
            {
              src: '/images/pakistan/gallery/karimabad-accomodation.webp',
              alt: 'Karimabad Accommodation',
              subDescription: 'Out accommodation in Karimabad',
            },
            {
              src: '/images/pakistan/gallery/traditional-meal.webp',
              alt: 'Traditional Meal',
              subDescription: 'Delicious traditional Pakistani meal',
            },
            {
              src: '/images/pakistan/gallery/fairy-meadows.webp',
              alt: 'Fairy Meadows',
              subDescription: 'Scenic view of Fairy Meadows',
            },
            {
              src: '/images/pakistan/gallery/attabad-lake-boat.webp',
              alt: 'Attabad Lake Boat',
              subDescription: 'Boating on Attabad Lake',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-hakapun-camping-2.webp',
              alt: 'Rakaposhi Hakapun Camping 2',
              subDescription: 'Another view of camping at Rakaposhi Hakapun',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-hakapun-camping.webp',
              alt: 'Rakaposhi Hakapun Camping',
              subDescription: 'Camping at Rakaposhi Hakapun',
            },
            {
              src: '/images/pakistan/gallery/rakaposhi-hakapun.webp',
              alt: 'Rakaposhi Hakapun',
              subDescription: 'Hakapun campground on the way to Rakaposhi',
            },
            {
              src: '/images/pakistan/gallery/passu-cones.webp',
              alt: 'Passu Cones',
              subDescription: 'Iconic Passu Cones',
            },
          ]" />
      </div>
    </section>

    <section class="text-left included" id="included">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Inclusions" />
        <ImageWithTextOverlay
          imageUrl="/images/pakistan/pakistan-cover.webp"
          imageAlt="Karimabad, Hunza"
          overlayText="Karimabad, <br /> Hunza"
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
                { id: 6, text: 'All activities mentioned' },
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
                { id: 6, text: 'All activities mentioned' },
                { id: 7, text: 'Local tour guide' },
              ]" />
          </AccordionItem>
          <AccordionItem title="What's not included?" index="2">
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
                { id: 6, text: 'Tips - At your discretion' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Do I need a visa?" index="3">
            <p>
              Yes, most travelers will need a visa to enter Pakistan. It's
              essential to check the specific visa requirements for your
              nationality and apply in advance. We will require you to provide a
              copy of your visa ahead of the trip start date. Also Ensure your
              passport is valid for at least six months beyond your planned
              departure date.
            </p>
          </AccordionItem>
          <AccordionItem title="Do I need travel insurance?" index="4">
            <p>
              Yes, travel insurance is mandatory for our tour. It should cover
              medical expenses, trip cancellations, and any unforeseen events.
              We recommend purchasing comprehensive travel insurance to ensure a
              safe and worry-free journey. We will require you to provide a copy
              of your insurance ahead of the trip start date.
            </p>
          </AccordionItem>
          <AccordionItem
            title="What airport do I need to fly in and out of?"
            index="5">
            <p>
              You will fly into and out of Islamabad International Airport
              (ISB). This airport serves as the main gateway for our tour,
              providing convenient access to the starting and ending points of
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
          <AccordionItem title="Can I do this trip independently?" index="7">
            <p>
              Absolutely! Yes, you can embark on our trips independently. We
              offer bespoke tours using our trusted guides. Simply get in touch
              via the
              <NuxtLink
                to="/contact"
                class="underline-out"
                aria-label="Contact Page"
                >contact page</NuxtLink
              >.
            </p>
          </AccordionItem>
          <AccordionItem title="Any other questions?" index="8">
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
          imageUrl="/images/pakistan/pakistan-guide.webp"
          imageAlt="Fairy Meadows, Diamer"
          overlayText="Fairy Meadows, <br /> Diamer"
          textPosition="right" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Meet Your Local Guide</template>
          <template #body>
            <p class="bold name">Name: Aziz</p>
            <p class="bold">From: Karimabad, Hunza Valley, Pakistan</p>
            <p>
              Meet Aziz, a true local from the stunning Hunza Valley. Growing up
              surrounded by the majestic Pakistani mountains, he's got a deep
              love for the area's rugged beauty. With over five years of guiding
              under his belt, Aziz knows every trail, bit of history, and
              cultural detail like the back of his hand. He's all about making
              sure you have a safe and unforgettable adventure. Plus, he speaks
              English, Urdu, and the local language in Hunza, Burushaski. Aziz's
              friendly vibe will make you feel right at home. When he's not
              leading treks, he's playig his Rubab or swapping adventure tales
              over a warm cup of chai.
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
          imageUrl="/images/tia-passu.webp"
          imageAlt="Passu Cones, Passu"
          overlayText="Passu Cones, <br /> Passu"
          textPosition="left" />
        <TextParagraphWithTitle subtitleTag="h3" textPosition="right">
          <template #title>Meet Your Trip Leader</template>
          <template #body>
            <p class="bold name">Name: Tia</p>
            <p class="bold">From: Bristol, United Kingdom</p>
            <p>
              Hey! I'm Tia, the girl behind @teetravels_ . I am a full time
              traveller who is so passionate about being in the mountains and
              hiking. I first fell in love with hiking on a trip to Central
              America 2 years ago, I found hiking so healing and after
              travelling to over 55 countries I have learnt I always feel the
              happiest in nature. I have hiked in top mountain destinations like
              Switzerland, Canada, Peru, Norway, Austria but none of them
              compare to what I experienced when I travelled to Pakistan. The
              scale of seeing a mountain over 8000m in person is indescribable,
              plus the trails are so much quieter. It truly is a special place
              and a mountain and adventure lovers dream.
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
          href="https://book.stripe.com/"
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
  title: "Pakistan | Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Discover the Hunza Valley: An Unforgettable Journey to Fairy Meadows, Rakaposhi, and Beyond.",
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
  height: 45vw;
}

.faq .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

.faq .accordion {
  grid-column: 6 / 17;
  grid-row: 2;
}

.guide .image,
.leader .image {
  height: 50vw;
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
