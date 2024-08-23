<template>
  <div>
    <section class="region-items">
      <LayoutGridContainer>
        <div class="region-item">
          <NuxtLink to="/destinations/europe" class="region-link">
            <!-- Container for image and title -->
            <div class="image-container">
              <!-- Display the image -->
              <img
                src="/images/index-background.png"
                alt="TODO Alt"
                class="region-image content-image" />
              <!-- Display the title -->
              <NuxtLink to="/destinations/europe" class="region-title">
                Europe
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
        <div class="region-item">
          <NuxtLink to="/destinations/asia" class="region-link">
            <!-- Container for image and title -->
            <div class="image-container">
              <!-- Display the image -->
              <img
                src="/images/index-background.png"
                alt="TODO Alt"
                class="region-image content-image" />
              <!-- Display the title -->
              <NuxtLink to="/destinations/asia" class="region-title">
                Asia
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
        <div class="region-item">
          <NuxtLink to="/destinations/north-america" class="region-link">
            <!-- Container for image and title -->
            <div class="image-container">
              <!-- Display the image -->
              <img
                src="/images/index-background.png"
                alt="TODO Alt"
                class="region-image content-image" />
              <!-- Display the title -->
              <NuxtLink to="/destinations/north-america" class="region-title">
                North America
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
        <div class="region-item">
          <NuxtLink to="/destinations/oceania" class="region-link">
            <!-- Container for image and title -->
            <div class="image-container">
              <!-- Display the image -->
              <img
                src="/images/index-background.png"
                alt="TODO Alt"
                class="region-image content-image" />
              <!-- Display the title -->
              <NuxtLink to="/destinations/oceania" class="region-title">
                Oceania
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.region-link {
  margin-bottom: 0;
  width: 100%;
  height: 100%;
}

.region-link::after {
  display: none;
}

.region-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  display: block;
  filter: brightness(0.6);
}

.region-item:hover .region-image {
  transform: scale(1.05);
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
}

.region-title {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: var(--font-size-M);
  font-family: var(--font-family-secondary);
  color: var(--color-white);
  margin: 0;
  pointer-events: none;
  text-align: center;
}

.region-item:nth-child(4n + 1) {
  grid-column: 1 / span 4;
}

.region-item:nth-child(4n + 2) {
  grid-column: 5 / span 4;
}

.region-item:nth-child(4n + 3) {
  grid-column: 9 / span 4;
}

.region-item:nth-child(4n + 4) {
  grid-column: 13 / span 4;
}

.index .container {
  padding-top: 0;
}

@media (max-width: 767px) {
  .image-container {
    height: 80vw;
  }

  .region-title {
    margin-bottom: 0;
  }

  .region-item:nth-child(2n + 1) {
    grid-column: 1 / 7;
  }

  .region-item:nth-child(2n) {
    grid-column: 1 / 7;
  }
}
</style>
