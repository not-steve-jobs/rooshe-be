const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database')
import Transaction from '../models/transaction'
const Account = sequelize.define("account", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique:true
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});
Account.hasMany(Transaction,{
    foreignKey: {
        name: 'account_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Transaction.belongsTo(Account,{
    foreignKey: {
        name: 'account_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


module.exports = Account