import { where } from "sequelize";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import Camera from "../models/Camera.js";

export const getTransactions = async (req, res) => {
    try {
        const response = await Transaction.findAll({
            include: [
                { model: User, attributes: ['id', 'username'] },
                { model: Camera, attributes: ['id', 'brand', 'model'] }
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getTransactionById = async (req, res) => {
    try {
        const response = await Transaction.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: User, attributes: ['id', 'username'] },
                { model: Camera, attributes: ['id', 'brand', 'model'] }
            ]
        });
        if (!response) {
            return res.status(404).json({ error: "Transaction not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createTransaction = async (req, res) => {
    try {
        const { user_id, camera_id, transaction_type, quantity } = req.body;
        
        // Check if user exists
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if camera exists
        const camera = await Camera.findByPk(camera_id);
        if (!camera) {
            return res.status(404).json({ error: "Camera not found" });
        }

        // Check stock for purchase
        if (transaction_type === 'purchase' && camera.stock < quantity) {
            return res.status(400).json({ error: "Not enough stock available" });
        }

        const total_price = camera.price * quantity;
        const transactionData = {
            ...req.body,
            total_price,
            transaction_date: new Date()
        };

        await Transaction.create(transactionData);

        // Update stock if purchase
        if (transaction_type === 'purchase') {
            await Camera.update(
                { stock: camera.stock - quantity },
                { where: { id: camera_id } }
            );
        }

        res.status(201).json({ msg: "Transaction Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        await Transaction.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Transaction Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        await Transaction.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Transaction Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};