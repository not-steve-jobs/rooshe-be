import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import UserRecipeCategories from './userRecipeCategories';

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

RecipeCategories.associate = () => {
    RecipeCategories.hasOne(UserRecipeCategories,{
        foreignKey: {
            name: 'recipe_category_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = RecipeCategories;
