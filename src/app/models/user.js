import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import Recipe from './recipe';
import HomeCook from './homeCook';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bDay: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    is_homeCook: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('active','inactive','suspended'),
        defaultValue: 'inactive'
    },
    address: {
        type: DataTypes.STRING
    },
    verifyToken: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.STRING
    },
    lon: {
        type: DataTypes.STRING
    }
});

User.hasMany(Recipe,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasOne(HomeCook,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = User;
