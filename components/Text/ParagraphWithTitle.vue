<template>
  <div class="item paragraph-with-title">
    <div class="item-inner">
      <component :is="subtitleTag" class="subtitle">
        <template v-if="useTextReveal">
          <TextReveal>
            <slot name="title">Default Title</slot>
          </TextReveal>
        </template>
        <template v-else>
          <slot name="title">Default Title</slot>
        </template>
      </component>

      <slot name="body">
        <p class="body">Default paragraph content.</p>
      </slot>

      <a v-if="linkUrl" :href="linkUrl" class="link underline-out">
        <slot name="link-text">View More</slot>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subtitleTag: {
    type: String,
    default: 'h3', 
  },
  linkUrl: String, 
  useTextReveal: {
    type: Boolean,
    default: true // Use TextReveal by default
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
