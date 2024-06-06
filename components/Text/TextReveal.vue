<template>
  <component :is="tag" class="text-reveal" ref="textContainer">
    <slot></slot>
  </component>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";

// Define the component props
const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

// Create a ref for the text container
const textContainer = ref(null);

// Lifecycle hook to run code after the component is mounted
onMounted(() => {
  // Check if the text container is present
  if (textContainer.value) {
    // Prepare the text for animation
    prepareText(textContainer.value);
    
    // Create an IntersectionObserver to observe when the text container comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the text when the container is in view
            animateText(entry.target);
            // Stop observing the container after the animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed for when the animation should trigger
      }
    );

    // Start observing the text container
    observer.observe(textContainer.value);
  }
});

// Function to prepare the text for animation
function prepareText(container) {
  // Get all child nodes of the container
  const childNodes = Array.from(container.childNodes);
  // Clear the initial content of the container
  container.innerHTML = "";

  // Loop through each child node
  childNodes.forEach((node) => {
    // If the node is a text node
    if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent.trim();
      if (textContent) {
        // Split the text into lines
        const lines = textContent.split(/\r?\n/);
        lines.forEach((line) => {
          if (line.trim()) {
            // Create a container for each line
            const lineContainer = document.createElement("div");
            lineContainer.className = "line-container";
            // Split the line into words
            const words = line.trim().split(/\s+/);
            words.forEach((word, index) => {
              // Create a container for each word
              const wordContainer = document.createElement("div");
              wordContainer.className = "reveal-mask";
              const wordSpan = document.createElement("span");
              wordSpan.className = "word";
              // Add a space after each word except the last
              wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
              wordContainer.appendChild(wordSpan);
              lineContainer.appendChild(wordContainer);
            });
            // Add the line container to the main container
            container.appendChild(lineContainer);
          }
        });
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // If the node is an element node, handle it similarly to text nodes
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

// Function to animate the text
function animateText(container) {
  // Get all word elements in the container
  const words = container.querySelectorAll(".word");
  words.forEach((word, index) => {
    // Apply animation to each word with a delay
    setTimeout(() => {
      word.style.animation = "reveal 0.6s forwards";
    }, 50 * index); // Delay can be adjusted
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
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
}

.text-reveal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  vertical-align: middle; /* Ensure alignment with icons */
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
