import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const UserBasket = sequelize.define('user_basket', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

module.exports = UserBasket;
