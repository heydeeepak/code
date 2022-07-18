import { Sequelize } from "sequelize";
const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    user: 'root',
    password: 'Password123@',
    dialect: 'mysql'
});
export default db;