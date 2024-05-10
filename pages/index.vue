<template>
  <Header
    imageUrl="/images/pool-night.png"
    title="Thermae Bath Spa"
    subtitle="Britain's original natural thermal spa"
    buttonText="Book Now"
    buttonUrl="/another-page"
    buttonDescription="Book Now"
    headerClass="header-large">
    <template #description>
      <p>
        Discover relaxation and rejuvenation at the only naturally warm,
        mineral-rich waters in Britain. Immerse yourself in our luxurious spa
        facilities, including the iconic rooftop pool with stunning views of the
        historic city of Bath. Experience a blend of ancient tradition and
        modern spa therapy as you unwind in the soothing waters and indulge in a
        range of therapeutic treatments designed to refresh both body and mind.
        Whether you seek a moment of solitude or a shared experience, Thermae
        Bath Spa offers a timeless escape to enhance your wellbeing.
      </p>
    </template>
  </Header>

  <main>
    <section id="about">
      <LayoutGridContainer>
        <TextSectionLabel labelText="About" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Our Story</template>
          <template #body>
            <p>
              Thermae Bath Spa stands as a modern continuation of a
              centuries-old tradition, rooted in the ancient practice of bathing
              in naturally heated springs. The city of Bath, renowned for its
              thermal waters, has been a destination for restorative retreats
              since Roman times. In the 18th century, it became a fashionable
              spa town, attracting visitors from across the globe seeking the
              curative properties of its mineral-rich waters.
            </p>
            <p>
              Our spa reimagines these age-old traditions with state-of-the-art
              facilities and contemporary wellness treatments. Opening its doors
              in the 21st century, Bath Thermae Spa has quickly established
              itself as a sanctuary of health and relaxation, merging historical
              elegance with modern luxury. We are committed to providing a
              serene environment where guests can connect with the healing
              powers of water, continuing the legacy of wellness that has
              defined Bath for millennia.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/cross-bath.png"
          altText="The Cross Bath"
          overlayText="The Cross Bath"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section>
      <ImageStrip
        src="/images/bath-pools.png"
        alt="Bath Pools"
        rellax-percentage="0.5" />
    </section>

    <section id="facilities">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Facilities" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>The Wellness Suite</template>
          <template #body>
            <p>
              The Wellness Suite is a haven of tranquility designed to cater to
              every aspect of your wellbeing. Within this serene area, guests
              can indulge in a variety of thermal experiences that detoxify,
              relax, and rejuvenate. The Infrared Room uses advanced technology
              to deeply warm the body, enhancing circulation and relieving
              muscle tension, perfect for soothing aches and promoting deep
              relaxation. Each facility within the suite is expertly designed to
              align with the spa's ethos of combining age-old traditions with
              modern therapeutic practices, ensuring a restorative visit for all
              who enter.
            </p>
          </template>
          <template #link-text> View All Facilities </template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/infrared-room.png"
          altText="Infrared Room"
          overlayText="Infrared Room"
          textPosition="left" />
        <ImageWithTextOverlay
          imageUrl="/images/georgian-room.png"
          altText="Georgian Steam Bath"
          overlayText="Georgian <br /> Steam Bath"
          textPosition="right"
          rellaxSpeed="1" />
        <ImageWithTextOverlay
          imageUrl="/images/ice-chamber.png"
          altText="Ice Chamber"
          overlayText="Ice <br /> Chamber"
          textPosition="left"
          rellaxPercentage="0.6"
          rellaxSpeed="3" />
        <ImageWithTextOverlay
          imageUrl="/images/roman-room.png"
          altText="Roman Steam Bath"
          overlayText="Roman <br /> Steam Bath"
          textPosition="left"
          rellaxPercentage="0.6" />
        <ImageWithTextOverlay
          imageUrl="/images/celestial-room.webp"
          altText="Celestial Relaxation Room"
          overlayText="Celestial <br /> Relaxation Room"
          textPosition="right"
          rellaxPercentage="0.6"
          rellaxSpeed="3" />
      </LayoutGridContainer>
    </section>

    <section id="lead-text">
      <LayoutGridContainer>
        <TextReveal tag="h3" class="item">
          Elevating wellness through serene experiences, Thermae Bath Spa
          invites you to indulge in transformative relaxation and meaningful
          tranquility for a restorative journey unlike any other.
        </TextReveal>
      </LayoutGridContainer>
    </section>

    <section id="treatments">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Packages" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Treatments</template>
          <template #body>
            <p>
              Our treatments are meticulously crafted to offer a deeply personal
              sense of wellbeing, drawing on both ancient rituals and modern
              therapeutic techniques. Our guests can choose from a wide range of
              services designed to harmonize and rejuvenate the body and mind.
              Indulge in our signature massages that utilize local aromatics and
              essential oils to release tension and restore energy. Our facial
              treatments combine the finest natural ingredients with expert
              techniques to revitalize the skin’s luminosity. For a more
              immersive experience, our body wraps and scrubs are infused with
              mineral-rich compounds that purify and nourish, leaving skin silky
              and refreshed. Each treatment is performed by our skilled
              therapists in a calm, soothing environment, ensuring a restorative
              and holistic spa experience.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/treatments-rocks.png"
          altText="Hot Stones Therapy"
          overlayText="Hot Stones <br /> Therapy"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <section id="springs-cafe">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Dining" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Springs Café</template>
          <template #body>
            <p>
              The Springs Café combines beautiful Georgian architecture with
              classic, contemporary style. Throughout the day and evening, spa
              users can enjoy light snacks and drinks. The drinks menu presents
              a refreshing variety of rich coffees, exquisite teas, natural soft
              drinks and specially selected wines, beers and ciders. Please note
              robes are to be worn in the Restaurant.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/springs-cafe.png"
          altText="Springs Cafe"
          overlayText="Springs <br /> Cafe"
          textPosition="left" />
      </LayoutGridContainer>
    </section>

    <section id="information">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Details" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Information</template>
          <template #body>
            <p>
              Thermae Bath Spa stands as a modern continuation of a
              centuries-old tradition, rooted in the ancient practice of bathing
              in naturally heated springs. The city of Bath, renowned for its
              thermal waters, has been a destination for restorative retreats
              since Roman times. In the 18th century, it became a fashionable
              spa town, attracting visitors from across the globe seeking the
              curative properties of its mineral-rich waters.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/minerva-bath.png"
          altText="Minerva Bath"
          overlayText="Minerva Bath"
          textPosition="right" />
        <Accordion>
          <AccordionItem title="Before You Arrive" index="1">
            <ListsDefaultList
              title="List Title"
              :items="[
                { id: 1, text: 'List Item One' },
                { id: 2, text: 'List Item Two' },
                { id: 3, text: 'List Item Three' },
                { id: 4, text: 'List Item Four' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Your Visit" index="2">
            <ListsDefaultList
              title="List Title"
              :items="[
                { id: 1, text: 'List Item One' },
                { id: 2, text: 'List Item Two' },
                { id: 3, text: 'List Item Three' },
                { id: 4, text: 'List Item Four' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Medical Conditions" index="3">
            <ListsDefaultList
              title="List Title"
              :items="[
                { id: 1, text: 'List Item One' },
                { id: 2, text: 'List Item Two' },
                { id: 3, text: 'List Item Three' },
                { id: 4, text: 'List Item Four' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Opening Hours" index="4">
            <ListsDefaultList
              title="List Title"
              :items="[
                { id: 1, text: 'List Item One' },
                { id: 2, text: 'List Item Two' },
                { id: 3, text: 'List Item Three' },
                { id: 4, text: 'List Item Four' },
              ]" />
          </AccordionItem>
          <AccordionItem title="Find Us" index="5">
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
        <ImageWithTextOverlay
          imageUrl="/images/roof-pool-day.png"
          altText="Rooftop Pool"
          overlayText="Rooftop Pool"
          data-rellax-speed="3"
          textPosition="left" />
      </LayoutGridContainer>
    </section>

    <section id="packages">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Dining" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title>Packages</template>
          <template #body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/rootop-pool-twilight.png"
          altText="Twilight for Two"
          overlayText="Twilight for Two"
          textPosition="left" />
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

    <section id="contact-form">
      <FormsContactForm />
    </section>

  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Bath Spa - Index",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
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

#about .image:nth-of-type(2) {
  grid-column: 9 / 16;
  grid-row: 1;
  height: 50vw;
}

#facilities .paragraph-with-title:nth-of-type(1) {
  grid-column: 7 / 15;
  grid-row: 1;
}

