<template>
  <div class="itinerary item">
    <div v-for="(day, index) in days" :key="index" class="day-item">
      <div class="dot-line">
        <div class="dot"></div>
        <div v-if="index < days.length - 1" class="line"></div>
      </div>
      <div class="day-content">
        <a :href="`#day${day.id}`" class="underline-out-icon">
          <h5>
            <LucideArrowDown/>Day {{ index + 1 }} | {{ day.shortSummary }}
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
  align-items: center;
  margin-right: 10px;
  transform: translateY(0.8vw);
  overflow: hidden;
  width: 3vw;
}

.dot {
  width: 0.8vw;
  height: 0.8vw;
  background-color: var(--font-color-primary);
  border-radius: 50%;
}

.line {
  width: 1px;
  height: 10vw;
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
    width: 10vw;
    transform: translateY(1.5vw);
  }

  .dot {
    width: 2vw;
    height: 2vw;
  }

  .line {
    height: 30vw;
  }
}
</style>
