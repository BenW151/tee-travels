<template>
  <div>
    <Nav />
    <transition name="page" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
        <Footer />
      </div>
    </transition>
  </div>
</template>

<style>
.page-enter-active {
  transition: all 0.3s ease-in-out;
}

.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from {
  filter: brightness(0%);
  transform: translateY(-2vh);
}

.page-leave-to {
  filter: brightness(0%);
  transform: translateY(-2vh);
}

.page-enter-to,
.page-leave-from {
  filter: brightness(100%);
  transform: translateY(0);
}
</style>
