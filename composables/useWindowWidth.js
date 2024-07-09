import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export default function useWindowWidth() {
  const windowWidth = ref(window.innerWidth);

  const isMobile = computed(() => windowWidth.value < 768);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return {
    windowWidth,
    isMobile,
  };
}
