<template>
  <main>
    <section id="about">
      <div class="container grid">
        <p class="item accent section-label">About —</p>
        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper right">
            <h4>The Cross Bath</h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/cross-bath.png" />
        </div>
      </div>
    </section>

    <section>
      <div class="image-strip container">
        <div class="item image">
          <img
            alt="ALT TEXT"
            class="rellax"
            v-rellax
            data-rellax-percentage="0.5"
            src="/assets/images/bath-pools.png" />
        </div>
      </div>
    </section>

    <section id="facilities">
      <div class="container grid">
        <p class="item accent section-label">Facilities —</p>
        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper left">
            <h4>Infrared Room</h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/infrared-room.png" />
        </div>
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6"
          data-rellax-speed="2">
          <div class="text-wrapper right">
            <h4>
              Georgian <br />
              Steam Bath
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/georgian-room.png" />
        </div>
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6"
          data-rellax-speed="3">
          <div class="text-wrapper left">
            <h4>
              Ice <br />
              Chamber
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/ice-chamber.png" />
        </div>
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper left">
            <h4>
              Roman <br />
              Steam Bath
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/roman-room.png" />
        </div>
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6"
          data-rellax-speed="3">
          <div class="text-wrapper right">
            <h4>
              Celestial <br />
              Relaxation Room
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/celestial-room.webp" />
        </div>
      </div>
    </section>

    <section id="lead-text">
      <div class="container grid">
        <TextReveal tag="h3" class="item">
          Elevating wellness through serene experiences, Thermae Bath Spa
          invites you to indulge in transformative relaxation and meaningful
          tranquility for a restorative journey unlike any other.
        </TextReveal>
      </div>
    </section>

    <section id="treatments">
      <div class="container grid">
        <p class="item accent section-label">Packages —</p>
        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper right">
            <h4>
              Hot Stones <br />
              Therapy
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/treatments-rocks.png" />
        </div>
      </div>
    </section>

    <section id="springs-cafe">
      <div class="container grid">
        <p class="item accent section-label">Dining —</p>
        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper left">
            <h4>
              Springs <br />
              Cafe
            </h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/springs-cafe.png" />
        </div>
      </div>
    </section>

    <section id="information">
      <div class="container grid">
        <p class="item accent section-label">Details —</p>
        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper right">
            <h4>Minerva Bath</h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/minerva-bath.png" />
        </div>
        <Accordion>
          <AccordionItem title="Before You Arrive" index="1">
            <ul class="item list">
              <li class="list-title">Default List</li>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Your Visit" index="2">
            <ul class="item list">
              <li class="list-title">Default List</li>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Medical Conditions" index="3">
            <ul class="item list">
              <li class="list-title">Default List</li>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Opening Hours" index="4">
            <ul class="item list">
              <li class="list-title">Default List</li>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Find Us" index="5">
            <ul class="item list">
              <li class="list-title">Default List</li>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
              <li>List Item Four</li>
            </ul>
          </AccordionItem>
        </Accordion>
        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-speed="3"
          data-rellax-percentage="0.6">
          <div class="text-wrapper left">
            <h4>Rooftop Pool</h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/roof-pool-day.png" />
        </div>
      </div>
    </section>

    <section id="packages">
      <div class="container grid">
        <p class="item accent section-label">Dining —</p>

        <TextParagraphWithTitle
          subtitleTag="h3"
          linkUrl="/facilities">
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

        <div
          class="item image image-text-overlay rellax"
          v-rellax
          data-rellax-percentage="0.6">
          <div class="text-wrapper left">
            <h4>Twilight for Two</h4>
          </div>
          <img alt="ALT TEXT" src="/assets/images/rootop-pool-twilight.png" />
        </div>

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

      </div>
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

<style></style>
