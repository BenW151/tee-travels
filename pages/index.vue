<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Ben Ward"
      subtitle="Web Developer"
      buttonText="Contact Me"
      buttonUrl="/contact"
      buttonDescription="Contact Me"
      headerClass="header-large">
      <template #description>
        <p>Building sleek, scalable, and interactive web experiences.</p>
      </template>
    </Header>

    <main>
      <section id="lead-text">
        <LayoutGridContainer>
          <TextReveal tag="h3" class="item">
            Empowering businesses through engaging and practical designs, built
            for outstanding performance and significant reach.
          </TextReveal>
        </LayoutGridContainer>
      </section>

      <section id="about">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Our Story</template>
            <template #body>
              <p>
                Ben Ward stands as a modern continuation of a centuries-old
                tradition, rooted in the ancient practice of bathing in
                naturally heated springs. The city of Bath, renowned for its
                thermal waters, has been a destination for restorative retreats
                since Roman times. In the 18th century, it became a fashionable
                spa town, attracting visitors from across the globe seeking the
                curative properties of its mineral-rich waters.
              </p>
            </template>
            <template #link-text>View Treatments & Packages</template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>

      <section id="information">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Details" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Services</template>
            <template #body>
              <p>
                Ben Ward stands as a modern continuation of a centuries-old
                tradition, rooted in the ancient practice of bathing in
                naturally heated springs.
              </p>
            </template>
            <template #link-text>View Treatments & Packages</template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem title="Web Development" index="1">
              <ListsDefaultList
                title="List Title"
                :items="[
                  { id: 1, text: 'List Item One' },
                  { id: 2, text: 'List Item Two' },
                  { id: 3, text: 'List Item Three' },
                  { id: 4, text: 'List Item Four' },
                ]" />
            </AccordionItem>
            <AccordionItem title="UI/UX Design" index="2">
              <ListsDefaultList
                title="List Title"
                :items="[
                  { id: 1, text: 'List Item One' },
                  { id: 2, text: 'List Item Two' },
                  { id: 3, text: 'List Item Three' },
                  { id: 4, text: 'List Item Four' },
                ]" />
            </AccordionItem>
            <AccordionItem title="Brand Design" index="3">
              <ListsDefaultList
                title="List Title"
                :items="[
                  { id: 1, text: 'List Item One' },
                  { id: 2, text: 'List Item Two' },
                  { id: 3, text: 'List Item Three' },
                  { id: 4, text: 'List Item Four' },
                ]" />
            </AccordionItem>
            <AccordionItem title="SEO" index="4">
              <ListsDefaultList
                title="List Title"
                :items="[
                  { id: 1, text: 'List Item One' },
                  { id: 2, text: 'List Item Two' },
                  { id: 3, text: 'List Item Three' },
                  { id: 4, text: 'List Item Four' },
                ]" />
            </AccordionItem>
            <AccordionItem title="Support" index="5">
              <ListsDefaultList
                title="List Title"
                :items="[
                  { id: 1, text: 'List Item One' },
                  { id: 2, text: 'List Item Two' },
                  { id: 3, text: 'List Item Three' },
                  { id: 4, text: 'List Item Four' },
                ]" />
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section id="packages">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Dining" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Services</template>
            <template #body>
              <p>
                Ben Ward stands as a modern continuation of a centuries-old
                tradition, rooted in the ancient practice of bathing in
                naturally heated springs.
              </p>
            </template>
            <template #link-text>View Treatments & Packages</template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle
            subtitleTag="h4"
            linkUrl="/facilities"
            :use-text-reveal="false">
            <template #title>Thermae Welcome</template>
            <template #body>
              <h5>£20</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
            <template #link-text>View Package Details</template>
          </TextParagraphWithTitle>

          <TextParagraphWithTitle
            subtitleTag="h4"
            linkUrl="/facilities"
            :use-text-reveal="false">
            <template #title>Thermae Welcome</template>
            <template #body>
              <h5>£20</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
            <template #link-text>View Package Details</template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Index",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style scoped>
#lead-text .text-reveal {
  grid-column: 2 / 16;
  font-size: var(--font-size-M);
}

#about .paragraph-with-title:nth-of-type(1) {
  grid-column: 3 / 11;
  grid-row: 1;
}

#information .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

#information .accordion {
  grid-column: 6 / 17;
  grid-row: 2;
  height: 40vw;
}

#packages .paragraph-with-title:nth-of-type(1) {
  grid-column: 7 / 15;
  grid-row: 1;
}

#packages .paragraph-with-title:nth-of-type(2n) {
  grid-column: 2 / 9;
  grid-row: auto;
}

#packages .paragraph-with-title:not(:nth-of-type(2n)):not(:nth-of-type(1)) {
  grid-column: 10 / 17;
  grid-row: auto;
}

@media (max-width: 767px) {
  #lead-text .text-reveal {
    grid-column: 1 / 7;
    grid-row-start: 2;
  }

  #about .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #about .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 30vh;
    margin: 0;
  }

  #facilities .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #facilities .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 30vh;
    margin: 0;
  }

  #treatments .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #treatments .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 30vh;
    margin: 0;
  }

  #springs-cafe .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #springs-cafe .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 30vh;
    margin: 0;
  }

  #information .item.paragraph-with-title,
  #information .item.accordion {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #information .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 20vh;
    margin: 0;
  }

  #information .item.accordion {
    height: 100vw;
  }

  #information .item.image:nth-of-type(4) {
    display: none;
  }

  #packages .container div.item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #packages .item.image {
    grid-column: 1 / 7;
    grid-row: auto;
    height: 30vh;
    margin: 0;
  }
}
</style>
