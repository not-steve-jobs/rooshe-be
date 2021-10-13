import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import Recipe from './recipe';
import Homecook from './homecook';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
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
    isHomeCook: {
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
});

User.hasMany(Recipe,{
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
User.hasOne(Homecook,{
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = User;
