// import { createSlice } from '@reduxjs/toolkit';

// // Initial state with `categories` and `transactions` to match the first implementation
// const initialState = {
//   categories: [], // Placeholder for category-related data if needed
//   transactions: [], // Stores the list of transactions
// };

// const expenseSlice = createSlice({
//   name: "expense",
//   initialState: {
//     transactions: [],
//   },
//   reducers: {
//     setTransactions: (state, action) => {
//       state.transactions = action.payload; // Updating the state with fetched transactions
//     },
//     addTransaction: (state, action) => {
//       state.transactions.push(action.payload); // Adding the new transaction to the state
//     },
//     deleteTransaction: (state, action) => {
//       state.transactions = state.transactions.filter((t) => t.id !== action.payload);
//     },
//   },
// });

// export const { setTransactions, addTransaction, deleteTransaction } = expenseSlice.actions;
// export default expenseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    { id: 1, type: "Food", amount: 50, color: "#ff6384" },
    { id: 2, type: "Transport", amount: 30, color: "#36a2eb" },
    { id: 3, type: "Shopping", amount: 20, color: "#cc65fe" },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;

