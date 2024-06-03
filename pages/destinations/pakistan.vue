<template>
  <div class="portfolio">
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

    <section class="portfolio-item">
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
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          class="portfolio-header"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="logo">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/node-one-logo.png"
          imageAlt="Office"
          class="portfolio-logo"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>A Fresh, Modern Appearance</template>
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

    <section class="team">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/node-one-team.png"
          altText="Celestial Relaxation Room"
          class="portfolio-team"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>A Personable, Approachable Team</template>
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

    <section class="services" id="day1">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>A Full Spectrum Of Services On Offer</template>
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
        <ImageDefault
          imageUrl="/images/node-one-services.png"
          altText="Celestial Relaxation Room"
          class="portfolio-services"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="lighthouse" id="day2">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/lighthouse-score.png"
          imageAlt="Office"
          class="portfolio-lighthouse"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>High Performance, Available to Everyone</template>
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
            <a
              class="link underline-out-icon"
              href="https://pagespeed.web.dev/analysis/https-portfolio-nuxt-6c3-pages-dev-portfolio-node-one/15ywm0w7vd?hl=en-GB&form_factor=desktop"
              aria-label="Node One Website"
              target="_blank"
              ><LucideExternalLink />View Full Report</a
            >
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
          to="/portfolio"
          aria-label="Portfolio Page"
          >View Next Project</NuxtLink
        >
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Portfolio",
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
.image.image-default img {
  object-fit: contain;
}

.container.grid {
  overflow: visible;
}

.portfolio-item .paragraph-with-title {
  grid-column: 3 / 11;
}

.portfolio-item .list {
  margin-top: 2vw;
}

.portfolio-item .list:nth-child(3) {
  grid-column: 3 / 6;
  grid-row-start: 2;
}

.portfolio-item .list:nth-child(4) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

.portfolio-item .list:nth-child(5) {
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

.portfolio .portfolio-header {
  grid-column: 2 / 16;
}

.portfolio .portfolio-logo {
  grid-column: 11 / 14;
}

.logo .paragraph-with-title {
  grid-column: 3 / 9;
  grid-row-start: 1;
}

.portfolio .portfolio-team {
  grid-column-end: 8;
  margin-left: -500px;
}

.team .paragraph-with-title {
  grid-column: 10 / 16;
  grid-row-start: 1;
}

.portfolio .portfolio-services {
  grid-column: 9 / 17;
  margin-right: -400px;
}

.services .paragraph-with-title {
  grid-column: 2 / 8;
  grid-row-start: 1;
}

.portfolio .portfolio-lighthouse {
  grid-column: 10 / 16;
}

.lighthouse .paragraph-with-title {
  grid-column: 2 / 8;
  grid-row-start: 1;
}

.portfolio .card {
  grid-column: 10 / 16;
}

.end a {
  grid-column: 10 / 15;
}

@media (max-width: 767px) {
  .portfolio .item.paragraph-with-title,
  .portfolio .item.image,
  .portfolio .item.card,
  .end a {
    grid-column: 1 / 7;
    grid-row: auto;
    margin: 0;
  }

  section div.container.grid div.item {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .portfolio-item .item.list {
    grid-column: span 2;
    grid-row: auto;
  }
}
</style>
