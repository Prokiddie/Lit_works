// src/components/Features.js
import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Features Designed for You</h2>
        {/* Bootstrap Grid Layout */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Loan management</h5>
                <p className="card-text">Get personalized Loans.</p>
                <Link to="/feature/ai" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Voice-Activated Transactions</h5>
                <p className="card-text">Perform transactions using voice commands.</p>
                <Link to="/feature/voice" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cross-Border Payments</h5>
                <p className="card-text">Send and receive payments internationally.</p>
                <Link to="/feature/crossborder" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sustainable Investing</h5>
                <p className="card-text">Invest in ethical, eco-friendly projects.</p>
                <Link to="/feature/sustainable" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
