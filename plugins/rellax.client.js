import Rellax from 'rellax';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('rellax', {
    mounted(el, binding) {
      let rellaxInstance;

      // Function to initialize Rellax
      const initRellax = () => {
        // Destroy existing instance if it exists
        if (rellaxInstance) {
          rellaxInstance.destroy();
        }

        // Check if the current device is a mobile device
        const isMobile = window.innerWidth < 768;

        // Initialize Rellax only if not on mobile, using configuration from attributes or defaults
        //if (!isMobile) {
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
       // }
      };

      // Initialize Rellax on mount
      initRellax();

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
