Expense Tracker Project
Technologies:
MERN Stack (MongoDB, Express, React, Node.js)

Redux Toolkit

Tailwind CSS

React Context API (Dark Mode)

Chart.js

React Icons

Description:
The Expense Tracker is a full-stack web application designed to track users' expenses and visualize financial data through interactive charts. Built using the MERN stack, it allows users to add, delete, and view transactions under various categories (e.g., investment, food, bills). The application also includes dark mode functionality and a simple but effective user interface that presents key financial insights in the form of charts.

Features:
Transaction Management: Users can add, delete, and view transactions, categorizing them as needed.

Chart Visualization: Uses Chart.js to provide users with visual insights into their spending habits.

Category Management: Supports creating and managing expense categories for better organization.

Dark Mode: Toggle between light and dark modes using React Context API.

Responsive Design: Built with Tailwind CSS for a sleek, modern, and responsive UI.

Key Components:
Model: MongoDB models for categories and transactions to store user data.

Redux Toolkit: Used for state management, including adding, deleting, and updating transactions.

Transaction Form: Allows users to input transactions (name, amount, type) and save them to the database.

Expense Chart: Visualizes the expenses using pie charts.

Transaction List: Displays a list of all transactions, along with the ability to delete them.

Dark Mode: Provides an option to toggle dark/light mode to suit user preference.

Backend:
The backend is built using Express.js and connected to MongoDB to store transaction and category data. The backend APIs include functionality for:

Creating, retrieving, and deleting transactions

Creating and retrieving expense categories

Category and transaction management for an optimized experience

Frontend:
The frontend is built using React.js and styled with Tailwind CSS. It includes components for:

Displaying transaction data

Adding new transactions

Visualizing spending habits with interactive charts

Dark mode toggle
