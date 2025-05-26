import { Sequelize } from "sequelize";
import db from "../config/database.js";
import bcrypt from "bcryptjs";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName: true,
    timestamps: false, // Since we're using created_at manually
    hooks: {
        beforeSave: async (user) => {
            if (user.changed('password_hash')) {
                user.password_hash = await bcrypt.hash(user.password_hash, 10);
            }
        }
    }
});

// Instance method for password comparison
User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password_hash);
};

// Sync the model
(async () => {
    await db.sync({ alter: true });
})();

export default User;