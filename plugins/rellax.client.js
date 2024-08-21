import Rellax from 'rellax';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('rellax', {
    mounted(el) {
      let rellaxInstance;

      const updateRellax = () => {
        // Destroy existing instance if it exists
        if (rellaxInstance) {
          rellaxInstance.destroy();
        }

        const windowWidth = window.innerWidth;
        const isMobile = windowWidth < 768;

        // Initialize Rellax only if not on mobile
      //  if (!isMobile) {
          const speed = el.getAttribute('data-rellax-speed') || 1; // Default speed if not specified
          rellaxInstance = new Rellax(el, {
            speed: parseInt(speed),
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false,
          });

          el.rellax = rellaxInstance;
        }
      ;

      // Initialize Rellax on mount
      updateRellax();

      // Re-initialize Rellax on window resize
      const resizeListener = () => {
        updateRellax();
      };

      window.addEventListener('resize', resizeListener);

      // Cleanup event listener on unmounted
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
