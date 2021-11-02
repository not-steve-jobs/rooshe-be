import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const RecipeComments = sequelize.define('recipe_comments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parrent_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = RecipeComments;
