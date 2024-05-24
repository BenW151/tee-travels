<template>
  <div>
    <Header
      imageUrl="/images/web-dev.png"
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
          <p>
            Providing either one off collaborations, or ongoing relationships.
          </p>
        </LayoutGridContainer>
      </section>

      <section id="about">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
            <template #title>About Me</template>
            <template #body>
              <p>
                At the foundation of design lies creativity, which should
                consistently serve a specific objective. I focus on balancing
                originality with practicality, ensuring my designs embody the
                philosophy that form and function are complementary.
              </p>
            </template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4" linkUrl="/facilities">
            <template #title><LucideBoxSelect /> Form</template>
            <template #body>
              <p>
                Aesthetic appeal and visual innovation, ensuring each design not
                only captures the eye but also embodies a distinctive artistic
                expression that elevates the overall user experience.
              </p>
            </template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4" linkUrl="/facilities">
            <template #title><LucideFrame /> Function</template>
            <template #body>
              <p>
                Practicality and usability, with designs engineered to deliver
                optimal performance and ease of use, ensuring they meet the
                exact needs of users with efficiency and reliability.
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
                Ben Ward stands as a modern continuation of a centuries-old
                tradition, rooted in the ancient practice of bathing in
                naturally heated springs.
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
                Comprehensive web development services that include full-stack
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
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
              <p>
                I craft responsive, SEO-friendly websites grounded in HTML5 and
                CSS3, and enhance user experience with dynamic JavaScript
                functionalities. Specializing in React.js, I develop efficient
                UI components and effectively manage application state using
                modern techniques like hooks and Redux. My proficiency in Figma
                aids in creating clean, functional design prototypes that align
                closely with project goals. Additionally, my design expertise
                ensures visually compelling and practical layouts and graphics
                that optimize user interaction and aesthetic appeal. Each
                project reflects my skill in merging technical capabilities with
                creative insights, guaranteeing innovation and quality.
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

      <section id="experience">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Experience" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Experience</template>
            <template #body>
              <p>
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
              <a
                class="underline-out-icon"
                href="/ben-ward-cv.pdf"
                aria-label="View Full CV"
                download=""
                ><LucideDownload />View Full CV</a
              >
              <h4>Freelance Web Developer</h4>
              <h5>benward.io</h5>
              <h6>June 2021 - July 2023</h6>
              <p>
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
              <h4>Network Engineer</h4>
              <h5>Hargreaves Lansdown</h5>
              <h6>June 2021 - July 2023</h6>
              <p>
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
              <h4>IT Service Desk Analyst</h4>
              <h5>Hargreaves Lansdown</h5>
              <h6>June 2021 - July 2023</h6>
              <p>
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
              <h4>Infrastructure Technician</h4>
              <h5>Marsh Corporate</h5>
              <h6>June 2021 - July 2023</h6>
              <p>
                With a profound expertise in both web development and design, I
                bring a comprehensive skill set that encompasses the essentials
                and complexities of creating aesthetic and functional digital
                experiences.
              </p>
            </template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>

      <section id="contact">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Contact" />
          <NuxtLink
            class="item get-in-touch underline-out"
            to="/Contact"
            aria-label="Contact Page"
            ><TextReveal tag="h2">Get in Touch</TextReveal></NuxtLink
          >
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

#about .paragraph-with-title:nth-of-type(2) {
  grid-column: 6 / 10;
  grid-row-start: 2;
  padding-top: 0;
}

#about .paragraph-with-title:nth-of-type(3) {
  grid-column: 10 / 14;
  grid-row-start: 2;
  padding-top: 0;
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
}
</style>
