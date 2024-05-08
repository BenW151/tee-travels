import Rellax from 'rellax';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('rellax', {
    mounted(el, binding) {
      // Check if the current device is a mobile device
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // Initialize Rellax only if not on mobile, using configuration from attributes or defaults
        const speed = el.getAttribute('data-rellax-speed') || 1; // Default speed if not specified
        const rellaxInstance = new Rellax(el, {
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
    },
    unmounted(el) {
      // Destroy the Rellax instance when the component is unmounted
      el.rellax && el.rellax.destroy();
    }
  });
});
