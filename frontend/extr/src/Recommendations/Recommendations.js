// src/Recommendations.js
import React, { useState } from 'react';

const Recommendations = () => {
  const [recommendation, setRecommendation] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const fetchRecommendation = async () => {
    try {
      // Replace the URL and payload as required by your AI API
      const response = await fetch('https://api.google.com/gemini/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: currentUser._id })
      });
      const data = await response.json();
      setRecommendation(data.recommendation || 'No recommendation available at the moment.');
    } catch (error) {
      console.error('Error fetching AI recommendation:', error);
      setRecommendation('Error fetching recommendation.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>AI Recommendations</h2>
      <button onClick={fetchRecommendation}>Get AI Recommendation</button>
      {recommendation && <p>{recommendation}</p>}
    </div>
  );
};

export default Recommendations;
