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
      v-show="isActive">
      <ListsLinkList :links="listLinks" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";

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

const toggleDropdown = () => {
  isActive.value = !isActive.value;
};

const closeDropdown = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isActive.value = false;
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
}

body.scrolled-past-header .dropdown-open {
  color: var(--foreground-primary);
}

.dropdown-open::after {
  display: none;
}

.dropdown-content {
  display: block;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  min-width: 15vw;
  z-index: 999;
  left: 0;
  transform: translateY(var(--spacing-1));
  transition: all 0.1s;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 2.5vw;
}

.dropdown-content.show {
  opacity: 1;
  visibility: visible;
  /*transform: translateY(0);*/
  transition: opacity 0.5s, visibility 0.2s, transform 0.5s;
}

</style>

<style>
.dropdown-content a.link {
  color: var(--background-primary);
}

.dropdown-content a.link::after {
  background-color: var(--background-primary);
}

body.scrolled-past-header .dropdown-content a.link {
  color: var(--foreground-primary);
}

body.scrolled-past-header .dropdown-content a.link::after {
  background-color: var(--foreground-primary);
}

</style>
