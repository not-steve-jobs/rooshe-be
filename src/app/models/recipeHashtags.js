import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import UserHashtags from './userHashtags';

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

RecipeHashtags.associate = () => {
    RecipeHashtags.hasMany(UserHashtags,{
        foreignKey: {
            name: 'user_hashtag_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = RecipeHashtags;
