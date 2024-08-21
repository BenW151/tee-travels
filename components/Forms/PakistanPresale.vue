<template>
  <div class="item pakistan-presale">
    <div>
      <h4 class="presale">Currently Sold Out</h4>
      <!--<h4 class="presale">Sign Up to Presale</h4>-->
      <p class="sign-up">
        Unfortunately, all spaces on this trip are sold out. Sign<br />
        up to the newsletter below to be notified on future trips.
      </p>
      <!--<p class="sign-up">
        Only 12 spots available—sign up now to receive <br />
        the payment link 48 hours before everyone else!
      </p>-->
      <form @submit.prevent="submitForm" autocomplete="on">
        <label class="form-email">
          <input
            type="email"
            v-model="email"
            name="email"
            autocomplete="email"
            placeholder="Email"
            required />
        </label>
        <button class="link" type="submit">Submit</button>
        <p class="message">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { windowWidth, isMobile } = useWindowWidth();

const email = ref("");
const message = ref("");

const submitForm = async () => {
  message.value = "Submitting...";

  try {
    const response = await fetch("https://newsletter.whynotadventures.co.uk/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email: email.value }),
    });

    const result = await response.json();

    if (response.ok) {
      message.value = `Email successfully submitted.`;
    } else {
      message.value = `Failed to submit email: ${result.message}`;
      console.error("Error response from server:", result.message);
    }
  } catch (error) {
    message.value = `An error occurred: ${error.message}`;
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
  padding-bottom: var(--spacing-1);
  width: 70%;
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
  margin-left: var(--spacing-3);
}

.sign-up,
.message {
  opacity: var(--opacity);
}

.message {
  margin-top: var(--spacing-1);
}

@media (max-width: 767px) {
  .newsletter {
    grid-column: 1 / 7;
  }

  input,
  textarea {
    width: 70vw;
  }
}
</style>
