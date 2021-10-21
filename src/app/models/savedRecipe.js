import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import Recipe from './recipe';

const SavedRecipe = sequelize.define('saved_recipe', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

SavedRecipe.associate = () => {
    SavedRecipe.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    SavedRecipe.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = SavedRecipe;
