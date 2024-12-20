import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ChartComponent from './ChartComponent';  // Assuming this is your chart component

const Dashboard = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-green-400 to-orange-500 text-white text-center ">
        <div className="container">
          <h1 className="display-5">Welcome to Your Dashboard</h1>
          <p className="lead">Track your financial progress and manage your savings & loans.</p>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <div className="container-fluid bg-light min-h-100% p-4">
        {/* Hero Section (Already included above) */}

        {/* Dashboard Header */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h1 className="display-5">Welcome, [User's Name]</h1>
            <p className="text-muted">Here’s an overview of your finances</p>
          </div>
          <div className="col-md-6 text-md-end">
            <button className="btn btn-primary">View Full Report</button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-lg hover-shadow transition">
              <div className="card-body text-center">
                <h5 className="card-title">Total Savings</h5>
                <p className="card-text fs-4 fw-bold">$5,000</p>
                <button className="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-lg hover-shadow transition">
              <div className="card-body text-center">
                <h5 className="card-title">Loans</h5>
                <p className="card-text fs-4 fw-bold">$2,000</p>
                <button className="btn btn-outline-warning btn-sm">Manage Loans</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-lg hover-shadow transition">
              <div className="card-body text-center">
                <h5 className="card-title">Upcoming Payments</h5>
                <p className="card-text fs-4 fw-bold">$500</p>
                <button className="btn btn-outline-danger btn-sm">Pay Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-lg hover-shadow transition">
              <div className="card-body text-center">
                <h5 className="card-title">Recent Transactions</h5>
                <p className="card-text fs-4 fw-bold">15</p>
                <button className="btn btn-outline-secondary btn-sm">View All</button>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow border-0 p-4">
              <h5 className="card-title">Financial Trends</h5>
              <div className="text-center">
                <div className="bg-light" style={{ height: "500px" }}>
                  <p className="text-muted pt-5">Chart Placeholder</p>
                  <ChartComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
