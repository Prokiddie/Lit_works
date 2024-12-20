import React from 'react';

function TransactionHistory() {
  const transactions = [
    { date: '01/12/2024', type: 'Deposit', amount: '$200.00' },
    { date: '28/11/2024', type: 'Withdrawal', amount: '$100.00' }
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
