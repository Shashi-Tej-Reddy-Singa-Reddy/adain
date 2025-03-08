// Recommendations.js
import React, { useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetRecommendations = async () => {
    setLoading(true);
    setError(null);

    // Hardcoded user data to send to your Flask backend.
    const hardcodedUserData = {
      name: "Jane Doe",
      email: "jane@example.com",
      expenses: [
        { category: "Food", amount: 30 },
        { category: "Entertainment", amount: 50 }
      ],
      exchanges: [
        { baseCurrency: "USD", targetCurrency: "EUR", rate: 0.85 }
      ]
    };

    try {
      // POST the hardcoded data to the Flask endpoint
      const response = await axios.post("http://localhost:5002/api/ai-recommendations", {
        user: hardcodedUserData
      });
      // Assume the response returns an object like { text: "Your recommendation ..." }
      setRecommendation(response.data);
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>AI Recommendations</h1>
      <button onClick={handleGetRecommendations} disabled={loading}>
        {loading ? "Loading..." : "Get AI Recommendations"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {recommendation && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
          <h2>Recommendation</h2>
          <p>
            {recommendation.text
              ? recommendation.text
              : JSON.stringify(recommendation)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
