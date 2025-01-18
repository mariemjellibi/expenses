// import React from "react";
// import { useSelector } from "react-redux";

// const Labels = () => {
//   const transactions = useSelector((state) => state.expense.transactions);

//   if (!transactions || transactions.length === 0) {
//     return <p className="text-center text-gray-500">No transactions yet.</p>;
//   }

//   return (
//     <div>
//       {transactions.map((transaction, index) => (
//         <LabelComponent key={index} data={transaction} />
//       ))}
//     </div>
//   );
// };

// function LabelComponent({ data }) {
//   if (!data) return null;

//   return (
//     <div className="labels flex justify-between items-center mb-4">
//       <div className="flex gap-2 items-center">
//         <div className="w-4 h-4 rounded-full" style={{ backgroundColor: data.color || "#000" }}></div>
//         <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">{data.type}</h3>
//       </div>
//       <h3 className="font-bold text-gray-700 dark:text-gray-300">${data.amount}</h3>
//     </div>
//   );
// }

// export default Labels;
import React from "react";

const Labels = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p className="text-center text-gray-500">No transactions yet.</p>;
  }

  return (
    <div>
      {transactions.map((transaction, index) => (
        <LabelComponent key={index} data={transaction} />
      ))}
    </div>
  );
};

function LabelComponent({ data }) {
  if (!data) return null;

  return (
    <div className="labels flex justify-between items-center mb-4">
      <div className="flex gap-2 items-center">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: data.color || "#000" }}></div>
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">{data.type}</h3>
      </div>
      <h3 className="font-bold text-gray-700 dark:text-gray-300">${data.amount}</h3>
    </div>
  );
}

export default Labels;
