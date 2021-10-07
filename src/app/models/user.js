const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

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

module.exports = User;
