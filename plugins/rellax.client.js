import Rellax from 'rellax';
import { onMounted, onBeforeUnmount, watch } from 'vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('rellax', {
    mounted(el, binding) {
      let rellaxInstance;

      const { windowWidth, isMobile } = useWindowWidth();

      // Function to initialize Rellax
      const initRellax = () => {
        // Destroy existing instance if it exists
        if (rellaxInstance) {
          rellaxInstance.destroy();
        }

        // Initialize Rellax only if not on mobile
        if (!isMobile.value) {
          const speed = el.getAttribute('data-rellax-speed') || 1; // Default speed if not specified
          rellaxInstance = new Rellax(el, {
            speed: parseInt(speed),
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
          });

          // Attach the instance to the element for potential future use or destruction
          el.rellax = rellaxInstance;
        }
      };

      // Initialize Rellax on mount
      initRellax();

      // Watch for changes in isMobile and windowWidth to reinitialize Rellax
      watch([isMobile, windowWidth], () => {
        initRellax();
      });

      // Re-initialize Rellax on window resize
      const resizeListener = () => {
        initRellax();
      };

      window.addEventListener('resize', resizeListener);

      // Cleanup event listener on unmount
      el.cleanupRellax = () => {
        window.removeEventListener('resize', resizeListener);
        if (rellaxInstance) {
          rellaxInstance.destroy();
        }
      };
    },
    unmounted(el) {
      // Call cleanup function to remove event listener and destroy Rellax instance
      el.cleanupRellax && el.cleanupRellax();
    }
  });
});
