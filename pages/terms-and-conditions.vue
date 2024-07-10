<template>
  <div class="terms">
    <section id="terms">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Terms + Conditions</template>
          <template #body>
            <p>
              Welcome to Why Not Adventures! By using our website and booking
              our tours, you agree to comply with and be bound by the following
              terms and conditions. Please review them carefully.
            </p>

            <p>Last Updated: 22/05/2024</p>

            <h4>1. General Website Terms</h4>
            <p>
              By accessing and using this website, you agree to be bound by
              these terms and conditions.
            </p>
            <p>
              All content on this website, including but not limited to text,
              graphics, images, and information, is the property of Why Not
              Adventures and is protected by intellectual property laws.
            </p>
            <p>
              You may not use, reproduce, distribute, or display any content
              from this website without prior written permission from Why Not
              Adventures.
            </p>
            <p>
              We reserve the right to modify or terminate any part of the
              website or services without prior notice.
            </p>

            <h4>2. Booking and Payment</h4>
            <p>All bookings must be made through our website.</p>
            <p>
              A non-refundable deposit is required at the time of booking to
              secure your spot on the tour.
            </p>
            <p>
              The remaining balance is due 60 days before the tour start date.
              Failure to pay the remaining balance on time may result in the
              cancellation of your booking.
            </p>

            <h4>3. Refund Policy</h4>
            <p>
              The deposit is non-refundable unless the tour is cancelled by the
              operator.
            </p>
            <p>
              If you cancel your booking more than 60 days before the tour start
              date, you will receive a refund of the remaining balance, minus
              the non-refundable deposit.
            </p>
            <p>
              Cancellations made less than 60 days before the tour start date
              are non-refundable.
            </p>

            <h4>4. Insurance, Visas, and Flights</h4>
            <p>
              Why Not Adventures does not provide insurance, visas, or flights.
              It is your responsibility to arrange these.
            </p>
            <p>
              We strongly recommend purchasing travel insurance to cover any
              unforeseen circumstances.
            </p>
            <p>
              We are not responsible for any issues related to your insurance,
              visa, or flights that may prevent you from attending the tour.
            </p>

            <h4>5. Tour Participation</h4>
            <p>
              Participants must be in good health and physically able to
              participate in the tour activities.
            </p>
            <p>
              Any medical conditions or dietary restrictions must be disclosed
              to Why Not Adventures at the time of booking.
            </p>
            <p>
              We reserve the right to decline or remove any participant from the
              tour if their behavior is deemed disruptive or unsafe to
              themselves or others.
            </p>

            <h4>6. Changes and Cancellations by the Operator</h4>
            <p>
              Why Not Adventures reserves the right to make changes to the tour
              itinerary if necessary due to unforeseen circumstances.
            </p>
            <p>
              If a tour is cancelled by the operator, you will receive a full
              refund, including the deposit.
            </p>
            <p>
              We are not responsible for any additional expenses you may incur
              due to changes or cancellations, such as flight or accommodation
              costs.
            </p>

            <h4>7. Liability</h4>
            <p>
              Why Not Adventures is not liable for any personal injury, loss, or
              damage that may occur during the tour.
            </p>
            <p>
              Participants are responsible for their own safety and personal
              belongings at all times.
            </p>

            <h4>8. Privacy Policy</h4>
            <p>
              Your personal information will be kept confidential and used
              solely for the purpose of booking and managing your tour.
            </p>
            <p>
              We will not share your information with third parties without your
              consent, except as required by law.
            </p>

            <h4>9. Governing Law</h4>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the United Kingdom.
            </p>
            <p>
              Any disputes arising out of or in connection with these terms and
              conditions shall be subject to the exclusive jurisdiction of the
              courts of the United Kingdom.
            </p>

            <h4>10. Changes to Terms and Conditions</h4>
            <p>
              I reserve the right to update the Terms and Conditions from time
              to time. Any changes will be posted on this page with a revised
              date.
            </p>

            <p>
              By booking a tour with Why Not Adventures, you acknowledge that
              you have read, understood, and agree to these terms and
              conditions. If you have any questions or concerns, please contact
              us at
              <a
                href="mailto:myemail@email.com"
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
  title: "Terms + Conditions | Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Our Terms and Conditions: What You Need to Know Before Booking.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://whynotadventures.co.uk/terms-and-conditions",
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
#terms .paragraph-with-title:nth-of-type(1) {
  grid-column: 2 / 10;
  grid-row: 1;
}

@media (max-width: 767px) {
  #terms .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-top: 6vh;
  }
}
</style>
