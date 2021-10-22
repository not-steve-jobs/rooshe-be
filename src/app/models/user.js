import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import HomeCook from './homeCook';
import UserBasket from './userBasket';
import SavedRecipe from './savedRecipe';
import RecipeLikes from  './recipeLikes';
import UserFollowers from './userFollowers';
import RecipeReviews from  './recipeReviews';
import RecipeComments from './recipeComments';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bDay: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    is_homeCook: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('active','inactive','suspended'),
        defaultValue: 'inactive'
    },
    address: {
        type: DataTypes.STRING
    },
    verifyToken: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.STRING
    },
    lon: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.ENUM('male', 'female')
    },
    profile_photo: {
        type: DataTypes.STRING
    }
});

User.hasOne(HomeCook,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeComments,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeLikes,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(RecipeReviews,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(SavedRecipe,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(UserBasket,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

User.hasMany(UserFollowers,{
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = User;
