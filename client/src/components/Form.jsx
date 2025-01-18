// import { useState } from 'react';
// import { useAddTransactionMutation } from '../store/apiSlice';
// import List from './List'; // Import List component to display transactions

// const Form = () => {
//   const [form, setForm] = useState({ type: '', amount: 0, color: '#000' });
//   const [addTransaction] = useAddTransactionMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const transactionData = {
//       name: form.name || "Default Name", // Ensure name is included
//       type: form.type,
//       amount: parseFloat(form.amount),
//       color: form.color,
//     };
  
//     try {
//       console.log("Submitting transaction data:", transactionData);
  
//       const response = await fetch("http://localhost:5000/api/transactions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(transactionData),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to add transaction");
//       }
  
//       const result = await response.json();
//       console.log("Transaction added:", result);
//       setForm({ name: '', type: '', amount: 0, color: '#000' }); // Reset form
//     } catch (error) {
//       console.error(error.message);
//       alert(error.message);
//     }
//   };
  
//   return (
//     <div className="form max-w-sm mx-auto w-96">
//       <h1 className="font-bold pb-4 text-xl">Transaction</h1>
//       <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
//         <div className="grid gap-4">
//           <input
//             type="text"
//             value={form.type}
//             onChange={(e) => setForm({ ...form, type: e.target.value })}
//             placeholder="Transaction Type"
//             className="p-2 border rounded w-full"
//           />
//           <input
//             type="number"
//             value={form.amount}
//             onChange={(e) => setForm({ ...form, amount: +e.target.value })}
//             placeholder="Amount"
//             className="p-2 border rounded w-full"
//           />
//           <input
//             type="color"
//             value={form.color}
//             onChange={(e) => setForm({ ...form, color: e.target.value })}
//             className="p-2 border rounded w-full"
//           />
//           <button type="submit" className="py-2 text-white bg-indigo-500 w-full rounded">
//             Add Transaction
//           </button>
//         </div>
//       </form>
//       <List /> {/* Render the List component */}
//     </div>
//   );
// };

// export default Form;
import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({ type: '', amount: 0, color: '#000' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionData = {
      type: form.type,
      amount: parseFloat(form.amount),
      color: form.color,
    };

    try {
      const response = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add transaction");
      }

      const result = await response.json();
      console.log("Transaction added:", result);

      setForm({ type: '', amount: 0, color: '#000' }); // Reset form
      setError(''); // Clear previous errors
    } catch (err) {
      setError(err.message); // Display error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        placeholder="Transaction Type"
      />
      <input
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: +e.target.value })}
        placeholder="Amount"
      />
      <input
        type="color"
        value={form.color}
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <button type="submit">Add Transaction</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;
