<template>
  <div :class="circleClasses" :style="circleStyle">
    <span class="circle-text" :class="{ 'is-visible': textVisible }">{{ hoveredText }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
const hoveredText = ref("");
const hoverClass = ref("");
const textVisible = ref(false);

const updatePosition = (event) => {
  targetX.value = event.clientX;
  targetY.value = event.clientY;
  let element = document.elementFromPoint(targetX.value, targetY.value);

  let found = false;

  while (element) {
    const tagName = element.tagName.toLowerCase();
    const classList = Array.from(element.classList);

    if (classList.includes("link")) {
      hoverClass.value = "link";
      found = true;
      break;
    } else if (classList.includes("accordion-item")) {
      hoveredText.value = "Read More";
      hoverClass.value = "accordion";
      found = true;
      break;
    } else if (classList.includes("get-in-touch")) {
      hoveredText.value = "Contact Me";
      hoverClass.value = "get-in-touch";
      found = true;
      break;
    } else {
      switch (tagName) {
        case "header":
          hoveredText.value = "Scroll";
          hoverClass.value = "header";
          found = true;
          break;
        default:
          hoveredText.value =
            element
              .closest("[data-hover-text]")
              ?.getAttribute("data-hover-text") || hoveredText.value;
          hoverClass.value = "";
          break;
      }
    }

    if (found) {
      break;
    }

    element = element.parentElement;
  }

  if (found) {
    textVisible.value = true;
  }
};

const smoothMovement = () => {
  currentX.value += (targetX.value - currentX.value) * 0.1;
  currentY.value += (targetY.value - currentY.value) * 0.1;
  requestAnimationFrame(smoothMovement);
};

onMounted(() => {
  window.addEventListener("mousemove", updatePosition);
  requestAnimationFrame(smoothMovement);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updatePosition);
});

const circleStyle = computed(() => ({
  left: `${currentX.value}px`,
  top: `${currentY.value}px`,
}));

const circleClasses = computed(() => {
  return ["circle", hoverClass.value];
});
</script>

<style scoped>
.circle {
  position: fixed;
  width: 8vw;
  height: 8vw;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: none;
  transition: opacity 0.5s ease;
  opacity: 0;
}

.circle-text {
  color: var(--font-color-white);
  font-size: var(--font-size-XS);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.circle-text.is-visible {
  opacity: 1;
  transition: opacity 0.5s ease;
}

/* Additional styles for different hover locations */
.header, .accordion, .get-in-touch {
  opacity: 1;
}
</style>
