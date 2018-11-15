'use strict';
// Listen for submit
document
  .querySelector('#loan-form')
  .addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  // UI Vars
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const CalculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, CalculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * CalculatedPayments).toFixed(2);
    totalInterest.value = (monthly * CalculatedPayments - principal).toFixed(2);
  } else {
    console.log('Please check your numbers');
  }
  e.preventDefault();
}
