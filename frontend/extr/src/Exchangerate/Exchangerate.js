// src/ExchangeRate.js
import React, { useState } from 'react';
import axios from 'axios';

// Replace with your actual API key
const apiKey = '2bdfe8cced5ff0e5202f8fcf';

const ExchangeRate = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('INR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [converted, setConverted] = useState(null);

  const convertCurrency = async (amount, baseCurrency, targetCurrency) => {
    try {
      // Get the latest exchange rates for the base currency
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
      console.log("API called");

      // Extract the conversion rate for the target currency
      const conversionRate = response.data.conversion_rates[targetCurrency];
      if (!conversionRate) {
        throw new Error(`Conversion rate for ${targetCurrency} not found`);
      }

      // Calculate the converted amount
      const amountConverted = amount * conversionRate;
      setConverted(amountConverted.toFixed(2));
    } catch (error) {
      console.error('Error converting currency:', error.message);
      setConverted(null);
    }
  };

  const handleConvert = (e) => {
    e.preventDefault();
    if (!isNaN(amount) && Number(amount) > 0) {
      convertCurrency(Number(amount), baseCurrency, targetCurrency);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Currency Exchange</h2>
      <form onSubmit={handleConvert}>
        <div>
          <label>
            Amount:&nbsp;
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Base Currency:&nbsp;
            <input
              type="text"
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Target Currency:&nbsp;
            <input
              type="text"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
              required
            />
          </label>
        </div>
        <button type="submit">Convert</button>
      </form>
      {converted && (
        <p>
          {amount} {baseCurrency} is equal to {converted} {targetCurrency}.
        </p>
      )}
    </div>
  );
};

export default ExchangeRate;
