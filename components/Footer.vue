<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer">
      <div class="work-with-me">
        <h5>Work With Me</h5>
        <p>
          For all inquiries please contact<br />
          me at
          <a
            href="mailto:contact@benward.io"
            aria-label="email address"
            class="underline-out email"
            >contact@benward.io</a
          >.
        </p>
      </div>
      <div class="location">
        <h5>Current Location</h5>
        <p class="time">
          Bali, Indonesia (CIT) <br />
          {{ currentTime }} | {{ currentDate }}
        </p>
      </div>
      <ListsLinkList
        class="nav-links"
        :links="[
          {
            url: '/',
            label: 'About',
            description: 'About Page',
          },
          {
            url: '/blog',
            label: 'Blog',
            description: 'Blog Page',
          },
          {
            url: '/destinations',
            label: 'Destinations',
            description: 'Destinations Page',
          },
          {
            url: '/contact',
            label: 'Contact',
            description: 'Contact Page',
          },
          {
            url: '/terms-and-conditions',
            label: 'Terms + Conditions',
            description: 'Terms + Conditions Page',
          },
          {
            url: '/privacy-policy',
            label: 'Privacy Policy',
            description: 'Privacy Policy',
          },
        ]" />
      <ListsLinkList
        class="socials"
        :links="[
          {
            url: 'https://www.instagram.com/benward.io/',
            label: 'Instagram',
            description: 'Instagram',
          },
          {
            url: 'https://linkedin.com/in/benw151',
            label: 'Facebook',
            description: 'LinkedIn',
          },
          {
            url: 'https://github.com/BenW151',
            label: 'Twitter',
            description: 'GitHub',
          },
        ]" />
      <p class="wordmark">Tee Travels</p>
      <p class="item copyright">Copyright ©2024</p>
    </LayoutGridContainer>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

import { ref, onMounted, onUnmounted } from "vue";

const currentTime = ref("");
const currentDate = ref("");

const updateTime = () => {
  const optionsTime = {
    timeZone: "Asia/Makassar",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23", // 24-hour format
  };
  const optionsDate = {
    timeZone: "Asia/Makassar",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const now = new Date();
  currentTime.value = now.toLocaleTimeString("en-AU", optionsTime);
  currentDate.value = now.toLocaleDateString("en-AU", optionsDate);
};

onMounted(() => {
  updateTime();
  const interval = setInterval(updateTime, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
footer {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 4vw;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer::after {
  content: "";
  width: calc(100% - (2 * var(--spacing-5)));
  height: 1px;
  background-color: var(--foreground-primary);
  border-radius: 2vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

footer .container {
  color: var(--foreground-primary);
  padding-bottom: var(--spacing-3);
  white-space: nowrap;
  background-image: linear-gradient(
      to bottom,
      var(--background-primary),
      rgba(255, 255, 255, 0)
    ),
      url("/images/forest.png");
  background-size: cover;
  background-position: 25% center;
}

.footer {
  width: 100%;
  padding-bottom: 5px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.footer .footer-contact {
  margin-right: auto;
}

.item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.back-to-top::after {
  display: none;
}

.back-to-top:hover {
  transform: translateY(-4px);
  cursor: pointer;
}

.copyright {
  grid-column: 15 / 17;
  grid-row: 2;
  margin-top: auto;
  color: var(--background-primary);
}

.work-with-me {
  grid-column: 1 / 6;
  grid-row: 1;
  margin-bottom: auto;
}

h5 {
  margin-bottom: var(--spacing-1);
}

.location {
  grid-column: 6 / 9;
  grid-row: 1;
  margin-bottom: auto;
}

.time {
  margin-bottom: 0;
}

.nav-links {
  grid-column: 11 / 13;
  grid-row: 1;
  margin-bottom: auto;
}

.socials {
  grid-column: 15 / 17;
  grid-row: 1;
  margin-bottom: auto;
}

.wordmark {
  grid-column: 1 / 15;
  grid-row: 2;
  transform: translateX(-0.5vw);
  font-size: var(--font-size-XXL);
  font-family: var(--font-family-primary);
  font-weight: 600;
  color: var(--background-primary);
  margin-bottom: 0;
  background: linear-gradient(
    0deg,
    var(--color-pink) 0%,
    var(--color-lilac) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 767px) {
  footer {
    height: 6vh;
  }

  footer::after {
    width: calc(100% - (2 * var(--spacing-4)));
  }

  .footer {
    align-items: start;
    margin: 0;
  }

  .footer .item {
    font-size: var(--font-size-XS);
  }

  .work-with-me {
    grid-column: 1 / 4;
    grid-row: 1;
  }

  .location {
    grid-column: 4 / 7;
    grid-row: 1;
  }

  .nav-links {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .socials {
    grid-column: 4 / 7;
    grid-row: 2;
  }

  .copyright {
    grid-column: 4 / 7;
    grid-row: 2;
    margin-top: auto;
    color: var(--foreground-primary);
  }

  .wordmark {
    grid-column: 1 / 7;
    grid-row: 3;
    font-size: 17vw;
  }

  h5 {
    margin-bottom: 0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>
