// // import React from "react";
// // import "boxicons";
// // import { useGetTransactionsQuery, useDeleteTransactionMutation } from "../store/apiSlice";

// // const List = () => {
// //   const { data: transactions = [], isLoading, isError } = useGetTransactionsQuery();
// //   const [deleteTransaction] = useDeleteTransactionMutation();

// //   if (isLoading) return <p className="text-gray-500">Loading...</p>;
// //   if (isError) return <p className="text-red-500">Error loading transactions.</p>;

// //   return (
// //     <div className="flex flex-col py-6 gap-3">
// //       <h1 className="py-4 font-bold text-xl">History</h1>
// //       {transactions.map((transaction) => (
// //         <Transaction
// //           key={transaction.id}
// //           transaction={transaction}
// //           onDelete={deleteTransaction}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // const Transaction = ({ transaction, onDelete }) => {
// //   const handleDelete = () => {
// //     onDelete(transaction.id); // Delete transaction
// //   };

// //   return (
// //     <div
// //       className="item flex justify-between bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded"
// //       style={{ borderLeft: `8px solid ${transaction.color ?? "#e5e5e5"}` }}
// //     >
// //       <button onClick={handleDelete} className="px-3">
// //         <box-icon name="trash" color="#888" size="md"></box-icon>
// //       </button>
// //       <span className="flex-1 text-gray-700 dark:text-gray-300">{transaction.type}</span>
// //       <span className="font-semibold text-gray-800 dark:text-gray-200">${transaction.amount}</span>
// //     </div>
// //   );
// // };

// // export default List;
// import React, { useState, useEffect } from "react";
// import "boxicons";

// const List = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/transactions");
//         if (!response.ok) throw new Error("Failed to fetch transactions");

//         const data = await response.json();
//         setTransactions(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   const deleteTransaction = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/transactions/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) throw new Error("Failed to delete transaction");

//       // Remove the deleted transaction from the state
//       setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
//     } catch (err) {
//       console.error("Error deleting transaction:", err.message);
//     }
//   };

//   if (isLoading) return <p className="text-gray-500">Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="flex flex-col py-6 gap-3">
//       <h1 className="py-4 font-bold text-xl">History</h1>
//       {transactions.map((transaction) => (
//         <Transaction key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
//       ))}
//     </div>
//   );
// };

// const Transaction = ({ transaction, onDelete }) => {
//   const handleDelete = () => {
//     onDelete(transaction.id); // Delete transaction
//   };

//   return (
//     <div
//       className="item flex justify-between bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded"
//       style={{ borderLeft: `8px solid ${transaction.color ?? "#e5e5e5"}` }}
//     >
//       <button onClick={handleDelete} className="px-3">
//         <box-icon name="trash" color="#888" size="md"></box-icon>
//       </button>
//       <span className="flex-1 text-gray-700 dark:text-gray-300">{transaction.type}</span>
//       <span className="font-semibold text-gray-800 dark:text-gray-200">${transaction.amount}</span>
//     </div>
//   );
// };

// export default List;
import { useState, useEffect } from 'react';

const List = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/transactions");
        if (!response.ok) throw new Error("Failed to fetch transactions");

        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <span>{transaction.type}</span> - <span>${transaction.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
