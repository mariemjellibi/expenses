// models/model.js
import mongoose from 'mongoose';

// Category Schema
const categorySchema = new mongoose.Schema(
  {
    type: { type: String, default: "investment" },
    color: { type: String, default: "#FCBE44" }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Transaction Schema
const transactionSchema = new mongoose.Schema(
  {
    name: { type: String, default: "anonymous" },
    type: { type: String, default: "investment" },
    amount: { type: Number, required: true }, // Ensure amount is required
    date: { type: Date, default: Date.now }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Model creation
const Category = mongoose.model('Category', categorySchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

export { Category, Transaction };
