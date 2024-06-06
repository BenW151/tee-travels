<template>
  <component :is="tag" class="text-reveal" ref="textContainer">
    <slot></slot>
  </component>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const textContainer = ref(null);

onMounted(() => {
  if (textContainer.value) {
    prepareText(textContainer.value);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed for when the animation should trigger
      }
    );

    observer.observe(textContainer.value);
  }
});

function prepareText(container) {
  const childNodes = Array.from(container.childNodes);
  container.innerHTML = ""; // Clear initial content

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent.trim();
      if (textContent) {
        const lines = textContent.split(/\r?\n/);
        lines.forEach((line) => {
          if (line.trim()) {
            const lineContainer = document.createElement("div");
            lineContainer.className = "line-container";
            const words = line.trim().split(/\s+/);
            words.forEach((word, index) => {
              const wordContainer = document.createElement("div");
              wordContainer.className = "reveal-mask";
              const wordSpan = document.createElement("span");
              wordSpan.className = "word";
              // Add a space after each word except the last
              wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
              wordContainer.appendChild(wordSpan);
              lineContainer.appendChild(wordContainer);
            });
            container.appendChild(lineContainer);
          }
        });
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const lineContainer = document.createElement("div");
      lineContainer.className = "line-container";
      const wordContainer = document.createElement("div");
      wordContainer.className = "reveal-mask";
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";
      wordSpan.appendChild(node.cloneNode(true));
      wordContainer.appendChild(wordSpan);
      lineContainer.appendChild(wordContainer);
      container.appendChild(lineContainer);
    }
  });
}

function animateText(container) {
  const lines = container.querySelectorAll(".line-container");
  lines.forEach((line, index) => {
    setTimeout(() => {
      const words = line.querySelectorAll(".word");
      words.forEach((word) => {
        word.style.animation = "reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) forwards";
      });
    }, 100 * index); // Delay each line
  });
}
</script>

<style>
@keyframes reveal {
  0% {
    transform: translateY(100%) rotateX(90deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


.text-reveal {
  display: flex;
  flex-direction: column;
}

.reveal-mask {
  overflow: hidden;
  display: inline-block;
  height: auto;
}

.word {
  display: inline-block;
  transform: translateY(100%) rotateX(90deg);
  opacity: 0;
  animation: none;
  white-space: pre;
  vertical-align: middle;
}

.line-container {
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.text-reveal svg {
  margin-right: var(--spacing-2);
  height: 100%;
}

@media (max-width: 767px) {
  .text-reveal {
    grid-column: span 6;
  }
}
</style>