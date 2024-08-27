<template>
  <div>
    <section class="item-grid-items-text text-left">
      <LayoutGridContainer>
        <TextSectionLabel :labelText="labelText" />
        <TextParagraphWithTitle subtitle-tag="h3" text-position="left">
          <template #title>
            <slot name="title"></slot>
          </template>
          <template #body>
            <slot name="body"></slot>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>

    <section class="item-grid-items">
      <LayoutGridContainer>
        <slot />
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
defineProps({
  labelText: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.item-grid-items-text .container {
  padding-bottom: 0;
}

.item-grid-items .container {
  padding-top: 0;
}

@media (max-width: 767px) {
  .item-grid-items-text .paragraph-with-title {
    grid-column: 1 / 7;
  }
}
</style>
