<template>
  <div class="privacy-policy">
    <section id="policy">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Privacy Policy</template>
          <template #body>
            <p>
              Thank you for visiting my website. Your privacy is important to
              me, and I am committed to protecting your personal information.
              This Privacy Policy is designed to help you understand how I
              collect, use, and safeguard your information when you visit my
              website.
            </p>
            <p>Last Updated: 22/05/2024</p>
            <a
              href="#consent"
              class="underline-out"
              aria-label="Update Cookie Permissions"
              >Update Cookie Permissions</a
            >
            <h4>1. Information I Collect</h4>
            <p>
              I may collect both personally identifiable information (PII) and
              non-personally identifiable information when you visit my website.
              PII may include your name, email address, and other information
              that can be used to identify you personally. Non-personally
              identifiable information may include your IP address, browser
              type, and other technical details.
            </p>
            <h4>2. How I Use Your Information</h4>
            <p>
              I use the information I collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving my website</li>
              <li>Responding to your inquiries</li>
              <li>Sending newsletters or promotional materials</li>
              <li>Customizing your experience on my website</li>
            </ul>
            <h4>3. Cookies and Tracking Technologies</h4>
            <p>
              I may use cookies and similar tracking technologies to enhance
              your experience on my website. You can choose to disable cookies
              through your browser settings, but please note that some features
              of my website may not function properly if you do so.
            </p>
            <h4>4. Third-Party Disclosure</h4>
            <p>
              I do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent. However, I may
              share your information with trusted third parties who assist me in
              operating my website, conducting my business, or servicing you.
            </p>
            <h4>5. Security Measures</h4>
            <p>
              I take reasonable precautions to protect your information.
              However, no data transmission over the internet or electronic
              storage is completely secure, and I cannot guarantee absolute
              security.
            </p>
            <h4>6. Your Choices</h4>
            <p>
              You have the right to access, correct, or delete your personal
              information. You may also choose to opt-out of certain
              communications. If you have any concerns about your privacy,
              please contact me using the information provided below.
            </p>
            <h4>7. Changes to This Privacy Policy</h4>
            <p>
              I reserve the right to update my Privacy Policy from time to time.
              Any changes will be posted on this page with a revised date.
            </p>
            <h4>8. Contact Information</h4>
            <p>
              If you have any questions or concerns regarding my Privacy Policy,
              please contact me at myemail@email.com. By using my website, you
              consent to the terms outlined in this Privacy Policy
            </p>
          </template>
        </TextParagraphWithTitle>
        <AnalyticsUpdate />
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Why Not Adventures - Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Offering affordable tours to off the beaten track destinations",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/privacy-policy",
    },
  ],
});
</script>

<style scoped>
#policy .paragraph-with-title:nth-of-type(1) {
  grid-column: 2 / 10;
  grid-row: 1;
}

.consent {
  grid-column: 2 / 10;
  grid-row: 2;
}

@media (max-width: 767px) {
  #policy .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .consent {
    grid-column: 1 / 7;
    grid-row: 2;
  }
}
</style>
