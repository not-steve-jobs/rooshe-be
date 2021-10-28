import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import Recipe from './recipe';

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
    }
});

RecipeComments.associate = () => {
    RecipeComments.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    RecipeComments.belongsTo(Recipe,{
        foreignKey: {
            name: 'recipe_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = RecipeComments;
