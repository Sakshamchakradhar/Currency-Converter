document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('form');
  const amountInput = document.querySelector('.amount input');
  const fromDropdown = document.querySelector('.from select');
  const toDropdown = document.querySelector('.to select');
  const msg = document.querySelector('.msg');

  // Fetch exchange rates when the page loads
  const exchangeRates = await getExchangeRates();

  // Populate currency dropdowns
  populateDropdowns(exchangeRates, fromDropdown, toDropdown);

  // Event listener for form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropdown.value;

    // Perform currency conversion
    const result = convertCurrency(amount, fromCurrency, toCurrency, exchangeRates);

    // Display the result
    msg.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  });
});
