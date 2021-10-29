import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const UserRecipeCategories = sequelize.define('user_recipe_categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

module.exports = UserRecipeCategories;
