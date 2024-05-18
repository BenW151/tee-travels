<template>
  <div class="item card">
    <NuxtImg :format="'webp'" alt="ALT TEXT" :src="imgSrc" />
    <div class="card-text">
      <h4>{{ name }}</h4>
      <h5>{{ position }}</h5>
      <p>{{ quote }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  quote: String,
  position: String,
  imgSrc: {
    type: String,
  },
});

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  grid-column: span 7;
}

.card-text {
  align-self: center;
}

.card img {
  width: 6vw;
  height: 6vw;
  margin-right: var(--spacing-3);
}

.card-text p {
  margin: 0;
  font-style: italic
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
