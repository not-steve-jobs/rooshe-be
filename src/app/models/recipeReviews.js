import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const RecipeReviews = sequelize.define('recipe_reviews', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    comment: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    }
});

module.exports = RecipeReviews;
