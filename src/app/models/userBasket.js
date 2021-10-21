import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import Recipe from './recipe';

const UserBasket = sequelize.define('user_basket', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

UserBasket.associate = () => {
    UserBasket.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    UserBasket.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = UserBasket;
