<template>
  <div>
    <MouseFollower v-if="!isMobile" />
    <Nav />
    <AnalyticsConsent />
    <transition name="page" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
        <Footer />
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMobile = computed(() => window.innerWidth < 768);
</script>


<style>
.page-enter-active,
.page-leave-active {
  transition: filter 0.3s linear;
}

.page-enter-from {
  filter: brightness(0%);
}

.page-leave-to {
  filter: brightness(0%);
}

.page-enter-to,
.page-leave-from {
  filter: brightness(100%);
}
</style>
