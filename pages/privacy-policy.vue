<template>
  <div class="privacy-policy">
    <section id="policy">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Privacy Policy</template>
          <template #body>
            <p>
              Thank you for visiting our website. Your privacy is important to
              us, and we are committed to protecting your personal information.
              This Privacy Policy is designed to help you understand how we
              collect, use, and safeguard your information when you visit our
              website.
            </p>

            <p>Last Updated: 22/07/2024</p>

            <h4>1. Information We Collect</h4>

            <p>
              We may collect both personally identifiable information (PII) and
              non-personally identifiable information when you visit our
              website. PII may include your name, email address, and other
              information that can be used to identify you personally.
              Non-personally identifiable information may include your IP
              address, browser type, and other technical details.
            </p>

            <h4>2. How We Use Your Information</h4>

            <p>
              We use the information we collect for various purposes, including:
            </p>

            <ListsDefaultList
              bullets="true"
              :items="[
                { id: 1, text: 'Providing and improving our website' },
                { id: 2, text: 'Responding to your inquiries' },
                { id: 3, text: 'Sending newsletters or promotional materials' },
                { id: 4, text: 'Customizing your experience on our website' },
              ]" />

            <h4>3. Legal Basis for Processing</h4>

            <p>
              Under the General Data Protection Regulation (GDPR), we are
              required to inform you about the legal grounds on which we process
              your personal data. These legal bases include:
            </p>

            <ListsDefaultList
              bullets="true"
              :items="[
                { id: 1, text: 'Your consent' },
                { id: 2, text: 'The performance of a contract' },
                {
                  id: 3,
                  text: 'Our legitimate interests, which include operating our business, improving our services, and marketing our products',
                },
                { id: 4, text: 'Compliance with legal obligations' },
              ]" />

            <h4>4. Cookies and Tracking Technologies</h4>

            <p>
              We may use cookies and similar tracking technologies to enhance
              your experience on our website. You can choose to disable cookies
              through your browser settings, but please note that some features
              of our website may not function properly if you do so.
            </p>

            <h4>5. Third-Party Disclosure</h4>

            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent. However, we may
              share your information with trusted third parties who assist us in
              operating our website, conducting our business, or servicing you.
            </p>

            <h4>6. Data Transfers</h4>

            <p>
              If we transfer your data outside the EU, we will ensure that
              appropriate safeguards are in place to protect your data, such as
              Standard Contractual Clauses or equivalent protection measures.
            </p>

            <h4>7. Data Retention</h4>

            <p>
              We will retain your personal data only for as long as is necessary
              for the purposes set out in this Privacy Policy. The criteria used
              to determine the retention period include the nature and
              sensitivity of the data, the purposes for processing, and legal
              requirements.
            </p>

            <h4>8. Data Breach Notification</h4>

            <p>
              In the event of a data breach that is likely to result in a risk
              to your rights and freedoms, we will notify you and the relevant
              data protection authorities as required by law.
            </p>

            <h4>9. Security Measures</h4>

            <p>
              We take reasonable precautions to protect your information.
              However, no data transmission over the internet or electronic
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h4>10. Your Choices</h4>

            <p>
              You have the right to access, correct, or delete your personal
              information. You may also choose to opt-out of certain
              communications. If you have any concerns about your privacy,
              please contact us using the information provided below.
            </p>

            <h4>11. Automated Decision-Making and Profiling</h4>

            <p>
              We do not engage in automated decision-making or profiling that
              has legal or similarly significant effects on you.
            </p>

            <h4>12. Changes to This Privacy Policy</h4>

            <p>
              We reserve the right to update our Privacy Policy from time to
              time. Any changes will be posted on this page with a revised date.
            </p>

            <h4>13. Contact Information</h4>

            <p>
              By using our website, you consent to the terms outlined in this
              Privacy Policy. If you have any questions or concerns regarding
              our Privacy Policy, please contact us at
              <a
                href="mailto:contact@whynotadventures.co.uk"
                aria-label="email address"
                class="underline-out"
                >contact@whynotadventures.co.uk</a
              >.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Privacy Policy | Tee Travels",
  meta: [
    {
      name: "description",
      content:
        "Your Privacy Matters: How Tee Travels Protects Your Information.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/privacy-policy",
    },
  ],
});

import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  document.body.classList.add("scrolled-past-header");
});

onBeforeUnmount(() => {
  document.body.classList.remove("scrolled-past-header");
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
    margin-top: 6vh;
  }

  .consent {
    grid-column: 1 / 7;
    grid-row: 2;
  }
}
</style>
