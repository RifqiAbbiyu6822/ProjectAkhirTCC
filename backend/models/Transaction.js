import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define('transactions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transaction_type: {
        type: DataTypes.ENUM('purchase', 'rental'),
        allowNull: false
    },
    transaction_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_DATE')
    },
    return_date: {
        type: DataTypes.DATEONLY
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1
        }
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
        beforeSave: async (transaction) => {
            // Calculate total price if not provided
            if (!transaction.total_price && transaction.camera_id) {
                const camera = await db.models.Camera.findByPk(transaction.camera_id);
                if (camera) {
                    transaction.total_price = camera.price * transaction.quantity;
                }
            }
            
            // Validate rental return date
            if (transaction.transaction_type === 'rental' && !transaction.return_date) {
                throw new Error('Return date is required for rentals');
            }
        }
    }
});

// Define associations
Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
    });
    Transaction.belongsTo(models.Camera, {
        foreignKey: 'camera_id',
        as: 'camera'
    });
};

// Sync the model
(async () => {
    await db.sync({ alter: true });
})();

export default Transaction;