#facilities .image:nth-of-type(2) {
  grid-column: 3 / 10;
  grid-row: 1;
  height: 45vw;
}

#facilities .image:nth-of-type(3) {
  grid-column: 10 / 16;
  grid-row: 2;
  height: 30vw;
}

#facilities .image:nth-of-type(4) {
  grid-column: 4 / 9;
  grid-row: 2;
  height: 25vw;
  margin-top: 10%;
}

#facilities .image:nth-of-type(5) {
  grid-column: 3 / 12;
  grid-row: 3;
  height: 40vw;
}

#facilities .image:nth-of-type(6) {
  grid-column: 10 / 15;
  grid-row: 3;
  height: 25vw;
}

#information .paragraph-with-title:nth-of-type(1) {
  grid-column: 3 / 11;
  grid-row: 1;
}

#information .image:nth-of-type(2) {
  grid-column: 9 / 16;
  grid-row: 1;
  height: 40vw;
}

#information .accordion:nth-of-type(3) {
  grid-column: 6 / 17;
  grid-row: 2;
  background-color: var(--color-white);
  height: 40vw;
}

#information .image:nth-of-type(4) {
  grid-column: 1 / 6;
  grid-row: 2;
  height: 30vw;
  z-index: -1;
}

#treatments .paragraph-with-title:nth-of-type(1) {
  grid-column: 3 / 11;
  grid-row: 1;
}

#treatments .image:nth-of-type(2) {
  grid-column: 9 / 16;
  grid-row: 1;
  height: 45vw;
}

#springs-cafe .paragraph-with-title:nth-of-type(1) {
  grid-column: 7 / 15;
  grid-row: 1;
}

#springs-cafe .image:nth-of-type(2) {
  grid-column: 3 / 12;
  grid-row: 1;
  height: 40vw;
}

#packages .paragraph-with-title:nth-of-type(1) {
  grid-column: 7 / 15;
  grid-row: 1;
}

#packages .image:nth-of-type(2) {
  grid-column: 3 / 11;
  grid-row: 1;
  height: 40vw;
}

#packages a.link {
  display: inline-block;
}

#packages .paragraph-with-title:not(:nth-of-type(1)) {
  margin-top: 4vw;
}

#packages .paragraph-with-title:nth-of-type(3) {
  grid-column: 2 / 9;
  grid-row: 2;
}

#packages .paragraph-with-title:nth-of-type(2n) {
  grid-column: 10 / 17;
  grid-row: auto;
}

#packages .paragraph-with-title:not(:nth-of-type(2n)):not(:nth-of-type(1)) {
  grid-column: 2 / 9;
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
