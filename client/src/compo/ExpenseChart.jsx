import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  // Aggregate amounts by name
  const categories = transactions.reduce((acc, transaction) => {
    if (acc[transaction.name]) {
      acc[transaction.name] += transaction.amount;
    } else {
      acc[transaction.name] = transaction.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories), // Use names as labels
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(categories), // Amounts corresponding to names
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FFA07A', '#90EE90'], // Add more colors as needed
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FFA07A', '#90EE90'],
      },
    ],
  };

  const totalExpenses = Object.values(categories).reduce((sum, amount) => sum + amount, 0);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Expense Breakdown</h2>
      <Doughnut data={data} />
      <div className="mt-6">
        <h3 className="text-lg font-bold">Total Expenses</h3>
        <p className="text-2xl font-bold text-blue-600">${totalExpenses}</p>
      </div>
    </div>
  );
};

export default ExpenseChart;
