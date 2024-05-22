<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Ben Ward"
      subtitle="Web Developer"
      buttonText="Contact Me"
      buttonUrl="/contact"
      buttonDescription="Contact Me"
      headerClass="header-medium">
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
            <template #link-text>View Treatments & Packages</template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4" linkUrl="/facilities">
            <template #title>Form</template>
            <template #body>
              <p>
                Aesthetic appeal and visual innovation, ensuring each design not
                only captures the eye but also embodies a distinctive artistic
                expression that elevates the overall user experience.
              </p>
            </template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4" linkUrl="/facilities">
            <template #title>Function</template>
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

      <section id="skills">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Skills" />
          <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
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
            <template #link-text>View Treatments & Packages</template>
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
            ><TextReveal tag="h2"
              >Get in Touch</TextReveal
            ></NuxtLink
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
  padding-top: 20vh;
  padding-bottom: 20vh;
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

#skills .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

#contact .get-in-touch {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
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

  #services .item.paragraph-with-title:nth-of-type(1), #services .accordion, #skills .item.paragraph-with-title:nth-of-type(1), #contact .get-in-touch {
    grid-column: 1 / 7;
    grid-row: auto;
  }
}
</style>
