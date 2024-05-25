<template>
  <div class="portfolio">
    <Header
      imageUrl="/images/node-one-office.png"
      title="Node One"
      subtitle="IT Services"
      buttonText="View Website"
      buttonUrl="/contact"
      buttonDescription="View Website"
      headerClass="header-large">
      <template #description>
        <p>
          An IT services company offering best in class service and support. For
          this project, I designed and developed a professional website that
          effectively communicates the firm's expertise in IT solutions. The
          site features a robust, informative layout that includes service
          descriptions, client testimonials, and a live chat feature for instant
          customer support. Strategic SEO practices were also implemented to
          enhance online visibility and attract more business clientele.
        </p>
      </template>
    </Header>

    <section class="portfolio-item">
      <LayoutGridContainer>
        <TextSectionLabel labelText="IT Services" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Best In Class IT Services Provider</template>
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
              href="https://www.nodeone.co.uk/"
              aria-label="Node One Website"
              target="_blank"
              ><LucideExternalLink />Visit Website</a
            >
          </template>
        </TextParagraphWithTitle>
        <ListsDefaultList
          title="Services"
          :items="[
            { id: 1, text: 'UI/UX Design' },
            { id: 2, text: 'Web Development' },
            { id: 3, text: 'Brand Design' },
            { id: 4, text: 'SEO' },
          ]" />
        <ListsDefaultList
          title="Industry"
          :items="[{ id: 1, text: 'IT Services' }]" />
        <ListsDefaultList title="Date" :items="[{ id: 1, text: 'May 2024' }]" />
      </LayoutGridContainer>
    </section>

    <section>
      <LayoutGridContainer>
        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          class="portfolio-header"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="logo">
      <LayoutGridContainer>
        <ImageWithTextOverlay
          imageUrl="/images/node-one-logo.png"
          altText="Celestial Relaxation Room"
          class="portfolio-logo"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>Modernised Logo</template>
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
        <ImageWithTextOverlay
          imageUrl="/images/node-one-team.png"
          altText="Celestial Relaxation Room"
          class="portfolio-temp"
          overlayText="Header"
          textPosition="right"
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

    <section class="services">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>A Full Spectrum Of Services</template>
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
        <ImageWithTextOverlay
          imageUrl="/images/node-one-services.png"
          altText="Celestial Relaxation Room"
          class="portfolio-services"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section>
      <LayoutGridContainer>
        <TextCard
          name="Ben Ward"
          position="Managing Director"
          quote="Working with this team has been a game-changer for our business. The web development service provided was top-notch, with a keen attention to detail and a clear focus on our objectives. Our new website is not only visually stunning but also highly functional and user-friendly. The continuous support we receive ensures our site remains up-to-date and continues to perform excellently."
          imgSrc="/images/person.png" />
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Contact",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style>

.image.image-text-overlay img {
  object-fit: contain;
}

.container.grid {
  overflow: visible;
}

.portfolio-item .paragraph-with-title {
  grid-column: 6 / 14;
}

.portfolio-item .list {
  margin-top: 2vw;
}

.portfolio-item .list:nth-child(3) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

.portfolio-item .list:nth-child(4) {
  grid-column: 9 / 12;
  grid-row-start: 2;
}

.portfolio-item .list:nth-child(5) {
  grid-column: 12 / 15;
  grid-row-start: 2;
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

.portfolio .portfolio-temp {
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

.portfolio .card {
  grid-column: 11 / 16;
}

@media (max-width: 767px) {
  #carousel .container {
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }

  .portfolio .item.paragraph-with-title,
  .portfolio .item.image,
  .portfolio .item.card {
    grid-column: 1 / 7;
    grid-row: auto;
    margin: 0;
  }

  .portfolio-item .item.list {
    grid-column: span 2;
    grid-row: auto;
  }
}
</style>
