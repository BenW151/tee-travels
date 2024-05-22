<template>
  <div class="item card">
    <div class="card-text">
      <p class="quote">{{ quote }}</p>
      <div class="author">
        <NuxtImg :format="'webp'" alt="ALT TEXT" :src="imgSrc" />
        <div>
          <p class="name">{{ name }}</p>
          <p class="position">{{ position }}</p>
        </div>
      </div>
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

.author {
  display: flex;
  flex-direction: row;
  align-items: center
}

.name {
  font-weight: bold;
}

.author p {
  margin-bottom: 0;
}

.quote {
  font-style: italic;
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
