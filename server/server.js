// server.js (Main entry point of the app)
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/route.js'; // Adjust if path is different

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes defined in the 'routes' directory
app.use('/api', routes); // Prefix routes with "/api"

// Database connection (ensure MongoDB is set up correctly)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Database connection error:', error));

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
