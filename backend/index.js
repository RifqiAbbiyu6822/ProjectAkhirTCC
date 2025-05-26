import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";
import UserRoute from "./routes/userRoutes.js";
import CameraRoute from "./routes/cameraRoutes.js";
import TransactionRoute from "./routes/transactionRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    
    // Sync all models (alter: true for development only)
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
})();

// Routes
app.use("/api/users", UserRoute);
app.use("/api/cameras", CameraRoute);
app.use("/api/transactions", TransactionRoute);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);