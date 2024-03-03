// Function to fetch exchange rates from an API
async function getExchangeRates() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await response.json();
  return data.rates;
}

// Function to populate currency dropdowns with options
// codes.js

// Function to populate currency dropdowns with options
function populateDropdowns(rates, fromDropdown, toDropdown) {
  const currencies = Object.keys(rates);

  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    fromDropdown.appendChild(option);

    const toOption = document.createElement('option');
    toOption.value = currency;
    toOption.text = currency;
    toDropdown.appendChild(toOption);
  });

  // Set default selected values for the 'from' and 'to' dropdowns
  fromDropdown.value = 'USD';
  toDropdown.value = 'INR';
}


// Function to perform currency conversion
function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];

  if (fromRate && toRate) {
    const convertedAmount = (amount / fromRate) * toRate;
    return convertedAmount.toFixed(2);
  } else {
    return 'Invalid currency';
  }
}
