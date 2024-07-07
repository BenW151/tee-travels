<template>
  <div class="item pakistan-presale">
    <div>
      <h4 class="presale">Sign Up to Presale</h4>
      <p class="sign-up">
        Only 15 spots available—sign up now to receive <br />
        the payment link 48 hours before everyone else!
      </p>
      <form
        action="https://formspree.io/f/mnnaavqz"
        method="POST"
        autocomplete="on">
        <label class="form-email">
          <input
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Email"
            required />
        </label>
        <button class="link" type="submit">Submit</button>
      </form>
    </div>
  </div>
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
  border-bottom: 1px solid var(--accent-primary);
}

form button {
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: var(--spacing-3);
}

.sign-up {
  opacity: var(--opacity);
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
