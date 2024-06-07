<template>
  <div class="itinerary item">
    <TextReveal tag="h3">Itinerary</TextReveal>
    <div v-for="(day, index) in days" :key="index" class="day-item">
      <div class="dot-line">
        <div class="dot"></div>
        <div v-if="index < days.length - 1" class="line"></div>
      </div>
      <div class="day-content">
        <a :href="`#day${day.id}`">
          <h5>
            Day {{ index + 1 }} | {{ day.shortSummary }}
          </h5>
        </a>
        <p id="day{{day.id}}">{{ day.detailSummary }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  days: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.itinerary {
  display: flex;
  flex-direction: column;
}

.day-item {
  display: flex;
  align-items: flex-start;
}

.dot-line {
  display: flex;
  flex-direction: column;
  margin-right: 1vw;
  transform: translateY(1.2vw);
  overflow: hidden;
}

.dot {
  width: 9px;
  height: 1px;
  background-color: var(--font-color-primary);
}

.line {
  width: 1px;
  height: 8vw;
  background-color: var(--font-color-primary);
}

.day-content {
  flex-grow: 1;
}

.day-content h5 {
  margin-bottom: 0;
}

.lucide {
  width: var(--font-size-S);
}

@media (max-width: 767px) {
  .dot-line {
    transform: translateY(2.7vw);
  }

  .line {
    height: 22vw;
  }
}
</style>
