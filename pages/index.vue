<template>
  <div>
    <Header
      imageUrl="/images/travel-blog.png"
      imageAlt="Laptop with code on desk"
      title="Why Not Adventures"
      subtitle="Off The Beaten Track"
      buttonText="View Destinations"
      buttonUrl="/portfolio"
      buttonDescription="Destinations"
      headerClass="header-large">
      <template #description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </template>
    </Header>

    <main>
      <section id="lead-text">
        <LayoutGridContainer>
          <TextReveal tag="h3" class="item">
            Empowering businesses through engaging and practical designs, built
            for outstanding performance and significant reach.
          </TextReveal>
          <p>
            Providing either one off collaborations, or ongoing relationships.
          </p>
        </LayoutGridContainer>
      </section>

      <section id="about">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Why Choose Us?</template>
            <template #body>
              <p>
                I transitioned from Network Engineering and IT Service Desk to
                Web Development to merge my technical skills with my passion for
                design. Self-taught and proficient in modern web technologies
                like HTML, CSS, and JavaScript, I focus on creating
                user-friendly and visually appealing websites. I believe in
                designs where form and function work together seamlessly,
                ensuring that each project is not only aesthetically pleasing
                but also highly functional. My aim is to continuously innovate
                and exceed expectations in every project.
              </p>
            </template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>

      <section id="services">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Details" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>Services</template>
            <template #body>
              <p>
                I provide a full spectrum of web development services, including
                custom website design, responsive, accessible development,
                optimised SEO, and ongoing maintenance, ensuring a seamless and
                engaging user experience across all devices.
              </p>
              <NuxtLink
                class="underline-out"
                to="/portfolio"
                aria-label="Portfolio Page"
                >Previous Work</NuxtLink
              >
            </template>
            <template #link-text>View Treatments & Packages</template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem title="Web Development" index="1">
              <p>
                Comprehensive web development services that include front-end
                development, custom website design, and CMS solutions. Using the
                latest technologies and best practices, I ensure each website is
                robust, fast-loading, and fully responsive, providing users with
                a seamless experience across all devices.
              </p>
            </AccordionItem>
            <AccordionItem title="UI/UX Design" index="2">
              <p>
                UI/UX design services focus on creating user-centric interfaces
                that are both intuitive and engaging. From wireframing to final
                design implementation, I employ a thorough design process to
                ensure that every aspect of the user experience is streamlined
                and aesthetically pleasing.
              </p>
            </AccordionItem>
            <AccordionItem title="Brand Design" index="3">
              <p>
                Helping businesses establish a strong visual identity with my
                brand design services. This includes logo design, color schemes,
                typography, and overall brand strategy, ensuring a cohesive and
                powerful brand image that resonates with the target audience.
              </p>
            </AccordionItem>
            <AccordionItem title="SEO" index="4">
              <p>
                SEO services are designed to increase visibility and drive
                traffic through strategic keyword placement, content
                optimization, and backlink development. I focus on building
                sustainable SEO strategies that improve search engine rankings
                and enhance online presence.
              </p>
            </AccordionItem>
            <AccordionItem title="Support" index="5">
              <p>
                Ongoing support and maintenance services to ensure websites
                remain up-to-date and perform optimally. This includes regular
                updates, security checks, and troubleshooting to help businesses
                maintain a reliable and effective online presence.
              </p>
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section id="skills">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Skills" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Skills</template>
            <template #body>
              <p>
                I bring a solid foundation in web development and design,
                focused on creating functional and visually appealing digital
                experiences. I craft responsive, SEO-friendly websites using
                HTML5 and CSS3, and enhance user interaction with dynamic
                JavaScript functionalities. With a focus on Vue and Nuxt, I
                develop efficient UI components and manage application state
                using modern techniques. My proficiency in Figma allows me to
                create clean, functional design prototypes that align with
                project goals. Additionally, my design skills ensure layouts and
                graphics are both visually compelling and practical. Each
                project demonstrates my ability to merge technical capabilities
                with creative insights, ensuring innovation and quality.
              </p>
            </template>
          </TextParagraphWithTitle>
          <ListsDefaultList
            title="Languages"
            :items="[
              { id: 1, text: 'HTML 5' },
              { id: 2, text: 'CSS 3' },
              { id: 3, text: 'JavaScript' },
            ]" />
          <ListsDefaultList
            title="Frameworks"
            :items="[
              { id: 1, text: 'Nuxt 3' },
              { id: 2, text: 'Vue 3' },
            ]" />
          <ListsDefaultList
            title="Design"
            :items="[{ id: 1, text: 'Figma' }]" />
        </LayoutGridContainer>
      </section>

      <section id="contact">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Contact" />
          <NuxtLink
            class="item get-in-touch underline-out"
            to="/Contact"
            aria-label="Contact Page"
            ><TextReveal tag="h2"> Get in Touch</TextReveal></NuxtLink
          >
        </LayoutGridContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Home",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style scoped>
#lead-text .container {
  padding-top: 30vh;
  padding-bottom: 30vh;
}

#lead-text .text-reveal {
  font-size: var(--font-size-M);
}

#lead-text .item,
#lead-text p {
  grid-column: 2 / 16;
}

#about .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

#services .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

#services .accordion {
  grid-column: 6 / 17;
  grid-row: 2;
  /*height: 40vw;*/
}

#skills .paragraph-with-title:nth-of-type(1),
#experience .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

#experience h4 {
  margin-top: var(--spacing-4);
  margin-bottom: 0;
}

#experience h5 {
  margin-bottom: 1vh;
}

#skills .list:nth-child(3) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

#skills .list:nth-child(4) {
  grid-column: 9 / 12;
  grid-row-start: 2;
}

#skills .list:nth-child(5) {
  grid-column: 12 / 15;
  grid-row-start: 2;
}

#contact .get-in-touch {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
}

#contact .get-in-touch h2 {
  font-size: var(--font-size-XXL);
}

@media (max-width: 767px) {
  #lead-text .item,
  #lead-text p {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #about .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
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

  #services .item.paragraph-with-title:nth-of-type(1),
  #services .accordion,
  #skills .item.paragraph-with-title:nth-of-type(1),
  #contact .get-in-touch,
  #experience .item.paragraph-with-title:nth-of-type(1) {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  #skills .item.list {
    grid-column: span 2;
    grid-row: auto;
  }

  #experience h5 {
    margin-bottom: 1vw;
  }

  #contact .get-in-touch h2 {
    font-size: 14.5vw;
  }
}
</style>
