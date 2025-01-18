// src/store/expenseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { setTransactions, addTransaction, deleteTransaction } =
  expenseSlice.actions;

export default expenseSlice.reducer;
