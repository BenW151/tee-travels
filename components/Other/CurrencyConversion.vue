<template>
  <div>
    <div class="converter">
      <p>1 {{ fromCurrency }} Equals {{ conversionRate }}</p>

      <!-- Dropdown for selecting target currency -->
      <select v-model="userCurrency">
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency">
          {{ currency }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  fromCurrency: {
    type: String,
    default: "EUR",
  },
  toCurrency: {
    type: String,
    default: "GBP",
  },
});

const amount = ref(1); // Default to 1 for conversion rate display
const userCurrency = ref(props.toCurrency);
const conversionRate = ref(null);
const currencies = ref(["GBP", "EUR", "AUD", "CAD", "USD", "JPY"]);

const apiKey = "your_api_key_here"; // For testing purposes

// Function to fetch and update conversion rate
const convertCurrency = async () => {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${props.fromCurrency}`
    );
    const data = await response.json();
    conversionRate.value = data.rates[userCurrency.value].toFixed(2);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
};

// Automatically fetch conversion rate on component mount and currency change
onMounted(() => {
  convertCurrency();
});
watch(userCurrency, convertCurrency);
</script>

<style scoped>
input,
select {
  border: none;
  outline: none;
  border-radius: 0;
  color: var(--foreground-primary);
  background-color: transparent;
  position: relative;
  width: 5vw;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

p {
  margin: 0;
}

.converter {
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin-bottom: var(--spacing-1);
}

select option {
  padding: 10px;
  background: transparent;
}
</style>
