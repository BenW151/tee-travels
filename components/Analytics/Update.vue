<template>
  <div class="consent" id="consent">
    <h3>Update Cookie Settings</h3>
    <p>
      We'd like to set some cookies to understand how you use our website,
      remember your settings and improve services.
    </p>
    <div v-if="!consentGiven">
      <p>Cookies currently disabled</p>
      <button @click="grantConsent" class="underline-out">
        Grant Permission
      </button>
    </div>
    <div v-else>
      <p>Cookies currently enabled</p>
      <button @click="declineConsent" class="underline-out">
        Remove Permission
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { gtag, initialize, disableAnalytics, enableAnalytics } = useGtag();
const consentGiven = ref(false);

const grantConsent = () => {
  initialize();
  enableAnalytics();
  localStorage.setItem("consentGiven", "true");
  consentGiven.value = true;
};

const declineConsent = () => {
  disableAnalytics();
  localStorage.removeItem("consentGiven");
  consentGiven.value = false;
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

}
</style>
