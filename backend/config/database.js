import { Sequelize } from "sequelize";

const db = new Sequelize('analog_camera_db', 'root', '', {
    host: '34.57.165.209',
    dialect: 'mysql'
});

export default db;
