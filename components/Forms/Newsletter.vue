<template>
  <div class="item contact-form">
    <div>
      <p class="sign-up">Sign up to our newsletter to <br> receive updates on upcoming trips.</p>
      <p>Newsletter</p>
      <form
        action="https://formspree.io/f/xdoqplga"
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
        <button class="link" type="submit">
          Submit
        </button>
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
  width: 25vw;
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

form {
  display: flex;
  flex-direction: row;
}
 
.sign-up {
  opacity: var(--opacity);
}

@media (max-width: 767px) {
  .contact-form {
    grid-column: 1 / 7;
  }
}
</style>
