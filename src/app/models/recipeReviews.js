import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import Recipe from './recipe';

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

RecipeReviews.associate = () => {
    RecipeReviews.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    RecipeReviews.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = RecipeReviews;
