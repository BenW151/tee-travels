<template>
  <div>
    <body>
      <Nav />
      <transition name="page" mode="out-in">
        <NuxtPage />
      </transition>
      <Footer />
    </body>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
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
