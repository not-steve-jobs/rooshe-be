import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const RecipeCategories = sequelize.define('recipe_categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = RecipeCategories;
