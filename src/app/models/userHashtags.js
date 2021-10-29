import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const UserHashtags = sequelize.define('user_hashtags', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

module.exports = UserHashtags;
