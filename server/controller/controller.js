// controller/controller.js
import { Category, Transaction } from "../models/model.js";

// Create a new category
export const create_categories = async (req, res) => {
  try {
    const category = new Category({
      type: req.body.type || "investment",
      color: req.body.color || "#FCBE44",
    });

    // Save the category to the database
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "An error occurred while creating the category" });
  }
};

// Get all categories
export const get_categories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "An error occurred while fetching categories" });
  }
};

// Create a new transaction
export const create_transaction = async (req, res) => {
  try {
    const { name, type, amount } = req.body;

    if (!name || !type || !amount) {
      return res.status(400).json({ error: "All fields (name, type, amount) are required" });
    }

    const transaction = new Transaction({
      name,
      type,
      amount,
    });

    // Save the transaction to the database
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "An error occurred while creating the transaction" });
  }
};

// Get all transactions
export const get_transactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found" });
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "An error occurred while fetching transactions" });
  }
};

// Delete a transaction by ID
export const delete_transaction = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: "Transaction ID is required" });
    }

    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json({
      message: "Transaction deleted successfully",
      deletedTransaction
    });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ error: "An error occurred while deleting the transaction" });
  }
};

// Get all labels (categories)
export const get_labels = async (req, res) => {
  try {
    // Fetch all categories from the database
    const labels = await Category.find();

    if (!labels || labels.length === 0) {
      return res.status(404).json({ message: "No labels found" });
    }

    // Respond with the labels
    res.status(200).json(labels);
  } catch (error) {
    // Log and send error response
    console.error("Error fetching labels:", error);
    res.status(500).json({ error: "An error occurred while fetching labels" });
  }
};
