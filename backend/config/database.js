import { Sequelize } from "sequelize";

const db = new Sequelize('analog_camera_db', 'root', '', {
    host: '34.41.243.5',
    dialect: 'mysql'
});

export default db;
