<template>
  <div class="item accordion">
    <slot></slot>
  </div>

  <!-- !Component Code
    <Accordion>
    <AccordionItem title="Before You Arrive" index="1">
      <ul class="item accordion-content list">
        <li class="list-title">Default List</li>
        <li>List Item One</li>
        <li>List Item Two</li>
        <li>List Item Three</li>
        <li>List Item Four</li>
      </ul>
    </AccordionItem>
    <AccordionItem title="Your Visit" index="2">
      <ul class="item accordion-content list">
        <li class="list-title">Default List</li>
        <li>List Item One</li>
        <li>List Item Two</li>
        <li>List Item Three</li>
        <li>List Item Four</li>
      </ul>
    </AccordionItem>    
    -->
</template>

<script setup>
import { ref, provide } from "vue";

const activeIndex = ref(null);

provide("activeIndex", activeIndex);
provide("setActiveIndex", (index) => {
  activeIndex.value = index;
});
</script>

<style>
.accordion {
  grid-column: span 8;
}

@media (max-width: 767px) {
  .accordion {
    grid-column: span 6;
  }
}
</style>
