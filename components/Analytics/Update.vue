<template>
  <div class="consent">
    <h3>Update Cookie Settings</h3>
    <p>
      We'd like to set some cookies to understand how you use our website,
      remember your settings and improve services.
    </p>
    <button @click="grantConsent" class="underline-out">Grant Permission</button>
    <button @click="declineConsent" class="underline-out">Remove Permission</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { gtag, initialize, disableAnalytics } = useGtag();
const consentGiven = ref(false);

const grantConsent = () => {
  initialize();
  localStorage.setItem("consentGiven", "true");
  consentGiven.value = true;
};

const declineConsent = () => {
  disableAnalytics();
  consentGiven.value = true;
};

/*onMounted(() => {
  if (localStorage.getItem('consentGiven') === 'true') {
    initialize();
    consentGiven.value = true;
  }
});*/
</script>

<style scoped>
.consent {
  width: 100%;
}

button:hover {
  cursor: pointer;
}

button {
  margin: 0;
  margin-right: var(--spacing-3);
}

a {
  margin: 0;
}

a::after {
  bottom: 0;
}

@media (max-width: 767px) {
  .consent {
    height: 20vw;
  }
}
</style>
