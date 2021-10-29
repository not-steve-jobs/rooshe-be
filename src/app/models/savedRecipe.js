import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const SavedRecipe = sequelize.define('saved_recipe', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

module.exports = SavedRecipe;
