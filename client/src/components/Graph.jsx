// import { Chart, ArcElement } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import Labels from "./Labels"; // Labels component for displaying transaction types
// import { useSelector } from "react-redux";

// Chart.register(ArcElement);

// const Graph = () => {
//   const transactions = useSelector((state) => state.expense.transactions);

//   if (!transactions || transactions.length === 0) {
//     return <p className="text-center text-gray-500">No data available to display the chart.</p>;
//   }

//   const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);

//   const config = {
//     labels: transactions.map((t) => t.type),
//     datasets: [
//       {
//         label: "Expenses",
//         data: transactions.map((t) => t.amount),
//         backgroundColor: transactions.map((t) => t.color || "#ddd"),
//         hoverOffset: 4,
//         borderRadius: 30,
//       },
//     ],
//   };

//   return (
//     <div className="flex justify-center max-w-xs mx-auto">
//       <div className="relative p-4 rounded shadow bg-white dark:bg-gray-800">
//         <Doughnut data={config} options={{ cutout: 115, plugins: { legend: { display: false } } }} />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h3 className="font-bold text-gray-700 dark:text-white">
//             Total
//             <span className="block text-3xl text-emerald-400">${total}</span>
//           </h3>
//         </div>
//         <div className="flex flex-col py-10 gap-4">
//           <Labels /> {/* Render Labels to display transaction info */}
//         </div>
//       </div>
//     </div>
//   );
// };



// export default Graph;
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Labels from "./Labels";

Chart.register(ArcElement);

const Graph = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (isLoading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (transactions.length === 0) return <p className="text-center text-gray-500">No data available to display the chart.</p>;

  const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  const config = {
    labels: transactions.map((t) => t.type),
    datasets: [
      {
        label: "Expenses",
        data: transactions.map((t) => t.amount),
        backgroundColor: transactions.map((t) => t.color || "#ddd"),
        hoverOffset: 4,
        borderRadius: 30,
      },
    ],
  };

  return (
    <div className="flex justify-center max-w-xs mx-auto">
      <div className="relative p-4 rounded shadow bg-white dark:bg-gray-800">
        <Doughnut data={config} options={{ cutout: 115, plugins: { legend: { display: false } } }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="font-bold text-gray-700 dark:text-white">
            Total
            <span className="block text-3xl text-emerald-400">${total}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels transactions={transactions} /> {/* Pass transactions as prop */}
        </div>
      </div>
    </div>
  );
};

export default Graph;
