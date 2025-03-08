// src/ExchangeRate.js
import React, { useState } from 'react';

const ExchangeRate = () => {
  const [rate, setRate] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const data = await response.json();
      const fetchedRate = data.rates[targetCurrency];
      setRate(fetchedRate);
      // Save the exchange rate details to the backend
      await fetch('http://localhost:5001/api/exchange', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser._id,
          baseCurrency,
          targetCurrency,
          rate: fetchedRate,
          date: new Date().toISOString().split('T')[0]
        })
      });
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      alert('Error fetching exchange rate.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Currency Exchange</h2>
      <div>
        <label>
          Base Currency:&nbsp;
          <input type="text" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())} />
        </label>
      </div>
      <div>
        <label>
          Target Currency:&nbsp;
          <input type="text" value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())} />
        </label>
      </div>
      <button onClick={fetchExchangeRate}>Get Exchange Rate</button>
      {rate && <p>1 {baseCurrency} = {rate} {targetCurrency}</p>}
    </div>
  );
};

export default ExchangeRate;
