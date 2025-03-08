// src/ExchangeRate.js
import React, { useState } from 'react';
import axios from 'axios';

// Replace with your actual API key
const apiKey = '2bdfe8cced5ff0e5202f8fcf';

const ExchangeRate = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);

  const convertINRtoUSD = async (amountInINR) => {
    try {
      // Make a request to the API to get the exchange rate for INR
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`);
      console.log("API called");

      // Extract the conversion rate for INR to USD
      const conversionRate = response.data.conversion_rates.USD;

      // Calculate the amount in USD
      const amountInUSD = amountInINR * conversionRate;

      // Set the result in state
      setConverted(amountInUSD.toFixed(2));
    } catch (error) {
      console.error('Error converting INR to USD:', error.message);
    }
  };

  const handleConvert = (e) => {
    e.preventDefault();
    if (!isNaN(amount) && Number(amount) > 0) {
      convertINRtoUSD(Number(amount));
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Currency Exchange (INR to USD)</h2>
      <form onSubmit={handleConvert}>
        <div>
          <label>
            Amount in INR:&nbsp;
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Convert</button>
      </form>
      {converted && <p>{amount} INR is equal to {converted} USD.</p>}
    </div>
  );
};

export default ExchangeRate;
