// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Digital Savings Accounts</h3>
            <p className="mb-4">Create and manage digital savings accounts with automatic transfers and goal tracking.</p>
            <a href="/account" className="text-green-500 hover:text-green-700">Learn More</a>
            <a href="/AccountHeader" className="text-green-500 hover:text-green-700">header</a>
          </div>

          {/* Service Card 2 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Loan Management</h3>
            <p className="mb-4">Easily apply for and manage loans with flexible repayment options and transparent terms.</p>
            <a href="#loan-management" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 3 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Peer-to-Peer Lending</h3>
            <p className="mb-4">Lend and borrow money within the community through a secure, user-driven platform.</p>
            <a href="#peer-lending" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 4 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Mobile Money Integration</h3>
            <p className="mb-4">Link your bank account with mobile wallets for instant transactions and transfers.</p>
            <a href="#mobile-money" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 5 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Financial Education & Advisory</h3>
            <p className="mb-4">Access tutorials, blogs, and advice to improve your financial literacy and planning.</p>
            <a href="#financial-education" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 6 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Insurance Products</h3>
            <p className="mb-4">Protect yourself and your family with affordable micro-insurance policies.</p>
            <a href="#insurance" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 7 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Offline Access to Banking</h3>
            <p className="mb-4">Manage your finances even without internet access using SMS and USSD banking services.</p>
            <a href="#offline-banking" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>

          {/* Service Card 8 */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-4">Community Savings & Loan Groups</h3>
            <p className="mb-4">Join or create savings and loan groups within your community to boost collective financial growth.</p>
            <a href="#community-groups" className="text-green-500 hover:text-green-700">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
