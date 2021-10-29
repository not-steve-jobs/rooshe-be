import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const UserFollowers = sequelize.define('user_followers', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

module.exports = UserFollowers;
