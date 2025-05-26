import express from "express";
import { 
    getTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getUserTransactions
} from "../controllers/transactionController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', protect, admin, getTransactions);
router.get('/user', protect, getUserTransactions);
router.get('/:id', protect, getTransactionById);
router.post('/', protect, createTransaction);
router.patch('/:id', protect, admin, updateTransaction);
router.delete('/:id', protect, admin, deleteTransaction);

export default router;