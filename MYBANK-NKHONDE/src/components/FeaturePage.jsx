// src/components/FeaturePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const FeaturePage = () => {
  const { id } = useParams(); // Grab the id from the URL
  const featureDetails = {
    ai: "AI Financial Assistant helps you make smarter financial decisions.",
    voice: "Voice-Activated Transactions enable hands-free operations.",
    crossborder: "Cross-Border Payments allow seamless transactions across countries.",
    sustainable: "Sustainable Investing supports eco-friendly and socially responsible projects."
  };

  return (
    <div className="feature-page">
      <h1>{id.charAt(0).toUpperCase() + id.slice(1)} Feature</h1>
      <p>{featureDetails[id]}</p>
    </div>
  );
};

export default FeaturePage;
