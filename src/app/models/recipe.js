import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import UserBasket from './userBasket';
import SavedRecipe from './savedRecipe';
import RecipeLikes from  './recipeLikes';
import UserHashtags from './userHashtags';
import RecipeReviews from './recipeReviews';
import RecipeComments from './recipeComments';
import UserRecipeCategories from './userRecipeCategories';

const Recipe = sequelize.define('recipe', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cook_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portion: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    view_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    like_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    share_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    comment_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rating: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    review_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ingredients: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'unpublished')
    }
});

Recipe.associate = () => {
    Recipe.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(RecipeComments,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(RecipeLikes,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(RecipeReviews,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(SavedRecipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(UserBasket,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(UserHashtags,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasOne(UserRecipeCategories,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Recipe;
