<template>
  <LayoutGridContainer>
    <TextSectionLabel labelText="Contact" />
    <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
      <template #title>Get in Touch</template>
      <template #body>
        <p>
          I'd love to hear from you! Whether you have questions, need travel
          advice, or just want to share your own travel stories, feel free to
          reach out. Your feedback and connections mean a lot to me. Drop me a
          message, and let's stay in touch as we embark on this journey
          together. Looking forward to hearing from you!
        </p>

        <ListsLinkList
          class="socials"
          title="Social Media"
          :links="[
            {
              url: 'https://www.instagram.com/benward.io/',
              label: 'Instagram',
              description: 'Instagram',
            },
            {
              url: 'https://linkedin.com/in/benw151',
              label: 'Facebook',
              description: 'LinkedIn',
            },
            {
              url: 'https://github.com/BenW151',
              label: 'X',
              description: 'GitHub',
            },
          ]" />
      </template>
    </TextParagraphWithTitle>
    <div class="item contact-form">
      <h4>Contact Form</h4>
      <div>
        <form @submit.prevent="submitForm" autocomplete="on">
          <label class="form-name">
            <input
              type="text"
              v-model="formData.name"
              name="name"
              autocomplete="name"
              placeholder="Name"
              required />
          </label>
          <label class="form-email">
            <input
              type="email"
              v-model="formData.email"
              name="email"
              autocomplete="email"
              placeholder="Email"
              required />
          </label>
          <label class="form-destination">
            <input
              type="text"
              v-model="formData.destination"
              name="destination"
              placeholder="Destination" />
          </label>
          <label class="form-message">
            <textarea
              v-model="formData.message"
              name="message"
              placeholder="Message"
              required></textarea>
          </label>
          <button class="link underline-out-icon" type="submit">
            <LucideSend />
            Submit
          </button>
        </form>
        <p>{{ message }}</p>
      </div>
    </div>
  </LayoutGridContainer>
</template>

<script setup>
import { ref } from "vue";

const initialFormData = {
  name: "",
  email: "",
  destination: "",
  message: "",
};

const formData = ref({ ...initialFormData });
const message = ref("");
const config = useRuntimeConfig()

const submitForm = async () => {
  message.value = "Submitting...";

  try {
    const response = await fetch(
      config.public.CONTACT_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      }
    );

    const result = await response.json();

    if (response.ok) {
      message.value = `Form submitted, we will get back to you as soon as possible.`;
      formData.value = { ...initialFormData }; // Reset form fields
    } else {
      message.value = `Failed to submit form: ${result.message}. Please send us a direct email at contact@whynotadventures.com.`;
      console.error("Error response from server:", result.message);
    }
  } catch (error) {
    message.value = `An error occurred: ${error.message}. Please send us a direct email at contact@whynotadventures.com.`;
    console.error("Fetch error:", error);
  }
};
</script>

<style scoped>
input,
textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--accent-primary);
  border-radius: 0;
  color: var(--foreground-primary);
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
  border-bottom: 1px solid var(--foreground-primary);
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

#contact-form .paragraph-with-title {
  grid-column: 1 / 9;
  grid-row: 2;
}

.contact-form {
  grid-column: 10 / 17;
  grid-row: 2;
}

@media (max-width: 767px) {
  #contact-form .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .contact header .item.paragraph:nth-child(2) {
    grid-column: 6 / 7;
  }

  .contact-form {
    grid-column: 1 / 7;
  }
}
</style>
