import { useState, useEffect } from 'react';
import { fetchTransaction, deleteTransaction } from '../api';

const TransactionList = ({ transactionsUpdated }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTransaction();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };
    fetchData();
  }, [transactionsUpdated]); // Re-fetch transactions when transactionsUpdated changes

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(transactions.filter((transaction) => transaction._id !== id));
    } catch (error) {
      console.error('Error deleting transaction', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200"
          >
            <span className="text-gray-700">
              {transaction.name} - {transaction.type} - ${transaction.amount}
            </span>
            <button
              onClick={() => handleDelete(transaction._id)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
