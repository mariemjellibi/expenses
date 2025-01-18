// routes/route.js
import express from 'express';
import {
  create_categories,
  get_categories,
  create_transaction,
  get_transactions,
  delete_transaction,
  get_labels
} from '../controller/controller.js';

const routes = express.Router();

// Categories routes
routes.route('/categories')
  .post(create_categories)  // Create category
  .get(get_categories);     // Get all categories

// Transactions routes
routes.route('/transactions')
  .post(create_transaction) // Create transaction
  .get(get_transactions);   // Get all transactions

routes.route('/transactions/:id')
  .delete(delete_transaction); // Delete transaction by ID

// Labels route
routes.route('/labels')
  .get(get_labels);          // Get all labels (categories)

export default routes;
