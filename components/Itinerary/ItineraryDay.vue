<template>
  <section :class="['itinerary-day', textPosition]" :id="dayId">
    <LayoutGridContainer>
      <TextSectionLabel v-if="dayId === 'day1'" labelText="Detailed Itinerary" id="itinerary-detailed" />
      <ImageWithTextOverlay
        :imageUrl="imageUrl"
        :imageAlt="imageAlt"
        :overlayText="overlayText"
        :textPosition="imageTextPosition"
      />
      <TextParagraphWithTitle :subtitleTag="subtitleTag" :textPosition="textPosition">
        <template #title>{{ title }}</template>
        <template #body>
          <slot name="body"></slot>
        </template>
      </TextParagraphWithTitle>
    </LayoutGridContainer>
  </section>
</template>

<script>
export default {
  name: 'ItineraryDay',
  props: {
    dayId: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    overlayText: {
      type: String,
      required: true
    },
    textPosition: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right'].includes(value)
    },
    subtitleTag: {
      type: String,
      default: 'h4'
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    imageTextPosition() {
      return this.textPosition === 'left' ? 'right' : 'left';
    }
  }
}
</script>


<style scoped>
.left .paragraph-with-title {
  grid-column: 3 / 11;
  grid-row-start: 1;
}

.left .image {
  grid-column: 9 / 16;
  grid-row-start: 1;
  height: 40vw;
}

.right .paragraph-with-title {
  grid-column: 9 / 16;
  grid-row-start: 1;
}

.right .image {
  grid-column: 3 / 11;
  grid-row-start: 1;
  height: 40vw;
}
</style>