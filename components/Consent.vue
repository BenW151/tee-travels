<template>
  <div class="consent">
    <p>Can we track your data?</p>
    <button @click="initialize()">Grant Consent</button>
  </div>
</template>

<script setup>
const { gtag, initialize } = useGtag();
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
  background: var(--color-white);
}

button:hover {
  cursor: pointer;
}

button, p {
  margin: 0;
  margin-left: var(--spacing-3);
  margin-right: var(--spacing-3);
}

@media (max-width: 767px) {
  .consent {
    height: 10vw;
  }
}
</style>
