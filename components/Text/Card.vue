<template>
  <div class="item card">
    <NuxtImg :format="'webp'" alt="ALT TEXT" :src="logoSrc" />
    <div class="card-text">
      <h4>Ben Ward</h4>
      <p>Web Developer</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  logoColor: {
    type: String,
    default: "white",
  },
});

const logoSrc = computed(() => `/images/logo-${props.logoColor}.svg`);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  grid-column: span 7;
  align-items: center;
}

.card-text {
  align-self: center;
}

.card-author {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: var(--spacing-1);
}

.card img {
  width: 6vw;
  height: 6vw;
  margin-right: var(--spacing-2);
}

.card-text p {
  margin: 0;
}

.card .name {
  font-weight: bold;
}

@media (max-width: 767px) {
  .card {
    grid-column: span 6;
  }

  .card img {
    width: 10vw;
    height: 10vw;
  }
}
</style>
