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

            <p>Last Updated: 22/07/2024</p>

            <h4>1. Definitions</h4>

            <p>
              In these Terms and Conditions, the following words shall have
              their associated meanings:
            </p>

            <p>
              <strong>"Company," "our," "us,"</strong> or
              <strong>"we"</strong> means Why Not Adventures.
            </p>
            <p>
              <strong>"Contract"</strong> means the agreement between us and you
              which comprises of these Terms and Conditions, the Tour itinerary,
              the booking form, and the Travel Risk Acknowledgement.
            </p>
            <p>
              <strong>"Departure Date"</strong> means the date of commencement
              of the Tour.
            </p>
            <p>
              <strong>"Terms and Conditions"</strong> means these terms and
              conditions.
            </p>
            <p>
              <strong>"Tour"</strong> means the tour and related activities as
              set out in the tour itinerary.
            </p>
            <p>
              <strong>"Traveller"</strong> or <strong>"you"</strong> means the
              person whose signature and details appear on the booking form.
            </p>
            <p>
              <strong>"Unforeseen Event"</strong> means an event or circumstance
              that is outside of either party’s reasonable control.
            </p>

            <h4>2. General Website Terms</h4>

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

            <h4>3. Information About Us and How to Contact Us</h4>

            <p>
              We are Why Not Adventures, a company registered in the UK. Company
              No. 15826857.
            </p>

            <p>
              You can contact us by writing to us at
              contact@whynotadventures.co.uk.
            </p>

            <p>
              If we have to contact you, we will do so by telephone or by
              writing to you at the email address or postal address you provided
              to us in your application booking form. “Writing” includes emails.
              When we use the words “writing” or “written” in these Terms and
              Conditions, this includes emails.
            </p>

            <h4>4. Our Contract with You</h4>
            <p>
              Travellers can book their spot on our tours directly through our
              website by paying the non-refundable deposit.
            </p>
            <p>
              A binding contract will come into existence between you and us
              once the deposit has been successfully paid and we have sent you a
              confirmation email.
            </p>
            <p>Our acceptance of your booking is conditional upon you:</p>

            <ListsDefaultList
              bullets
              :items="[
                {
                  id: 1,
                  text: 'Confirming your acceptance of these Terms and Conditions;',
                },
                {
                  id: 2,
                  text: 'Paying the non-refundable deposit as specified per person intending to travel on the Tour; and',
                },
                {
                  id: 3,
                  text: 'agreeing to and signing the Travel Risk Acknowledgement and Waiver for your Tour.',
                },
              ]" />

            <p>
              We reserve the right, at our sole discretion, to refund your
              deposit and cancel your booking. If we choose to do so, we will
              inform you as soon as possible and refund the deposit paid.
            </p>

            <h4>5. Booking and Payment</h4>
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
            <p>
              We reserve the right to cancel your booking and refund your
              deposit at our discretion.
            </p>

            <h4>6. Refund Policy</h4>

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

            <h4>7. Passports, Visas, and Health Matters</h4>

            <p>
              Why Not Adventures does not provide insurance, visas, or flights.
              It is your responsibility to arrange these.
            </p>

            <p>
              We strongly recommend purchasing travel insurance to cover any
              unforeseen circumstances.
            </p>

            <p>
              We will use reasonable endeavours to provide support to you on all
              visa applications to ensure you are able to travel with us without
              issue. However, it remains your responsibility to ensure that
              visas are arranged prior to the Departure Date.
            </p>

            <p>
              All required medical vaccinations, documents, health checks, and
              passports or similar are your responsibility and must be arranged
              prior to the Departure Date. We are not responsible for any issues
              related to your insurance, visa, or flights that may prevent you
              from attending the tour.
            </p>

            <h4>8. Foreign and Commonwealth Office Advice</h4>

            <p>
              You are responsible for your own safety awareness specific to the
              regions in which you travel.
            </p>

            <p>
              While we will endeavour to inform travellers of relevant changes
              to UK Foreign and Commonwealth Office Travel Advice (the “FCO”),
              it is your responsibility to know what the FCO travel advice to a
              certain country or region is and to ensure that you have purchased
              insurance relative to the risk.
            </p>

            <p>
              We will not normally cancel a Tour as a result of an alteration in
              FCO travel advice.
            </p>

            <p>We accept no liability if you:</p>

            <ListsDefaultList
              bullets
              :items="[
                {
                  id: 1,
                  text: 'choose to cancel your Tour because of FCO or other advice; or',
                },
                {
                  id: 2,
                  text: 'are not adequately insured to travel.',
                },
              ]" />

            <h4>9. Tour Participation</h4>

            <p>
              Participants must be between the ages of 18 and 40 at the time of
              the tour's Departure Date. By booking a tour with Why Not
              Adventures, you confirm that you meet this age requirement. We
              reserve the right to verify your age and to decline participation
              if this condition is not met.
            </p>

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

            <h4>10. Changes and Cancellations by the Operator</h4>

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

            <p>
              A minimum number of travellers to make the Tour viable will be
              determined by us in advance of the Tour. You will be notified 28
              days prior to the Departure Date should we need to cancel the Tour
              due to insufficient numbers. In the event that this occurs, all
              funds paid to us will be reimbursed to you.
            </p>

            <h4>11. Transfer of Tour by the Traveller</h4>

            <p>
              If you wish to transfer from your booked Tour to another available
              tour with us, the request must be sent in writing and if accepted
              by us, a transfer fee of £100 is payable along with any additional
              costs incurred in the transfer. Any requests to transfer to
              another tour must be received by us no later than 60 days before
              the Departure Date of the Tour you already have booked.
            </p>

            <p>
              Any transfer requests made after the 60-day period specified will
              be subject to our discretion. If agreed to, a £100 transfer fee is
              payable along with any additional costs incurred by the transfer.
            </p>

            <p>
              You may request to transfer your booking to a person who satisfies
              all the conditions applicable to that Tour, having first given us
              notice in writing as soon as possible and in any event 30 days
              before the Departure Date for that Tour. Requests will be subject
              to our discretion. If the request is accepted, before transfer can
              take place, the transferee must:
            </p>

            <ListsDefaultList
              bullets
              :items="[
                {
                  id: 1,
                  text: 'enter into a valid contract with us in relation to the Tour; and ',
                },
                {
                  id: 2,
                  text: 'pay a transfer fee of £100 along with any additional costs incurred on making the transfer.',
                },
              ]" />

            <h4>12. Changes to the Itinerary by the Company</h4>

            <p>
              We shall provide the itinerary for your Tour in advance of the
              Departure Date. You agree that the nature of tours offered by us
              requires a degree of flexibility. Therefore the contents and
              timings of the Tour itinerary (including the arrival time at the
              Tour’s destination, changes in route or method of transport) may
              be affected as a result of an Unforeseen Event, weather, local
              political conditions, natural disaster, strikes, entry or border
              difficulties, mechanical breakdowns, flight cancellations,
              sickness, or other unforeseen circumstances.
            </p>

            <p>
              Occasionally insignificant changes to the published itinerary for
              a Tour may occur without prior notice, which we reserve the right
              to do at any time. If we need to make a significant change to the
              itinerary prior to the Departure Date then:
            </p>

            <ListsDefaultList
              bullets
              :items="[
                {
                  id: 1,
                  text: 'we will notify you in writing of any major changes made to the relevant Tour itinerary; and ',
                },
                {
                  id: 2,
                  text: 'you have the right to accept the alterations, transfer to an alternative tour of equal financial cost, or cancel the Contract and Tour for a full refund, provided the change is not due to any of the events listed above.',
                },
              ]" />

            <p>
              If we change the itinerary prior to or after the Departure Date,
              we reserve the right to alter itineraries without refund if such
              alterations are deemed by us to be in the interest of the
              Traveller. No refund or compensation will be due for unused hotel
              accommodation, air tickets, or any other unused services on a
              Tour.
            </p>

            <h4>13. Liability</h4>

            <p>
              Why Not Adventures is not liable for any personal injury, loss, or
              damage that may occur during the tour.
            </p>

            <p>
              Participants are responsible for their own safety and personal
              belongings at all times.
            </p>

            <h4>14. Insurance</h4>

            <p>
              We do not provide insurance. It is your responsibility to effect
              and maintain sufficient and appropriate cancellation, curtailment,
              medical expenses, and third-party liability insurance.
            </p>

            <p>
              You must also effect and maintain sufficient and appropriate
              insurance to cover loss of, damage to, or theft of your baggage.
            </p>

            <p>
              All insurance purchased must be relevant to the region of travel,
              particularly covering medical expenses, repatriation, and
              evacuation by any means necessary.
            </p>

            <p>
              A copy of the current insurance policy must be produced to us
              prior to the Departure Date and a further copy given to the Tour
              Leader on arrival in-country. If you fail to provide evidence of
              adequate insurance prior to the Departure Date, we reserve the
              right to deny your participation in the Tour, with no right to
              refund.
            </p>

            <p>
              Any insurance purchased should cover the scheduled duration of the
              Tour and at least one additional day to account for any
              alterations to the itinerary outside of our control.
            </p>

            <h4>15. Acceptance of Risk</h4>

            <p>
              You acknowledge and accept the significant risk inherent in
              travelling on a Tour. By agreeing to these Terms & Conditions, you
              accept the limitations of our liability set out in these Terms &
              Conditions as being reasonable.
            </p>

            <p>
              We reserve the right at any time to require you to produce a
              doctor’s certificate certifying that you are fit to participate in
              the Tour.
            </p>

            <p>
              You agree to sign our ‘Travel Risk Acknowledgement and Waiver’
              form on acceptance of your application to a Tour with us.
            </p>

            <h4>16. Company Tour Leader</h4>

            <p>
              We will appoint the tour leader(s) who will represent us whilst on
              the Tour and shall have absolute authority to make decisions to
              ensure the satisfactory fulfilment of the Tour.
            </p>

            <p>
              You agree to accept as final all decisions made by a Tour Leader
              whilst on the Tour. All decisions made by a Tour Leader will be
              done so in the interest of the travelling group.
            </p>

            <p>
              If your physical condition or behaviour is deemed by a Tour Leader
              to have a negative effect on your well-being or that of the group,
              you may be asked to leave the Tour without refund or other
              compensation.
            </p>

            <h4>17. Compliance with Legislation</h4>

            <p>
              You must comply with all laws of the country you are visiting. You
              will comply at your expense and liability with all legislation,
              visa requirements, and immigration, customs, and foreign exchange
              regulations of the countries visited.
            </p>

            <p>
              We reserve the right, should you fail to comply or break the
              contract as per these Terms and Conditions, to ask you to leave
              the Tour with no further recourse, refund, or compensation.
            </p>

            <h4>18. Complaints</h4>

            <p>
              We will endeavour to resolve complaints as they occur. If you have
              a complaint arising before the Departure Date, please contact us.
            </p>

            <p>
              If you have a complaint about the Tour following the Departure
              Date:
            </p>

            <ListsDefaultList
              bullets
              :items="[
                {
                  id: 1,
                  text: 'At the earliest opportunity, communicate any perceived failure, whether by us or any of our suppliers, to the Tour Leader. The Tour Leader and you shall then use reasonable efforts to resolve the issue.',
                },
                {
                  id: 2,
                  text: 'In the event that the complaint remains unresolved with the Tour Leader, set out your complaint in writing and send it to us by email at contact@whynotadventures.co.uk within 7 days of completion of the Tour.',
                },
              ]" />

            <p>
              You agree that this procedure is reasonable and that any failure
              to adhere to it will result in the complaint no longer being
              upheld.
            </p>

            <h4>19. Privacy Policy</h4>

            <p>
              Your personal information will be kept confidential and used
              solely for the purpose of booking and managing your tour. We will
              not share your information with third parties without your
              consent, except as required by law.
            </p>

            <h4>20. Governing Law</h4>

            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the United Kingdom.
            </p>

            <p>
              Any disputes arising out of or in connection with these terms and
              conditions shall be subject to the exclusive jurisdiction of the
              courts of the United Kingdom.
            </p>

            <h4>21. Changes to Terms and Conditions</h4>

            <p>
              We reserve the right to update the Terms and Conditions from time
              to time. Any changes will be posted on this page with a revised
              date.
            </p>

            <p>
              By booking a tour with Why Not Adventures, you acknowledge that
              you have read, understood, and agree to these terms and
              conditions. If you have any questions or concerns, please contact
              us at
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
