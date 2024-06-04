<template>
  <LayoutGridContainer>
    <TextSectionLabel labelText="Contact" />
    <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
      <template #title>Get in Touch</template>
      <template #body>
        <p>
          For any inquiries or to discuss your project needs, feel free to get in touch. I'm always available to provide personalized solutions and help bring your digital vision to life.
        </p>
      </template>
    </TextParagraphWithTitle>
    <div class="item contact-form">
      <div>
        <form
          action="https://formspree.io/f/xdoqplga"
          method="POST"
          autocomplete="on">
          <label class="form-name">
            <input
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Name"
              required />
          </label>
          <label class="form-email">
            <input
              type="email"
              name="email"
              autocomplete="email"
              placeholder="Email"
              required />
          </label>
          <label class="form-destination">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              required />
          </label>
          <label class="form-message">
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              required></textarea>
          </label>
          <button class="link underline-out-icon" type="submit">
            <LucideSend />
            Submit
          </button>
        </form>
      </div>
    </div>
  </LayoutGridContainer>
</template>

<style scoped>
input,
textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid grey;
  color: var(--font-color-primary);
  background-color: transparent;
  position: relative;
  padding-bottom: var(--spacing-3);
  margin-bottom: var(--spacing-4);
  width: 100%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

textarea {
  height: 100px;
}

input:focus,
textarea:focus {
  border-bottom: 1px solid var(--accent-primary);
}

form button {
  outline: none;
  border: none;
  cursor: pointer;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-3);
  padding-top: var(--spacing-5);
}

form label:nth-child(1) {
  grid-column: 1 / 2;
  grid-row-start: 1;
}

form label:nth-child(2) {
  grid-column: 2 / 3;
  grid-row-start: 1;
}

form label:nth-child(3) {
  grid-column: 1 / 3;
  grid-row-start: 2;
}

form label:nth-child(4) {
  grid-column: 1 / 3;
  grid-row-start: 3;
}

@media (max-width: 767px) {
  .contact-form {
    grid-column: 1 / 7;
  }
}
</style>
