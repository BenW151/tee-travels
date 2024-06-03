<template>
  <div class="destination">
    <Header
      imageUrl="/images/travel-blog.png"
      imageAlt="Modern office"
      title="Pakistan"
      subtitle="7 Nights"
      buttonText="Book Trip"
      buttonUrl="/contact"
      buttonDescription="Book Trip"
      headerClass="header-large">
      <template #description>
        <p>
          Pakistan, officially the Islamic Republic of Pakistan, is a country in
          South Asia. It is the fifth-most populous country, with a population
          of over 241.5 million, having the largest Muslim population as of 2023
        </p>
      </template>
    </Header>

    <section class="overview">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Overview" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Explore the Hidden Gems of Pakistan</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
            <NuxtLink
              class="link underline-out"
              to="/contact"
              aria-label="Book trip"
              >Book Trip</NuxtLink
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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 2,
              shortSummary: 'ABC village tour',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 3,
              shortSummary: 'Beach day',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 4,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 5,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 6,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              id: 7,
              shortSummary: 'Mountain hike',
              detailSummary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
          ]" />
        <ImageWithTextOverlay
          imageUrl="/images/travel-blog.png"
          altText="Hot Stones Therapy"
          overlayText="Fairy Meadows, <br /> Pakistan"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section>
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/travel-blog.png"
          altText="Celestial Relaxation Room"
          class="destination-header"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-left" id="day1">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/travel-blog.png"
          imageAlt="Office"
          class="itinerary-image"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>Day 1 | XYZ hike</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-right" id="day2">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/travel-blog.png"
          altText="Celestial Relaxation Room"
          class="itinerary-image"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4" textPosition="right">
          <template #title>Day 2 | XYZ hike</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-left" id="day3">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/travel-blog.png"
          imageAlt="Office"
          class="itinerary-image"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>Day 3 | XYZ hike</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="itinerary-day text-right" id="day4">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/travel-blog.png"
          imageAlt="Office"
          class="itinerary-image"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4" textPosition="right">
          <template #title>Day 4 | XYZ hike</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="end">
      <LayoutGridContainer>
        <TextCard
          name="Ben Ward"
          position="Managing Director"
          quote="Working with this team has been a game-changer for our business. The web development service provided was top-notch, with a keen attention to detail and a clear focus on our objectives. Our new website is not only visually stunning but also highly functional and user-friendly. The continuous support we receive ensures our site remains up-to-date and continues to perform excellently."
          imgSrc="/images/person.png" />
        <NuxtLink
          class="underline-out"
          to="/destination"
          aria-label="destination Page"
          >View Next Project</NuxtLink
        >
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - destination",
  meta: [{ name: "description", content: "My amazing site." }],
});

const imageData = [
  {
    src: "/images/travel-blog.png",
    alt: "Node One",
    subDescription: "IT Services",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Tee Travels",
    subDescription: "Tour Provider",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/node-one-office.png",
    alt: "Node Three",
    subDescription: "Mobile Development",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Node Four",
    subDescription: "Cloud Services",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/node-one-office.png",
    alt: "Node Five",
    subDescription: "Consulting",
    link: "/destinations/pakistan",
  },
  {
    src: "/images/travel-blog.png",
    alt: "Node Six",
    subDescription: "Support",
    link: "/destinations/pakistan",
  },
];
</script>

<style>
.container.grid {
  overflow: visible;
}

.overview .paragraph-with-title {
  grid-column: 3 / 11;
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
  grid-column: 9 / 12;
  grid-row-start: 2;
}

.itinerary {
  grid-column: 9 / 16;
}

.itinerary-brief .image {
  grid-column: 3 / 8;
  grid-row-start: 1;
  height: 30vw;
}

.destination .destination-header {
  grid-column: 1 / 17;
  height: 40vw;
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

.destination .card {
  grid-column: 11 / 17;
}

.end a {
  grid-column: 11 / 17;
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

  .end a {
    grid-column: 1 / 7;
  }
}
</style>
