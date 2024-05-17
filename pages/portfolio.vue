<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Portfolio"
      subtitle="Have a question? Let us know"
      headerClass="header-medium">
      <template #description>
        <!--
                buttonText="Book Now"
                buttonUrl="#contact-form"
                buttonDescription="Book Now"
          <p>Have a Question?</p>-->
      </template>
    </Header>

   <!-- <section id="node-one">
      <LayoutGridContainer>
          <TextSectionLabel labelText="Node One" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Node One</template>
            <template #body>
              <p>
                Node One is an IT services company specialising in Networking
              </p>
            </template>
            <template #link-text>Visit Website</template>
          </TextParagraphWithTitle>
          <ImageWithTextOverlay
            imageUrl="/images/cross-bath.png"
            altText="The Cross Bath"
            overlayText="The Cross Bath"
            textPosition="right" />
       </LayoutGridContainer>
    </section>-->

    <section id="node-one">
      <LayoutGridContainer>
        
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
</style>
