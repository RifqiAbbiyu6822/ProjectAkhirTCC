import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Camera = db.define('cameras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brand: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('SLR', 'Rangefinder', 'Point-and-Shoot', 'TLR'),
        allowNull: false
    },
    year_released: {
        type: DataTypes.INTEGER
    },
    format: {
        type: DataTypes.STRING(50)
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
        beforeSave: (camera) => {
            // Ensure stock doesn't go negative
            if (camera.stock < 0) {
                throw new Error('Stock cannot be negative');
            }
            // Ensure price is positive
            if (camera.price && camera.price < 0) {
                throw new Error('Price must be positive');
            }
        }
    }
});

// Sync the model
(async () => {
    await db.sync({ alter: true });
})();

export default Camera;