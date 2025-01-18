// // Import Graph if you want to display it
// // import Graph from './components/Graph'; 
// // import Form from './components/Form';
// import { useDarkMode } from './context/DarkModeContext';
// import './App.css';

// const App = () => {
//   const { darkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="container mx-auto max-w-6xl text-center">
//         {/* Header */}
//         <div className="flex justify-between items-center py-4">
//           <h1 className="text-4xl bg-slate-800 text-white rounded px-4 py-2">
//             Expense Tracker
//           </h1>
//           <button
//             onClick={toggleDarkMode}
//             className={`py-2 px-4 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-500 text-white'}`}
//           >
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="grid md:grid-cols-2 gap-4">
//           {/* Uncomment to display the graph */}
//           {/* <Graph />
//           <Form /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { useDarkMode } from './context/DarkModeContext';
import './App.css';
import { fetchTransaction } from './api'; // Ensure fetchTransaction is properly imported
import ExpenseChart from './compo/ExpenseChart.jsx';
import TransactionForm from './compo/TransactionForm.jsx';
import TransactionList from './compo/TransactionList.jsx';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing moon and sun icons

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [transactions, setTransactions] = useState([]);
  const [transactionsUpdated, setTransactionsUpdated] = useState(false);

  const handleTransactionCreated = () => setTransactionsUpdated(!transactionsUpdated);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetchTransaction();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, [transactionsUpdated]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container mx-auto max-w-6xl text-center">
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-4xl bg-slate-800 text-white rounded px-4 py-2">
            Expense Tracker
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`py-2 px-4 border rounded ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-indigo-500 text-white'
            }`}
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />} {/* Icons instead of text */}
          </button>
        </div>
        <TransactionForm onTransactionCreated={handleTransactionCreated} />
        <TransactionList transactions={transactions} />
        <ExpenseChart transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
