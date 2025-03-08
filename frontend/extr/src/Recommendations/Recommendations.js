// src/Recommendations.js
import React, { useState } from 'react';

const Recommendations = () => {
  const [recommendation, setRecommendation] = useState('');

  const fetchRecommendation = async () => {
    try {
      // Placeholder API call – replace with the actual Google Gemini API endpoint and required headers/API key
      const response = await fetch('https://api.google.com/gemini/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
          user_id: JSON.parse(localStorage.getItem('currentUser')).id,
          // You can include additional expense data as needed
        }),
      });
      const data = await response.json();
      // Assuming the API returns a field called "recommendation"
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
