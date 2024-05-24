<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Portfolio"
      subtitle="Previous Work"
      headerClass="header-small">
      <template #description> </template>
    </Header>

    <section id="carousel">
      <div class="container">
        <SwiperSlider />
      </div>
    </section>

    <section id="node-one" class="portfolio-item">
      <LayoutGridContainer>
        <TextSectionLabel labelText="IT Services" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Node One</template>
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
            { id: 3, text: 'SEO' },
          ]" />
        <ListsDefaultList
          title="Industry"
          :items="[{ id: 1, text: 'IT Services' }]" />
        <ListsDefaultList title="Date" :items="[{ id: 1, text: 'May 2024' }]" />

        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          class="portfolio-header"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
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
#carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
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

.portfolio-item .image:nth-child(6) {
  grid-column: 2 / 16;
  grid-row-start: 3;
}

.portfolio-item .image:nth-child(7) {
  grid-column: 2 / 11;
  grid-row-start: 4;
}

.portfolio-item .image:nth-child(8) {
  grid-column: 11 / 16;
  grid-row-start: 4;
}

.portfolio-item .card:nth-child(9) {
  grid-column: 11 / 16;
  grid-row-start: 5;
}

@media (max-width: 767px) {
  #carousel .container {
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }

  .portfolio-item .item.paragraph-with-title,
  .portfolio-item .item.image,
  .portfolio-item .item.card {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .portfolio-item .item.list {
    grid-column: span 2;
    grid-row: auto;
  }
}
</style>
