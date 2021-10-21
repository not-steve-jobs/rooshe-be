import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import Recipe from './recipe';
import RecipeCategories from './recipeCategories';

const UserRecipeCategories = sequelize.define('user_recipe_categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

UserRecipeCategories.associate = () => {
    UserRecipeCategories.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    UserRecipeCategories.belongsTo(RecipeCategories,{
        foreignKey: {
            name: 'recipe_category_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = UserRecipeCategories;
