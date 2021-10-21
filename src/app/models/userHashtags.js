import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import Recipe from './recipe';
import RecipeHashtags from './recipeHashtags';

const UserHashtags = sequelize.define('user_hashtags', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

UserHashtags.associate = () => {
    UserHashtags.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    UserHashtags.belongsTo(RecipeHashtags,{
        foreignKey: {
            name: 'user_hashtag_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = UserHashtags;
