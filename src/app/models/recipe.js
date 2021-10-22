import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import HomeCook from './homeCook';
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

    Recipe.belongsTo(HomeCook, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(RecipeComments,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(RecipeLikes,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(RecipeReviews,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(SavedRecipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(UserBasket,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(UserHashtags,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    Recipe.hasMany(UserRecipeCategories,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Recipe;
