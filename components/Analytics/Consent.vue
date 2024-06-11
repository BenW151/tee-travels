<template>
  <div :class="['consent', { hidden: consentGiven }]">
    <p>
      We'd like to set some
      <NuxtLink to="/privacy-policy" class="link underline-out"
        >cookies</NuxtLink
      >
      to understand how you use our website, remember your settings and improve
      services.
    </p>
    <button @click="grantConsent">Accept</button>
    <button @click="declineConsent">Decline</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { gtag, initialize, disableAnalytics } = useGtag();
const consentGiven = ref(false);
const optionSelected = ref(false);

const grantConsent = () => {
  initialize();
  localStorage.setItem("consentGiven", "true");
  consentGiven.value = true;
  optionSelected.value = true;
};

const declineConsent = () => {
  disableAnalytics();
  localStorage.removeItem("consentGiven");
  consentGiven.value = false;
  optionSelected.value = true;
};

onMounted(() => {
  if (localStorage.getItem("consentGiven") === "true") {
    initialize();
    consentGiven.value = true;
  }
});
</script>

<style scoped>
.consent {
  position: fixed;
  width: 100%;
  height: 3vw;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  opacity: 0;
  pointer-events: none;
}

body.scrolled-from-top .consent {
  opacity: 1;
  pointer-events: all;
}

body.scrolled-from-top .consent.hidden {
  opacity: 0;
  pointer-events: none;
}

button:hover {
  cursor: pointer;
}

button,
p {
  margin: 0;
  margin-left: var(--spacing-3);
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
