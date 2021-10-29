import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const RecipeHashtags = sequelize.define('recipe_hashtags', {
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

module.exports = RecipeHashtags;
