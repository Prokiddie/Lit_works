import React from 'react';

function AccountHeader() {
  return (
    <div className="account-header">
      <img src="profile.jpg" alt="Profile" className="profile-img" />
      <h1>John Doe</h1>
      <p>Account Number: 123456789</p>
      <p>Account Type: Savings</p>
      <p>Balance: $500.00</p>
    </div>
  );
}

export default AccountHeader;
