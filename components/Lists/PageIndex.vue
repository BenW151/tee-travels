<template>
  <div class="page-index">
    <ul ref="linksContainer">
      <li v-for="label in labels" :key="label.link">
        <a
          :href="getLinkHref(label.link)"
          :target="isExternal(label.link) ? '_blank' : undefined"
          :rel="isExternal(label.link) ? 'noopener noreferrer' : undefined">
          {{ label.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
});

const linksContainer = ref(null);

const isExternal = (link) => {
  return /^(http|https|mailto):/.test(link);
};

const getLinkHref = (link) => {
  return isExternal(link) ? link : `#${link}`;
};

onMounted(() => {
  const links = linksContainer.value.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
</script>

<style scoped>
.page-index {
  grid-column: 1 / 17;
  margin: auto;
}

ul {
  display: flex;
  flex-direction: row;
  margin: 0;
}

li {
  margin: 0 var(--spacing-3);
  white-space: nowrap;
}

a {
  margin: 0;
  font-size: var(--font-size-XXS);
}

ul li:first-child {
  margin-left: 0;
}

ul li:last-child {
  margin-right: 0;
}

@media (max-width: 767px) {
  a {
    margin: 0;
    font-size: var(--font-size-XS);
  }

  li {
    margin: 0;
  }

  ul {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }

  .page-index {
    grid-column: 1 / 7;
    margin: 0;
  }
}
</style>
