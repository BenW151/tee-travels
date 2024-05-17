<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Portfolio"
      subtitle="Previous Work"
      headerClass="header-medium">
      <template #description>
        <!--
                buttonText="Book Now"
                buttonUrl="#contact-form"
                buttonDescription="Book Now"
          <p>Have a Question?</p>-->
      </template>
    </Header>

    <section id="node-one">
      <LayoutGridContainer>
        <TextSectionLabel labelText="IT Services" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Node One</template>
          <template #body>
            <p>Node One is an IT services company specialising in Networking</p>
            <a class="link underline-out-icon"
              ><LucideExternalLink />Visit Website</a
            >
          </template>
        </TextParagraphWithTitle>
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
        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section id="node-one">
      <LayoutGridContainer>
        <TextSectionLabel labelText="IT Services" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Node One</template>
          <template #body>
            <p>Node One is an IT services company specialising in Networking</p>
            <a class="link underline-out-icon"
              ><LucideExternalLink />Visit Website</a
            >
          </template>
        </TextParagraphWithTitle>
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
        <ImageWithTextOverlay
          imageUrl="/images/node-one-header.PNG"
          altText="Celestial Relaxation Room"
          overlayText="Header"
          textPosition="right"
          rellaxPercentage="0"
          rellaxSpeed="0" />
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
.contact-form {
  grid-column: 3 / 15;
}

#contact-form .paragraph-with-title {
  grid-column: 3 / 12;
  grid-row: 1;
}

#contact-form .item-inner {
  margin: 0;
}

#node-one .image:nth-child(3) {
  grid-column: 2 / 16;
  grid-row-start: 2;
}

#node-one .image:nth-child(4) {
  grid-column: 2 / 11;
  grid-row-start: 3;
}

#node-one .image:nth-child(5) {
  grid-column: 11 / 16;
  grid-row-start: 3;
}
</style>
