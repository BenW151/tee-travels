<template>
  <div class="dropdown" ref="dropdown">
    <a
      class="dropdown-open link"
      @click="toggleDropdown"
      :class="{ active: isActive }">
      <slot name="button">Dropdown</slot>
    </a>
    <div
      class="dropdown-content"
      :class="{ show: isActive }"
      ref="dropdownContent"
      :style="dropdownStyle">
      <ListsLinkList :links="listLinks" @click="toggleDropdown" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed, nextTick } from "vue";

const props = defineProps({
  listTitle: {
    type: String,
    default: "Dropdown List",
  },
  listLinks: {
    type: Array,
    default: () => [],
  },
});

const isActive = ref(false);
const dropdown = ref(null);
const dropdownContent = ref(null);
const dropdownStyle = ref({});

const toggleDropdown = async () => {
  isActive.value = !isActive.value;
  await nextTick(); // Wait for DOM update

  // Dynamically set the max-height based on content height
  if (isActive.value) {
    dropdownStyle.value = {
      maxHeight: `${dropdownContent.value.scrollHeight}px`,
    };
  } else {
    dropdownStyle.value = {
      maxHeight: '0',
    };
  }
};

const closeDropdown = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isActive.value = false;
    dropdownStyle.value = {
      maxHeight: '0',
    };
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
.dropdown {
  grid-column: span 2;
}

.dropdown-open {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
  color: var(--background-primary);
  align-items: center;
  width: 7vw;
}

body.scrolled-past-header .dropdown-open {
  color: var(--foreground-primary);
}

.dropdown-open::after {
  display: none;
}

.dropdown-content {
  display: block;
  max-height: 0;
  opacity: 0;
  overflow: hidden; 
  width: 9vw;
  z-index: 999;
  left: 0;
  transform: translateY(var(--spacing-1));
  transition: max-height 0.5s ease, opacity 0.1s ease;
}

.dropdown-content.show {
  opacity: 1;
  overflow: visible; 
  transition: max-height 0.5s ease, 0.5s opacity 0.5s ease;
}
</style>

<style>
.dropdown-content a.link,
nav .lucide {
  color: var(--background-primary);
  transition: transform 0.1s;
}

.dropdown-content a.link::after {
  background-color: var(--background-primary);
}

body.scrolled-past-header .dropdown-content a.link,
body.scrolled-past-header nav .lucide {
  color: var(--foreground-primary);
  transition: color 0.2s linear, background-color 0.2s linear, transform 0.1s;
}

body.scrolled-past-header .dropdown-content a.link::after {
  background-color: var(--foreground-primary);
}

.dropdown-open.active .lucide {
  transform: rotate(-180deg);
}
</style>
