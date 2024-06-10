<template>
  <div>
    <MouseFollower v-if="!isMobile" />
    <Nav />
    <transition name="page" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
        <Consent />
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
  transition: all 0.3s linear;
}

.page-enter-from {
  filter: brightness(0%);
  transform: translateY(0vh);
}

.page-leave-to {
  filter: brightness(0%);
  transform: translateY(0vh);
}

.page-enter-to,
.page-leave-from {
  filter: brightness(100%);
  transform: translateY(0);
}
</style>
